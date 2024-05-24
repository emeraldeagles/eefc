import { Link } from '@remix-run/react';
import React from 'react';
import type { ClubSitesProps } from '~/interfaces/content';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

type Props = {
	clubSites: ClubSitesProps[];
};

const ClubSites = ({ clubSites }: Props) => {
	return (
		<section className="my-8 rounded-lg bg-[#50545c] px-6 py-12 text-white">
			<div className="container mx-auto px-4">
				<h2 className="mb-8 text-center text-2xl font-semibold">CQ CLUBS</h2>
				<div className="grid grid-cols-6 gap-12">
					{clubSites.map((site, index) => (
						<Link key={index} to={site.link} target="_blank" rel="noopener noreferrer">
							<div className="flex flex-col items-center">
								<Avatar>
									<AvatarImage src={site.image} />
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
								<span className="mt-2 text-xs">{site.title}</span>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
};

export default ClubSites;
