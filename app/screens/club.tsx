import type { ReactElement, FC } from 'react';
import Tiles from '~/components/Tiles';
import { CARD_CATEGORY } from '~/constants/constants';
import type { ClubInfo, Resources } from '~/interfaces/content';

export interface ClubScreenProps {
	resources: Resources[];
	clubInfo: ClubInfo[];
}

const ClubScreen: FC<ClubScreenProps> = ({ resources, clubInfo }: ClubScreenProps): ReactElement => {
	return (
		<div>
			<Tiles category={CARD_CATEGORY.CLUB_INFO} content={clubInfo} />
			<Tiles category={CARD_CATEGORY.RESOURCES} content={resources} />
			{/* <Contact /> */}
		</div>
	);
};

export default ClubScreen;
