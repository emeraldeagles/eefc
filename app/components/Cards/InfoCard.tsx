import type { InfoCardProps } from '~/interfaces/common';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';
import { CARD_CATEGORY } from '~/constants/constants';
import { Link } from '@remix-run/react';
import { getImageHeight } from '~/utils/UIhelpers';

export default function InfoCard({ title, description, image, team, ageGroup, category, link }: InfoCardProps) {
	return (
		<>
			{link ? (
				<Link to={link} className="hover:shadow-lg">
					<Card className="w-full overflow-hidden border-[#e5e7eb] bg-[#f9fafb]">
						<CardHeader className="p-0">
							<img
								className={`${getImageHeight(category ? category : 'h-60')} rounded-t object-cover`}
								src={image ? image : 'https://placehold.co/940x788'}
								alt={title}
							/>
						</CardHeader>
						<CardContent className="p-0">
							<div className="bg-green-500 px-6 py-1 text-2xl font-bold text-white">{title}</div>
						</CardContent>
						<CardFooter className="flex justify-start gap-2 pt-6">
							{description && category === CARD_CATEGORY.COACHES ? (
								<Badge variant="outline" className="border-yellow-500 text-yellow-500">
									{description}
								</Badge>
							) : (
								description
							)}
							{ageGroup ? (
								<Badge variant="outline" className="border-pink-500 text-pink-500">
									{ageGroup}
								</Badge>
							) : null}
							{team ? (
								<Badge variant="outline" className="border-purple-500 text-purple-500">
									{team}
								</Badge>
							) : null}
						</CardFooter>
					</Card>
				</Link>
			) : (
				<Card className="w-full overflow-hidden border-[#e5e7eb] bg-[#f9fafb]">
					<CardHeader className="p-0">
						<img
							className="h-60 rounded-t object-cover"
							src={image ? image : 'https://placehold.co/940x788'}
							alt={title}
						/>
					</CardHeader>
					<CardContent className="p-0">
						<div className="bg-green-500 px-6 py-1 text-2xl font-bold text-white">{title}</div>
					</CardContent>
					<CardFooter className="flex justify-start gap-2 pt-6">
						{description && category === CARD_CATEGORY.COACHES ? (
							<Badge variant="outline" className="border-yellow-500 text-yellow-500">
								{description}
							</Badge>
						) : (
							description
						)}
						{ageGroup ? (
							<Badge variant="outline" className="border-pink-500 text-pink-500">
								{ageGroup}
							</Badge>
						) : null}
						{team ? (
							<Badge variant="outline" className="border-purple-500 text-purple-500">
								{team}
							</Badge>
						) : null}
					</CardFooter>
				</Card>
			)}
		</>
	);
}
