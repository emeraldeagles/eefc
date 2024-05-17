import React from 'react';
import { Icon } from './Icon';
import { Chevron } from './IconPaths/Chevron';

export default function SectionTitle({ category }: { category: string }) {
	return (
		<h2 className="heading-4 flex items-center gap-2 pb-4 pt-16">
			{category}
			<span>
				<Icon iconPath={<Chevron />} />
			</span>
		</h2>
	);
}
