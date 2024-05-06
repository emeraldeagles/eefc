import React from 'react';
import { Icon } from './Icon';
import { ChevronIcon } from './IconPaths/Chevron';

export default function SectionTitle({ category }: { category: string }) {
	return (
		<h2 className="flex items-center gap-2 py-4 text-3xl font-bold tracking-wide">
			{category}
			<span>
				<Icon iconPath={<ChevronIcon />} />
			</span>
		</h2>
	);
}
