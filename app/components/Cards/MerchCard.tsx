import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import type { MerchCardProps } from '~/interfaces/common';

export default function MerchCard({ title, description, price, image, badge }: MerchCardProps) {
	console.log(title, price);

	return (
		<Card className="mx-auto max-w-lg">
			<CardHeader className="flex content-end">
				<Badge className="max-w-max">KIDS</Badge>
			</CardHeader>
			<CardContent>
				<img
					alt="2024 Infant Home Jersey"
					className="w-full"
					height="200"
					src="https://placehold.co/940x788"
					style={
						{
							// aspectRatio: '200/200',
							// objectFit: 'cover',
						}
					}
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
