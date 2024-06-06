import React from 'react';
import { Card } from './ui/card';
import type { ProtectOurGameProps } from '~/interfaces/content';
import SectionTitle from './SectionTitle';
import { Link } from '@remix-run/react';

type Props = {
	protectOurGame: ProtectOurGameProps[];
};

export default function ProtectOurGame({ protectOurGame }: Props) {
	return (
		<>
			<SectionTitle category="Protect Our Game" />
			<div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 ">
				{protectOurGame.map((item, index) => (
					<Card key={index} className="w-full p-0">
						<Link to={item.link} target="_blank" rel="noopener noreferrer">
							<img
								src={item.image}
								alt={item.title}
								className="object-fit h-full w-full sm:rounded-lg"
								loading="lazy"
							/>
						</Link>
					</Card>
				))}
			</div>
		</>
	);
}
