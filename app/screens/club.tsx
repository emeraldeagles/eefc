import type { ReactElement, FC } from 'react';
import Tiles from '~/components/Tiles';
import { CARD_CATEGORY } from '~/constants/constants';
import type { ClubInfo, Committee, LifeMembers, Resources, Sponsors, History } from '~/interfaces/content';

export interface ClubScreenProps {
	resources: Resources[];
	clubInfo: ClubInfo[];
	history?: History[];
	committee?: Committee[];
	lifeMembers?: LifeMembers[];
	sponsors?: Sponsors[];
}

const ClubScreen: FC<ClubScreenProps> = ({
	resources,
	clubInfo,
	history,
	committee,
	lifeMembers,
	sponsors,
}: ClubScreenProps): ReactElement => {
	return (
		<div>
			<Tiles category={CARD_CATEGORY.CLUB_INFO} content={clubInfo} />
			<Tiles category={CARD_CATEGORY.RESOURCES} content={resources} />
		</div>
	);
};

export default ClubScreen;
