import * as React from "react";

interface EmailTemplateProps {
    fullName: string;
    phoneNumber: string;
    email: string;
    institutionName: string;
    designation?: string;
    message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    fullName,
    email,
    phoneNumber,
    institutionName,
    designation,
    message,
}) => (
    <div>
        <p>
            Name:<b>{fullName}</b>
        </p>
        <p>
            Phone:<b>{phoneNumber}</b>
        </p>
        <p>
            Email ID:<b>{email}</b>
        </p>
        <p>
            Institution Name:<b>{institutionName}</b>
        </p>
        <p>
            Designattion:<b>{designation}</b>
        </p>
        <p>
            Message:<b>{message}</b>
        </p>
    </div>
);
