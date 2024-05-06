import { Link } from '@remix-run/react';
import { Button } from '../ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import type { BasicCardProps } from '~/interfaces/common';
import { useState, useRef } from 'react';
import cn from 'classnames';

export default function BasicCard({ id, description, images, link, date, category }: BasicCardProps) {
	const cardRef = useRef<HTMLDivElement>(null);
	const [glowPosition, setGlowPosition] = useState<CSSProperties & { [key: string]: string | number }>({});

	const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
		const card = cardRef.current;
		if (card) {
			const { top, left } = card.getBoundingClientRect();
			// Adjust the values to account for the scroll offset
			const x = event.clientX - left + window.scrollX;
			const y = event.clientY - top + window.scrollY;
			setGlowPosition({
				'--glow-x': x + 'px',
				'--glow-y': y + 'px',
			});
		}
	};

	return (
		<div
			ref={cardRef}
			onMouseMove={handleMouseMove}
			onMouseLeave={() => setGlowPosition({})}
			className={cn('relative w-full overflow-hidden rounded-lg bg-[#f9fafb]', {
				'glow-effect': glowPosition.hasOwnProperty('--glow-x') && glowPosition.hasOwnProperty('--glow-y'),
			})}
			style={glowPosition}>
			<Card className="rounded-lg border-[#e5e7eb]">
				<CardHeader className="p-0">
					<img className="h-48 w-full rounded-t-lg object-cover" src={images[0]} alt={description} />
				</CardHeader>
				<CardContent className="p-4">
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
				<CardFooter className="flex justify-center pt-4">
					<Button variant="outline" className="w-full border-2 border-lime-500">
						<Link to={`/${category}/${id}`}>Read more</Link>
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
