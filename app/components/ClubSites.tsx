import React from 'react';
import type { ClubSitesProps } from '~/interfaces/content';

const ClubSites: React.FC<ClubSitesProps> = ({ clubSites }) => {
	return (
		<section className="bg-[#111827] py-8 text-white">
			<div className="container mx-auto px-4">
				<h2 className="mb-6 text-xl font-semibold">Club Sites</h2>
				<div className="grid grid-cols-6 gap-4">
					<div className="flex flex-col items-center">
						<img
							alt="Atlanta"
							height="50"
							src="/images/eefclogo.png"
							style={{
								aspectRatio: '50/50',
								objectFit: 'cover',
							}}
							width="50"
						/>
						<span className="mt-2 text-sm">Atlanta</span>
					</div>
					<div className="flex flex-col items-center">
						<img
							alt="Austin"
							height="50"
							src="/images/eefclogo.png"
							style={{
								aspectRatio: '50/50',
								objectFit: 'cover',
							}}
							width="50"
						/>
						<span className="mt-2 text-sm">Austin</span>
					</div>
					<div className="flex flex-col items-center">
						<img
							alt="Charlotte"
							height="50"
							src="/images/eefclogo.png"
							style={{
								aspectRatio: '50/50',
								objectFit: 'cover',
							}}
							width="50"
						/>
						<span className="mt-2 text-sm">Charlotte</span>
					</div>
					<div className="flex flex-col items-center">
						<img
							alt="Chicago"
							height="50"
							src="/images/eefclogo.png"
							style={{
								aspectRatio: '50/50',
								objectFit: 'cover',
							}}
							width="50"
						/>
						<span className="mt-2 text-sm">Chicago</span>
					</div>
					<div className="flex flex-col items-center">
						<img
							alt="Cincinnati"
							height="50"
							src="/images/eefclogo.png"
							style={{
								aspectRatio: '50/50',
								objectFit: 'cover',
							}}
							width="50"
						/>
						<span className="mt-2 text-sm">Cincinnati</span>
					</div>
					<div className="flex flex-col items-center">
						<img
							alt="Colorado"
							height="50"
							src="/images/eefclogo.png"
							style={{
								aspectRatio: '50/50',
								objectFit: 'cover',
							}}
							width="50"
						/>
						<span className="mt-2 text-sm">Colorado</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ClubSites;
