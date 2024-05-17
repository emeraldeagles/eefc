import type { ReactElement, FC } from 'react';
import Section from '~/components/Section';
import Tiles from '~/components/Tiles';
import { CARD_CATEGORY, SECTION_CATEGORY } from '~/constants/constants';
import type { RegoPrices, SectionCardInfo } from '~/interfaces/content';

export interface PlayScreenProps {
	regoInfo: SectionCardInfo;
	regoPrices: RegoPrices[];
	seasonInfo: SectionCardInfo;
	playerInfo: SectionCardInfo;
	coachInfo: SectionCardInfo;
	fairPlayInfo: SectionCardInfo;
}

const ClubScreen: FC<PlayScreenProps> = ({
	regoInfo,
	regoPrices,
	seasonInfo,
	playerInfo,
	fairPlayInfo,
	coachInfo,
}: PlayScreenProps): ReactElement => {
	return (
		<div className="flex flex-col gap-4">
			<Tiles category={CARD_CATEGORY.REGO} content={regoPrices} />
			<Section category={SECTION_CATEGORY.REGO_INFO} content={regoInfo} />
			<Section category={SECTION_CATEGORY.FAIRPLAY_INFO} content={fairPlayInfo} leftToRight />
			<Section category={SECTION_CATEGORY.SEASON_INFO} content={seasonInfo} />
			<Section category={SECTION_CATEGORY.PLAYER_INFO} content={playerInfo} leftToRight />
			{/* this will be in club section now */}
			{/* <Section category={SECTION_CATEGORY.COACH_INFO content={coachInfo}  /> */}
		</div>
	);
};

export default ClubScreen;
