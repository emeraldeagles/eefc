import { Button } from '../ui/button';
import type { ResourceCardProps } from '~/interfaces/common';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '../ui/card';
import { FileText } from 'lucide-react';
import { Badge } from '../ui/badge';

export default function ResourceCard({ title, description, image, link, category }: ResourceCardProps) {
	return (
		<Card className="border-[#e5e7eb] sm:rounded-lg">
			<CardHeader>
				<div className="flex h-48 w-full items-center justify-center rounded-lg bg-gray-200 object-cover p-0">
					{/* <Icon strokeWidth={1} iconPath={<FileText />} iconSize={140} iconColor="" /> */}
					<FileText size={120} strokeWidth="1" />
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
				<Button variant="outline" className="w-full border-2 border-primary">
					<a href={link} target="_blank" rel="noopener noreferrer">
						View File
					</a>
				</Button>
			</CardFooter>
		</Card>
	);
}
