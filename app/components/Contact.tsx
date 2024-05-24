import { useState } from 'react';
import { Form } from '@remix-run/react';
import SectionTitle from './SectionTitle';

export default function Contact() {
	const [formData, setFormData] = useState({
		fullName: '',
		mobile: '',
		email: '',
		message: '',
	});

	const handleChange = (event: any) => {
		const { name, value } = event.target;
		setFormData(prevState => ({
			...prevState,
			[name]: value,
		}));
	};

	return (
		<>
			<SectionTitle category="Contact" />
			<div className="min-h-content grid grid-cols-2">
				<div className="relative rounded-l-lg bg-gray-200 p-16 shadow-sm">
					<iframe
						title="Google Maps"
						className="absolute inset-0 h-full w-full opacity-50"
						frameBorder="0"
						src="https://www.google.com/maps/embed/v1/place?key=&q=Dundas+Street,Emerald,QLD+4720&zoom=16"
						allowFullScreen></iframe>
				</div>
				<div className="flex flex-col justify-center rounded-r-lg bg-white p-16 shadow-sm">
					<p className="mb-4 text-gray-700">
						The Emerald Eagles Football Club is located in the heart of Emerald on Dundas St.
					</p>
					{/* Using Form component from Remix for native form handling */}
					<Form method="post" action="/api/sendEmail" className="space-y-4 pt-4">
						<div className="grid grid-cols-2 gap-4">
							<input
								className="rounded-lg border border-gray-300 p-2"
								id="fullName"
								name="fullName"
								type="text"
								placeholder="Full name"
								required
								value={formData.fullName}
								onChange={handleChange}
							/>
							<input
								className="w-full rounded-lg border border-gray-300 p-2"
								id="mobile"
								name="mobile"
								type="text"
								placeholder="Mobile number"
								required
								value={formData.mobile}
								onChange={handleChange}
							/>
						</div>
						<input
							className="w-full rounded-lg border border-gray-300 p-2"
							id="email"
							name="email"
							type="email"
							placeholder="Email"
							required
							value={formData.email}
							onChange={handleChange}
						/>
						<textarea
							className="w-full rounded-lg border border-gray-300 p-4"
							id="message"
							name="message"
							placeholder="Message"
							required
							rows={6}
							value={formData.message}
							onChange={handleChange}></textarea>
						<button
							type="submit"
							className="w-full rounded-lg bg-accent/80 px-4 py-2 font-bold text-white hover:bg-accent">
							Submit
						</button>
					</Form>
				</div>
			</div>
		</>
	);
}
