import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
// import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
// import type { PricingCardProps } from '~/interfaces/common';
import { RegoPrices } from '~/interfaces/content';

export default function PricingCard({ title, description, open, price, image, info }: RegoPrices) {
	console.log('Registration Pricing', title, description, open, price, image, info);
	return (
		<>
			{!open ? (
				<Card className="max-w-lg border border-[#e5e7eb] bg-[#f9fafb]">
					<CardHeader>
						<CardTitle>{title}</CardTitle>
						<CardDescription>{description}</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="text-4xl font-bold">
							{price}
							<span className="text-lg">/season</span>
						</div>
						<Button className="mt-6 w-full bg-[#6366f1]" disabled={open}>
							Register
						</Button>
						<ul className="mt-6 space-y-2">
							{info.map(i => {
								return <li key={i}>✓ {i}</li>;
							})}
						</ul>
					</CardContent>
				</Card>
			) : (
				<Card className="w-full">
					<CardHeader>
						<CardTitle>{title}</CardTitle>
						<CardDescription>{description}</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="text-4xl font-bold">
							{price}
							<span className="text-lg">/season</span>
						</div>
						<Button className="mt-6 w-full">Register</Button>
						<ul className="mt-6 space-y-2">
							{info.map(i => {
								return <li key={i}>✓ {i}</li>;
							})}
						</ul>
					</CardContent>
				</Card>
			)}
		</>
	);
}
