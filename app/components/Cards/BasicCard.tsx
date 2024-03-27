import { Card, CardContent, CardHeader } from '../ui/card';
import type { BasicCardProps } from '~/interfaces/common';

export default function BasicCard({ title, description, image, link, date, event }: BasicCardProps) {
	return (
		<Card className="w-full overflow-hidden border-[#e5e7eb] bg-[#f9fafb]">
			<CardHeader className="p-0">
				<img
					className="w-full rounded-t"
					src="https://placehold.co/940x788"
					alt="Two rugby players celebrating a successful play on the field."
				/>
			</CardHeader>
			<CardContent>
				<div className="overflow-hidden pt-6 text-xl">{description}</div>
			</CardContent>
			{/* <CardFooter>
				<p className="text-base">{description}</p>
			</CardFooter> */}
		</Card>
	);
}
