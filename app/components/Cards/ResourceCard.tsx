import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import type { ResourceCardProps } from '~/interfaces/common';

export default function ResourceCard({ title, description, image, link }: ResourceCardProps) {
	return (
		<div className="mx-auto max-w-md overflow-hidden rounded-lg bg-[#bd1e59] p-6 text-white">
			<div className="mb-4 flex items-center justify-between">
				<Badge variant="secondary">Open Air Boxes</Badge>
				<Badge>Selling Fast</Badge>
			</div>
			<h2 className="mb-4 text-3xl font-bold">OPEN AIR BOXES</h2>
			<div className="mb-6 rounded-lg bg-black bg-opacity-20 p-4">
				<p className="mb-2 text-sm uppercase tracking-widest">Boxes From</p>
				<p className="text-5xl font-bold">$1400</p>
				<p className="text-sm uppercase tracking-widest">Per Game</p>
			</div>
			<div className="mb-6">
				<h3 className="mb-2 text-xl font-semibold">Included</h3>
				<ul className="list-disc space-y-2 pl-5">
					<li>Premier views of the field with shared steward service</li>
					<li>Customised catering options available</li>
					<li>Suited for 8 & 10 people</li>
				</ul>
			</div>
			<Button className="w-full">Find Out More</Button>
		</div>
	);
}
