import nodemailer from 'nodemailer';
import { google } from 'googleapis';

const OAuth2 = google.auth.OAuth2;

async function createTransporter() {
    const oauth2Client = new OAuth2(
        process.env.GMAIL_OAUTH2_CLIENT_ID, // YOUR_CLIENT_ID
        process.env.GMAIL_OAUTH2_CLIENT_SECRET, // YOUR_CLIENT_SECRET
        process.env.GMAIL_OAUTH2_REDIRECT_URI // YOUR_REDIRECT_URI
    );

    oauth2Client.setCredentials({
        refresh_token: process.env.GMAIL_OAUTH2_REFRESH_TOKEN
    });

    const accessToken = await new Promise<string>((resolve, reject) => {
        oauth2Client.getAccessToken((err, token) => {
            if (err || !token) {
                reject("Failed to create access token: " + (err ? err.message : "Unknown error"));
            } else {
                resolve(token);
            }
        });
    });
    

    return nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: 'your-email@gmail.com', // Your email
            accessToken: accessToken,
            clientId: process.env.GMAIL_OAUTH2_CLIENT_ID,
            clientSecret: process.env.GMAIL_OAUTH2_CLIENT_SECRET,
            refreshToken: process.env.GMAIL_OAUTH2_REFRESH_TOKEN
        }
    });
}

type EmailProps = {
    from: string;
    to: string;
    subject: string;
    text: string;
    html: string;
};

async function sendEmail({ from, to, subject, text, html }: EmailProps) {
    try {
        const transporter = await createTransporter();
        const result = await transporter.sendMail({ from, to, subject, text, html });
        console.log("Email successfully sent!", result);
        return result;
    } catch (error) {
        console.error("Failed to send email", error);
        throw error; // Rethrow the error if you want to handle it upstream
    }
}

export { sendEmail };
