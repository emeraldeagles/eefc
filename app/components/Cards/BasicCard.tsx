import { Link } from '@remix-run/react';
import { Button } from '../ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import type { BasicCardProps } from '~/interfaces/common';
import { CARD_CATEGORY } from '~/constants/constants';

export default function BasicCard({ id, description, images, link, date, category }: BasicCardProps) {
	const categoryPath = category === CARD_CATEGORY.CARNIVALS ? 'events/carnivals' : category;

	return (
		<Link to={`/${categoryPath?.toLowerCase()}/${id}`} className="hover:shadow-lg">
			<Card className="rounded-lg border-[#e5e7eb] sm:rounded-t-lg">
				<CardHeader className="p-6 sm:rounded-t-lg sm:p-0">
					<img
						className="h-auto w-full rounded-lg border-[#e5e7eb] object-center sm:h-60 sm:rounded-b-none sm:rounded-t-lg"
						src={
							images.length > 0
								? images[0]
								: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/991px-Placeholder_view_vector.svg.png'
						}
						alt={description}
						loading="lazy"
					/>
				</CardHeader>
				<CardContent className="px-6 sm:p-6">
					<div
						className="overflow-hidden text-ellipsis text-sm leading-tight"
						style={{
							display: '-webkit-box',
							WebkitLineClamp: '2',
							WebkitBoxOrient: 'vertical',
						}}>
						{description}
					</div>
				</CardContent>
				<CardFooter className="flex justify-center">
					<Button variant="outline" className="w-full border-2">
						Read more
					</Button>
				</CardFooter>
			</Card>
		</Link>
	);
}
