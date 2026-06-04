import { NextResponse } from "next/server";
import sql from "mssql";
import { getDbConfig } from "@/lib/db";

export async function POST(request: Request) {
  let pool: sql.ConnectionPool | null = null;

  try {
    const { firstName, lastName, phone, email, callbackDate, callbackSlot } =
      await request.json();

    if (!firstName || !lastName || !phone || !email) {
      return NextResponse.json(
        { error: "Alle Felder sind erforderlich." },
        { status: 400 }
      );
    }

    const callbackParts = [callbackDate, callbackSlot].filter(Boolean).join(" ");
    const fullName = callbackParts
      ? `${firstName} ${lastName} | Rückruf: ${callbackParts}`
      : `${firstName} ${lastName}`;
    const threadId = crypto.randomUUID();
    const companyId = process.env.COMPANY_ID
      ? parseInt(process.env.COMPANY_ID)
      : null;

    pool = await sql.connect(getDbConfig());

    await pool
      .request()
      .input("thread_id", sql.NVarChar(255), threadId)
      .input("full_name", sql.NVarChar(sql.MAX), fullName)
      .input("email", sql.NVarChar(sql.MAX), email)
      .input("phone", sql.NVarChar(sql.MAX), phone)
      .input("company_id", sql.Int, companyId)
      .input("Status", sql.VarChar(50), "START")
      .query(`
        INSERT INTO ReloAI.Leads (thread_id, full_name, email, phone, company_id, Status, updatedAt)
        VALUES (@thread_id, @full_name, @email, @phone, @company_id, @Status, GETDATE())
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
