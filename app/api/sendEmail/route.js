import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "moonkitchenbarcurri@gmail.com",
      subject: "New Reservation Request",
      html: `
        <h2>New Reservation Request</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        <p><strong>Date:</strong> ${body.date}</p>
        <p><strong>Time:</strong> ${body.time}</p>
        <p><strong>Number of Guests:</strong> ${body.guests}</p>
        <p><strong>Special Requests:</strong> ${body.message || "None"}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
