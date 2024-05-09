import { Button } from '../ui/button';
import type { ResourceCardProps } from '~/interfaces/common';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '../ui/card';
import { Icon } from '../Icon';
import { FileText } from 'lucide-react';
import { Badge } from '../ui/badge';

export default function ResourceCard({ title, description, image, link, category }: ResourceCardProps) {
	return (
		<Card className="rounded-lg border-[#e5e7eb]">
			<CardHeader>
				<div className="flex h-48 w-full items-center justify-center rounded-lg bg-gray-300 object-cover p-0">
					<Icon strokeWidth={1} iconPath={<FileText />} iconSize={140} iconColor="" />
				</div>
			</CardHeader>
			<CardContent className="flex-grow">
				<CardDescription className="text-md h-12 font-semibold">{description}</CardDescription>
				<Badge
					variant={
						category as
							| 'default'
							| 'club'
							| 'rules'
							| 'squadi'
							| 'drills'
							| 'secondary'
							| 'destructive'
							| 'outline'
							| null
							| undefined
					}
					className="mt-4 text-sm font-light">
					{category}
				</Badge>
			</CardContent>
			<CardFooter className="flex justify-center">
				<Button variant="outline" className="w-full border-2 border-lime-500">
					<a href={link} target="_blank" rel="noopener noreferrer">
						View File
					</a>
				</Button>
			</CardFooter>
		</Card>
	);
}
