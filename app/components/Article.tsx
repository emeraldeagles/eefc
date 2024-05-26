import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import type { Carnivals, Events, News } from '~/interfaces/content';
import { Link } from '@remix-run/react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import SectionTitle from './SectionTitle';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Icon } from './Icon';
import { ArrowUpRight } from './IconPaths/ArrowUpRight';

type Props = {
	category: string;
	content: News | Carnivals | Events;
};

export default function Article({ category, content }: Props): JSX.Element {
	console.log('Article news content => ', content);

	// check if content is empty and return loading div to alert user
	if (!content) {
		return <div>Loading...</div>;
	}

	const cardContent = content.description.split('\n');
	const cardTitle = cardContent[0];
	// remove the first item from the cardContent array as this is being used as the cardTtitle now
	cardContent.shift();

	return (
		<div>
			<SectionTitle category={'Post'} />
			<Card className="sm:rounded-lg">
				<CardHeader className="flex flex-row items-center gap-4 border-b">
					<Avatar className="h-20 w-20 border p-1 shadow-md">
						<AvatarImage src="/images/eefclogo.png" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<div className="flex flex-col justify-center gap-1.5">
						<CardTitle>{cardTitle}</CardTitle>
						<CardDescription>{content.date}</CardDescription>
						<CardDescription>
							<Badge variant="outline">
								<Link to={content.link} rel="no-referrer" className="flex items-center gap-1 text-sm hover:text-accent">
									View original post
									<span className="inline-block">
										<Icon iconPath={<ArrowUpRight />} iconSize={16} iconColor="" />
									</span>
								</Link>
							</Badge>
						</CardDescription>
					</div>
				</CardHeader>
				<CardContent className="pt-0">
					{cardContent.map(i => {
						return (
							<p key={i} className="overflow-hidden">
								{i}
								<br />
							</p>
						);
					})}
				</CardContent>
				<CardFooter className="flex flex-col p-0">
					<Carousel
						opts={{
							align: 'start',
							loop: true,
						}}>
						<CarouselContent>
							{content.images.map((image, index) => {
								return (
									<CarouselItem key={index} className="m-6 flex justify-center">
										<img
											className="h-full content-center rounded-lg object-contain"
											src={image}
											alt={content.description}
											loading="lazy"
										/>
									</CarouselItem>
								);
							})}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</CardFooter>
			</Card>
		</div>
	);
}
