import { json } from '@remix-run/node';
import { sendEmail } from '~/utils/mailer';

export const action = async ({ request }: any) => {
	const formData = await request.formData();
	const fullName = formData.get('fullName');
	const mobile = formData.get('mobile');
	const email = formData.get('email');
	const message = formData.get('message');

	const emailResponse = await sendEmail({
		from: 'admin@emeraldeagles.com.au', // This should ideally be a verified sender in Gmail
		to: 'admin@emeraldeagles.com.au',
		subject: 'New Website Enquiry',
		text: `You have received a new message from ${fullName} <${email}>. \n\nMessage: \n${message}`,
		html: `<p>You have received a new message from <strong>${fullName} <${email}>, <${mobile}></strong></p><p>Message: <br>${message}</p>`,
	});

	if (emailResponse.accepted) {
		return json({ success: true });
	} else {
		return json({ success: false, error: emailResponse });
	}
};
