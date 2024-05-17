import { Card, CardContent, CardFooter } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import type { MerchProps } from '~/interfaces/content';

export default function MerchCard({ title, description, price, image, badge, badgeColour }: MerchProps) {
	console.log('MerchCard', title, price, badgeColour);

	return (
		<Card className="mx-auto max-w-lg">
			<CardContent className="pt-6">
				<img
					alt="2024 Infant Home Jersey"
					className={`w-full rounded-lg bg-${badgeColour}`}
					height="200"
					src={image}
					style={{
						aspectRatio: '200/200',
						objectFit: 'cover',
					}}
					width="200"
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
				<Button className="w-full border-2">Buy Now</Button>
			</CardFooter>
		</Card>
	);
}
