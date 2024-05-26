import type { TileProps } from '~/interfaces/common';
import { getCardByCategory, getGridColClasses } from '~/utils/UIhelpers';
import SkeletonCard from './SkeletonCard';
import SectionTitle from './SectionTitle';
import { CARD_CATEGORY } from '~/constants/constants';

export default function Tiles({ category, content, isLoading }: TileProps) {
	const isSpecificCategory =
		category === CARD_CATEGORY.NEWS || category === CARD_CATEGORY.EVENTS || category === CARD_CATEGORY.CARNIVALS;

	const updatedContent = isSpecificCategory ? content.slice(0, 8) : content;

	return (
		<div>
			<SectionTitle category={category} />
			<div className={`my-4 grid ${getGridColClasses(category)} gap-6`}>
				{isLoading
					? Array.from({ length: 4 }).map((_, index) => <SkeletonCard key={index} />)
					: updatedContent.map((item, index) => (
							<div key={index}>{getCardByCategory({ content: item, category })}</div>
						))}
			</div>
		</div>
	);
}
