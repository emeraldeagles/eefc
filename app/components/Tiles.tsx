import type { TileProps } from '~/interfaces/common';
import { getCardByCategory, getGridColClasses } from '~/utils/UIhelpers';
import SkeletonCard from './SkeletonCard';
import SectionTitle from './SectionTitle';

export default function Tiles({ category, content, isLoading }: TileProps) {
	console.log('Carnivals Tiles ==>', category, content, isLoading);

	return (
		<div>
			<SectionTitle category={category} />
			<div className={`my-4 grid ${getGridColClasses(category)} gap-6`}>
				{isLoading
					? Array.from({ length: 4 }).map((_, index) => <SkeletonCard key={index} />)
					: content.map((item, index) => <div key={index}>{getCardByCategory({ content: item, category })}</div>)}
			</div>
		</div>
	);
}
