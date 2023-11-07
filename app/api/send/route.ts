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
        const companyCopy = await sgMail.send({
            from: 'Third Eye Contact Form <radha.s@dimension64.com>',
            to: 'reach.us@dimension64.com',
            subject: `Product Demo Request - Action Required`,
            html:`<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
            <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
            <head>
            <!--[if gte mso 9]>
            <xml>
              <o:OfficeDocumentSettings>
                <o:AllowPNG/>
                <o:PixelsPerInch>96</o:PixelsPerInch>
              </o:OfficeDocumentSettings>
            </xml>
            <![endif]-->
              <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <meta name="x-apple-disable-message-reformatting">
              <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
              <title></title>

                <style type="text/css">
                  @media only screen and (min-width: 520px) {
              .u-row {
                width: 500px !important;
              }
              .u-row .u-col {
                vertical-align: top;
              }

              .u-row .u-col-100 {
                width: 500px !important;
              }

            }

            @media (max-width: 520px) {
              .u-row-container {
                max-width: 100% !important;
                padding-left: 0px !important;
                padding-right: 0px !important;
              }
              .u-row .u-col {
                min-width: 320px !important;
                max-width: 100% !important;
                display: block !important;
              }
              .u-row {
                width: 100% !important;
              }
              .u-col {
                width: 100% !important;
              }
              .u-col > div {
                margin: 0 auto;
              }
            }
            body {
              margin: 0;
              padding: 0;
            }

            table,
            tr,
            td {
              vertical-align: top;
              border-collapse: collapse;
            }

            p {
              margin: 0;
            }

            .ie-container table,
            .mso-container table {
              table-layout: fixed;
            }

            * {
              line-height: inherit;
            }

            a[x-apple-data-detectors='true'] {
              color: inherit !important;
              text-decoration: none !important;
            }

            table, td { color: #000000; } </style>



            </head>

            <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: transparent;color: #000000">
              <!--[if IE]><div class="ie-container"><![endif]-->
              <!--[if mso]><div class="mso-container"><![endif]-->
              <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: transparent;width:100%" cellpadding="0" cellspacing="0">
              <tbody>
              <tr style="vertical-align: top">
                <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: transparent;"><![endif]-->



            <div class="u-row-container" style="padding: 0px;background-color: #ffffff">
              <div class="u-row" style="margin: 0 auto 0 0;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #ffffff;" align="left"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->

            <!--[if (mso)|(IE)]><td align="center" width="500" style="background-color: #ffffff;width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
            <div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
              <div style="background-color: #ffffff;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
              <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->

            <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
              <tbody>
                <tr>
                  <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">

            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="padding-right: 0px;padding-left: 0px;" align="left">

                  <img align="left" border="0" src="https://thirdeye-website.vercel.app/logo.svg" alt="" title="" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 168px;" width="168"/>

                </td>
              </tr>
            </table>

                  </td>
                </tr>
              </tbody>
            </table>

            <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
              <tbody>
                <tr>
                  <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">

              <div style="font-size: 14px; font-weight: 400; line-height: 140%; text-align: left; word-wrap: break-word;">
                <p style="line-height: 140%;">Dear Team,</p>
            <p style="line-height: 140%;"> </p>
            <p style="line-height: 140%;"> </p>
            <p style="line-height: 140%;">I hope this message finds you well. We have received a product demo request from a potential client, and I wanted to inform you of this upcoming opportunity.</p>
            <p style="line-height: 140%;"> </p>
            <p style="line-height: 140%;"> </p>
            <p style="line-height: 140%;">Name: ${name}</p>
            <p style="line-height: 140%;">Institute: ${institutionName}</p>
            <p style="line-height: 140%;">Email ID: ${email}</p>
            <p style="line-height: 140%;">Phone Number: ${phoneNumber}</p>
            <p style="line-height: 140%;"> </p>
            <p style="line-height: 140%;"> </p>
            <p style="line-height: 140%;">The client has expressed a strong interest in our product and is eager to learn more. To ensure a successful demo that aligns with their needs and expectations, we need to plan accordingly.</p>
            <p style="line-height: 140%;"> </p>
            <p style="line-height: 140%;"> </p>
            <p style="line-height: 140%;">Best regards,</p>
            <p style="line-height: 140%;">Dimesnion64 Consulting Private Limited</p>
            <p style="line-height: 140%;">+91 98450 76500</p>
            <p style="line-height: 140%;"> </p>
              </div>

                  </td>
                </tr>
              </tbody>
            </table>

              <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
              </div>
            </div>
            <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
              </div>



                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                </td>
              </tr>
              </tbody>
              </table>
              <!--[if mso]></div><![endif]-->
              <!--[if IE]></div><![endif]-->
            </body>

            </html>
            `,
        });



        return NextResponse.json(companyCopy);
    } catch (error) {
        return NextResponse.json({ error });
    }
}