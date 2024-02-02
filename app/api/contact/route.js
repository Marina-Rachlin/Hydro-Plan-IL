import { NextRequest, NextResponse } from 'next/server';
import dotenv from 'dotenv'
dotenv.config();

export async function POST(req) {
    const data = await new Response(req.body).json();
    const { name, email, message, subject } = data;
  
        const to = process.env.MAIL_TO_ADDRESS;
        const body = `From: ${name}<br>E-Mail: ${email}<br>Message:<br>${message}`;

        const nodemailer = require('nodemailer');
        const transporter = nodemailer.createTransport({
            host:process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            auth: {
                user: process.env.MAIL_USERNAME,
                pass: process.env.MAIL_PASSWORD,
            }
        });

        try {
            await transporter.sendMail({
                from: email,
                to,
                subject: `New Message from Hydro-Plan IL:`,
                html: body,
            });
            return NextResponse.json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error(error);
            return NextResponse.json({ error: 'Error sending email' });
        }
}