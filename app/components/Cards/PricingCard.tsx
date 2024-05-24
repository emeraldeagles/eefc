import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import type { RegoPrices } from '~/interfaces/content';
import { Link } from '@remix-run/react';
import { Badge } from '../ui/badge';

export default function PricingCard({ title, description, open, price, image, info, link }: RegoPrices) {
	return (
		<Card className={`w-full ${!open ? 'border border-[#e5e7eb] bg-[#f9fafb]' : null}`}>
			<CardHeader>
				<div className="flex justify-between">
					<CardTitle>{title}</CardTitle>
					<Badge
						className={`${open ? 'border border-primary text-primary' : 'border border-muted text-muted'}`}
						variant="outline">
						{open ? 'Open' : 'Closed'}
					</Badge>
				</div>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="text-4xl font-bold">
					{price}
					<span className="text-lg">/season</span>
				</div>
				<Button className={`mt-6 w-full ${!open ? 'bg-muted' : ''}`} disabled={!open}>
					<Link to={link} target="_blank" rel="noopener noreferrer">
						Register Now
					</Link>
				</Button>
				<ul className="mt-6 space-y-2">
					{info.map(i => {
						return <li key={i}>✓ {i}</li>;
					})}
				</ul>
			</CardContent>
		</Card>
	);
}
