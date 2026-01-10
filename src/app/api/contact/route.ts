import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  console.log('🔵 Contact API called'); // Check if route is hit
  
  try {
    const { name, email, subject, message } = await request.json();
    console.log('📧 Form data received:', { name, email, subject });
    console.log('🔑 Email credentials:', {
      user: process.env.EMAIL_USER,
      passExists: !!process.env.EMAIL_PASS
    });

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    console.log('📮 Attempting to send email...');

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'info@dominionmedia.co.uk',
      subject: `Contact Form: ${subject}`,
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Subject: ${subject}</p>
        <p>Message: ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully');

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('❌ Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
  }
}