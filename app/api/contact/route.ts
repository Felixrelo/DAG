import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, fromAddress, toAddress, moveDate, message } = body;

    // Validate required fields
    if (!name || !phone || !fromAddress || !toAddress) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // TODO: Implement email sending via Resend or other service
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'noreply@yourdomain.com',
    //   to: 'your-email@example.com',
    //   subject: `Neue Umzugsanfrage von ${name}`,
    //   html: `
    //     <h2>Neue Umzugsanfrage</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Telefon:</strong> ${phone}</p>
    //     <p><strong>E-Mail:</strong> ${email || 'Nicht angegeben'}</p>
    //     <p><strong>Von:</strong> ${fromAddress}</p>
    //     <p><strong>Nach:</strong> ${toAddress}</p>
    //     <p><strong>Wunschtermin:</strong> ${moveDate || 'Nicht angegeben'}</p>
    //     <p><strong>Nachricht:</strong> ${message || 'Keine Nachricht'}</p>
    //   `,
    // });

    console.log('New contact form submission:', { name, phone, fromAddress, toAddress });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
