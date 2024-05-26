import React from 'react';
import type { Sponsors } from '~/interfaces/content';
import { Button } from './ui/button';
import { Link } from '@remix-run/react';

type PlatinumSponsors = {
	sponsors: Sponsors[];
};

const PlatinumSponsors: React.FC<PlatinumSponsors> = ({ sponsors }) => {
	console.log('sponsors => ', sponsors);
	return (
		<section className="m-0 bg-white py-12 sm:mb-8 sm:rounded-lg">
			<h2 className="mb-8 text-center text-2xl font-semibold">PLATINUM SPONSORS</h2>
			<div className="mb-8 flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-20">
				{sponsors
					.filter(i => i.type === 'platinum')
					.map((sponsor, index) => (
						<img
							key={index}
							src={sponsor.image}
							alt={sponsor.title}
							loading="lazy"
							className="h-40 w-80 rounded-full border object-contain shadow-md"></img>
					))}
			</div>
			<div className="text-center">
				<Link to="/club/sponsors">
					<Button variant="outline">View All Sponsors</Button>
				</Link>
			</div>
		</section>
	);
};

export default PlatinumSponsors;
