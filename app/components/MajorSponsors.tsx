import React from 'react';
import type { Sponsors } from '~/interfaces/content';

type MajorSponsorsProps = {
	sponsors: Sponsors[];
};

const MajorSponsors: React.FC<MajorSponsorsProps> = ({ sponsors }) => {
	console.log('sponsors => ', sponsors);
	return (
		<section className="bg-white py-12">
			<h2 className="mb-8 text-center text-2xl font-semibold">MAJOR SPONSORS</h2>
			<div className="mb-8 flex items-center justify-center space-x-12">
				{/* {sponsors.filter((i) => i.type === "major").map} */}
				<img src="/images/eefclogo.png" alt="First Partner Logo" className="h-80" />
				<img src="/images/eefclogo.png" alt="Second Partner Logo" className="h-80" />
			</div>
			<div className="text-center">
				<button className="rounded-md bg-gray-200 px-4 py-2 text-base font-semibold hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
					View All Partners
				</button>
			</div>
		</section>
	);
};

export default MajorSponsors;
