import { Card, CardContent, CardFooter } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import type { MerchProps } from '~/interfaces/content';
import { Link } from '@remix-run/react';

export default function MerchCard({ title, description, price, image, badge, link, badgeColour }: MerchProps) {
	console.log('MerchCard', title, price, badgeColour);

	return (
		<Card className="mx-auto max-w-lg">
			<CardContent className="pt-6">
				<img
					alt="2024 Infant Home Jersey"
					// className={`w-full rounded-lg bg-${badgeColour}`}
					className={`w-full rounded-lg bg-muted/10`}
					height="200"
					src={image}
					style={{
						aspectRatio: '200/200',
						objectFit: 'cover',
					}}
					width="200"
					loading="lazy"
				/>
				<h3 className="mt-4 text-lg font-semibold">{title}</h3>
				<p className="text-xl font-bold">{price}</p>
				{badge ? (
					<Badge variant="outline" className={`max-w-max text-${badgeColour} border-${badgeColour}`}>
						{badge}
					</Badge>
				) : null}
			</CardContent>
			<CardFooter className="flex justify-center">
				<Link to={link} className="w-full" target="_blank" rel="noopener noreferrer">
					<Button className="w-full hover:border">Buy Now</Button>
				</Link>
			</CardFooter>
		</Card>
	);
}
