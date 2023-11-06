import { EmailTemplate } from '../../../components/email-template';
import { NextRequest, NextResponse } from 'next/server';

import sgMail from '@sendgrid/mail';


//ts-ignore
sgMail.setApiKey('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');

export async function POST(request: NextRequest) {
    try {


        const body = await request.json();

        const { name, email, message, phoneNumber, institutionName, designation } = body;

        //@ts-ignore
        const data = await sgMail.send({
            from: 'Third Eye Contact Form <radha.s@dimension64.com>',
            to: 'reach.us@dimension64.com',
            subject: `${name} filled the contact form`,
            html:`
            <!DOCTYPE html
                PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
            <html lang="en">

            <head>
                <meta charset="utf-8">

                <title>The HTML5 Herald</title>
                <meta name="description" content="The HTML5 Herald">
                <meta name="author" content="SitePoint">
                <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />


            </head>

            <body>
                <div class="img-container"
                    style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">
                </div>
                <div class="container" style="margin-left: 20px;margin-right: 20px;">
                    <h3>You've got a new mail from ${name}, their email is: ✉️${email} </h3>
                    <div style="font-size: 16px;">
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
                        </div>
                        <br>
                    </div>
                </div>
            </body>

            </html>`,
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}