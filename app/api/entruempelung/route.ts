import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import brandConfig from '@/brand.json';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, propertyType, address, size, date, notes } = body;

    if (!name || !phone || !propertyType || !address) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const notificationEmail = brandConfig.integrations?.resend?.notificationEmail || brandConfig.company.email;

    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: 'DAG Dahoam Logistik <noreply@relofair.com>',
        to: notificationEmail,
        subject: `Neue Entrümpelung-Anfrage von ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background-color: #1E4785; padding: 20px; text-align: center;">
              <h1 style="color: white; margin: 0;">Neue Entrümpelung-Anfrage</h1>
            </div>
            <div style="padding: 30px; background-color: #f9f9f9;">
              <h2 style="color: #1E4785; margin-top: 0;">Kontaktdaten</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; width: 140px;">Name:</td>
                  <td style="padding: 8px 0;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Telefon:</td>
                  <td style="padding: 8px 0;"><a href="tel:${phone}">${phone}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">E-Mail:</td>
                  <td style="padding: 8px 0;">${email || 'Nicht angegeben'}</td>
                </tr>
              </table>

              <h2 style="color: #1E4785; margin-top: 30px;">Details zur Entrümpelung</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; width: 140px;">Art der Immobilie:</td>
                  <td style="padding: 8px 0;">${propertyType}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Adresse:</td>
                  <td style="padding: 8px 0;">${address}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Größe:</td>
                  <td style="padding: 8px 0;">${size ? `ca. ${size} m²` : 'Nicht angegeben'}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Wunschtermin:</td>
                  <td style="padding: 8px 0;">${date || 'Nicht angegeben'}</td>
                </tr>
              </table>

              ${notes ? `
              <h2 style="color: #1E4785; margin-top: 30px;">Besonderheiten</h2>
              <div style="background-color: white; padding: 15px; border-radius: 8px; border: 1px solid #ddd;">
                ${notes.replace(/\n/g, '<br>')}
              </div>
              ` : ''}
            </div>
            <div style="padding: 20px; background-color: #1E4785; text-align: center;">
              <p style="color: white; margin: 0; font-size: 14px;">DAG Dahoam Logistik - Ihr bayerischer Umzugspartner</p>
            </div>
          </div>
        `,
      });
    } else {
      console.log('New entrümpelung request:', { name, phone, email, propertyType, address, size, date, notes });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Entrümpelung form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
