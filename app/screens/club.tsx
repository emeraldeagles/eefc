import type { ReactElement, FC } from 'react';
import ProtectOurGame from '~/components/ProtectOurGame';
import Tiles from '~/components/Tiles';
import { CARD_CATEGORY } from '~/constants/constants';
import type { ClubInfo, ProtectOurGameProps, Resources } from '~/interfaces/content';

export interface ClubScreenProps {
	resources: Resources[];
	clubInfo: ClubInfo[];
	protectOurGame: ProtectOurGameProps[];
}

const ClubScreen: FC<ClubScreenProps> = ({ resources, clubInfo, protectOurGame }: ClubScreenProps): ReactElement => {
	return (
		<div>
			<Tiles category={CARD_CATEGORY.CLUB_INFO} content={clubInfo} />
			<ProtectOurGame protectOurGame={protectOurGame} />
			<Tiles category={CARD_CATEGORY.RESOURCES} content={resources} />
			{/* <Contact /> */}
		</div>
	);
};

export default ClubScreen;
