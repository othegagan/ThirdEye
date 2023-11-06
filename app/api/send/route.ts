import { EmailTemplate } from '../../../components/email-template';
import { NextRequest, NextResponse } from 'next/server';

import sgMail from '@sendgrid/mail';

const SENDGRID_API_KEY = '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'

//ts-ignore
sgMail.setApiKey(SENDGRID_API_KEY);

export async function POST(request: NextRequest) {
    try {


        const body = await request.json();

        const { name, email, message, phoneNumber, institutionName, designation } = body;
        console.log(body);

        //@ts-ignore
        const data = await sgMail.send({
            from: 'Third Eye Contact Form <radha.s@dimension64.com>',
            to: 'reach.us@dimension64.com',
            subject: `${name} filled the contact form`,

            html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">

        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />

        <link rel="stylesheet" href="css/styles.css?v=1.0">

      </head>

      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>You've got a new mail from ${name}, their email is: ✉️${email} </h3>
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
          </div>
              <br>
              </div>
              <img src="https://manuarora.in/logo.png" class="logo-image" style="height: 50px;width: 50px;border-radius: 5px;overflow: hidden;">
              <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">Regards<br>Manu Arora<br>Software Developer<br>+91 9587738861</p>
              <div class="footer-links" style="display: flex;justify-content: center;align-items: center;">
                <a href="https://manuarora.in/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Website</a>
                <a href="https://manuarora.in/blog/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Blog</a>
                <a href="https://github.com/manuarora700/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">GitHub</a>
                <a href="https://instagram.com/maninthere/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Instagram</a>
                <a href="https://linkedin.com/in/manuarora28/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">LinkedIn</a>
                <a href="https://twitter.com/mannupaaji/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Twitter</a>

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
