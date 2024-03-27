import type { InfoCardProps } from '~/interfaces/common';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';

export default function InfoCard({ title, description, image }: InfoCardProps) {
	return (
		<Card className="w-full overflow-hidden border-[#e5e7eb] bg-[#f9fafb]">
			<CardHeader className="p-0">
				<img
					className="w-full rounded-t"
					src="https://placehold.co/940x788"
					alt="Two rugby players celebrating a successful play on the field."
				/>
			</CardHeader>
			<CardContent className="p-0">
				<div className="bg-green-500 px-6 py-1 text-2xl font-bold text-white">{title}</div>
			</CardContent>
			<CardFooter>
				<p className="pt-6 text-base">{description}</p>
			</CardFooter>
		</Card>
	);
}
