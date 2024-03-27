import type { TileProps } from '~/interfaces/common';
import { Icon } from './Icon';
import { ChevronIcon } from './IconPaths/Chevron';
import { getCardByCategory, getGridColClasses } from '~/lib/utils';

export default function Tiles({ category, content }: TileProps) {
	console.log('Tiles', category, content);

	return (
		<div className="my-12">
			<h2 className="flex items-center pt-8 text-2xl font-bold">
				{category}
				<span>
					<Icon iconPath={<ChevronIcon />} />
				</span>
			</h2>
			<div className={`my-4 grid ${getGridColClasses(category)} gap-6`}>
				{content.map((content, index) => (
					<div key={index}>{getCardByCategory({ content, category })}</div>
				))}
			</div>
		</div>
	);
}
