import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import type { PricingCardProps } from '~/interfaces/common';

export default function PricingCard({ title, description, open, price, image }: PricingCardProps) {
	console.log('Registration Pricing', title, description, open, price, image);
	return (
		<>
			{open ? (
				<Card className="max-w-lg border border-[#e5e7eb] bg-[#f9fafb]">
					<CardHeader>
						<CardTitle>Startup</CardTitle>
						<CardDescription>A plan that scales with your rapidly growing business.</CardDescription>
						<Badge className="absolute right-4 top-4" variant="secondary">
							Most popular
						</Badge>
					</CardHeader>
					<CardContent>
						<div className="text-4xl font-bold">
							$30 <span className="text-lg">/month</span>
						</div>
						<Button className="mt-6 w-full bg-[#6366f1]" disabled={open}>
							Buy plan
						</Button>
						<ul className="mt-6 space-y-2">
							<li>✓ 25 products</li>
							<li>✓ Up to 10,000 subscribers</li>
							<li>✓ Advanced analytics</li>
							<li>✓ 24-hour support response time</li>
							<li>✓ Marketing automations</li>
						</ul>
					</CardContent>
				</Card>
			) : (
				<Card className="w-full">
					<CardHeader>
						<CardTitle>Freelancer</CardTitle>
						<CardDescription>The essentials to provide your best work for clients.</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="text-4xl font-bold">
							$15 <span className="text-lg">/month</span>
						</div>
						<Button className="mt-6 w-full">Buy plan</Button>
						<ul className="mt-6 space-y-2">
							<li>✓ 5 products</li>
							<li>✓ Up to 1,000 subscribers</li>
							<li>✓ Basic analytics</li>
							<li>✓ 48-hour support response time</li>
						</ul>
					</CardContent>
				</Card>
			)}
		</>
	);
}
