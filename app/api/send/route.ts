import { EmailTemplate } from '../../../components/email-template';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const { name, email, message, phoneNumber, institutionName, designation } = body;
        console.log(body);

        //@ts-ignore
        const data = await resend.emails.send({
            from: 'Third Eye Contact Form <onboarding@resend.dev>',
            to: 'reach.us@dimension64.com',
            subject: `${name} filled the contact form`,
            react: EmailTemplate({
                fullName: name,
                message: message,
                phoneNumber: phoneNumber,
                email: email,
                institutionName: institutionName,
                designation: designation
            }),
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}
