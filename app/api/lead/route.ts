import { NextResponse } from "next/server";
import sql from "mssql";
import { getDbConfig } from "@/lib/db";

export async function POST(request: Request) {
  let pool: sql.ConnectionPool | null = null;

  try {
    const { firstName, lastName, phone, email, callbackDate, callbackSlot, leadSource } =
      await request.json();

    if (!firstName || !lastName || !phone || !email) {
      return NextResponse.json(
        { error: "Alle Felder sind erforderlich." },
        { status: 400 }
      );
    }

    // DAG is a per-brand tenant: its leads live in ReloAI.leads_DAG (where the
    // funnel writes), not the shared ReloAI.Leads (which is FK-bound to
    // ReloAI.Company and has no DAG row). leads_DAG only requires thread_id;
    // company_id is left null like the funnel's own rows.
    const threadId = "RB-" + crypto.randomUUID();
    const callbackParts = [callbackDate, callbackSlot].filter(Boolean).join(" ");
    const personalTag = callbackParts ? `Rückruf: ${callbackParts}` : "Rückruf-Anfrage";

    pool = await sql.connect(getDbConfig());

    await pool
      .request()
      .input("thread_id", sql.NVarChar(255), threadId)
      .input("first_name", sql.NVarChar(sql.MAX), firstName)
      .input("last_name", sql.NVarChar(sql.MAX), lastName)
      .input("email", sql.NVarChar(sql.MAX), email)
      .input("phone", sql.NVarChar(sql.MAX), phone)
      .input("lead_source", sql.NVarChar(255), leadSource || "DAG")
      .input("progress", sql.NVarChar(255), "START")
      .input("personal_tag", sql.NVarChar(sql.MAX), personalTag)
      .input("lang", sql.NVarChar(50), "de")
      .query(`
        INSERT INTO ReloAI.leads_DAG
          (thread_id, first_name, last_name, email, phone, lead_source, progress, personal_tag, lang, created_at)
        VALUES
          (@thread_id, @first_name, @last_name, @email, @phone, @lead_source, @progress, @personal_tag, @lang, GETDATE())
      `);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Lead creation error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  } finally {
    if (pool) {
      try {
        await pool.close();
      } catch {}
    }
  }
}
