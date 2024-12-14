import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email, message } = await request.json();

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // Replace with your SMTP host
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to:  process.env.EMAIL_USER, // Replace with your destination email
      subject: "New Contact Form Message",
      text: `From: ${email}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error handling contact form:", error);
    return NextResponse.json(
      { message: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
