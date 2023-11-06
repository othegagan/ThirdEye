import { EmailTemplate } from '../../../components/email-template';
import { NextRequest, NextResponse } from 'next/server';

import sgMail from '@sendgrid/mail';

// const SENDGRID_API_KEY = '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'

//ts-ignore
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request: NextRequest) {
    try {


        const body = await request.json();

        const { name, email, message, phoneNumber, institutionName, designation } = body;

        //@ts-ignore
        const data = await sgMail.send({
            from: 'Third Eye Contact Form <radha.s@dimension64.com>',
            to: 'reach.us@dimension64.com',
            subject: `${name} filled the contact form`,

            html: `<h3>You've got a new mail from ${name}, their email is: ✉️${email} </h3>
            <div style="font-size: 16px;">
            <p>Message:</p>
            <div>
            <p>
                Name:<b>${name}</b>
            </p>
            <p>
                Phone:<b>${phoneNumber}</b>
            </p>
            <p>
                Email ID:<b>${email}</b>
            </p>
            <p>
                Institution Name:<b>${institutionName}</b>
            </p>
            <p>
                Designattion:<b>${designation}</b>
            </p>
            <p>
                Message:<b>${message}</b>
            </p>
        </div>`,
        });



        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}
