import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import type { MerchProps } from '~/interfaces/content';

export default function MerchCard({ title, description, price, image, badge, badgeColour }: MerchProps) {
	console.log('MerchCard', title, price, badgeColour);

	return (
		<Card className="mx-auto max-w-lg">
			<CardHeader className="flex content-end">
				<Badge variant={badgeColour} className="max-w-max">
					{badge}
				</Badge>
			</CardHeader>
			<CardContent>
				<img
					alt="2024 Infant Home Jersey"
					className="w-full rounded-lg"
					height="200"
					src="https://placehold.co/940x788"
					style={{
						aspectRatio: '200/200',
						objectFit: 'cover',
					}}
					width="200"
				/>
				<h3 className="mt-4 text-lg font-semibold">{title}</h3>
				<p className="text-xl font-bold">{price}</p>
			</CardContent>
			<CardFooter className="flex justify-center pt-4">
				<Button variant="outline" className="w-full border-2 border-lime-500">
					Buy Now
				</Button>
			</CardFooter>
		</Card>
	);
}
