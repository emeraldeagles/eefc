import type { ReactElement, FC } from 'react';
import Section from '~/components/Section';
import { SECTION_CATEGORY } from '~/constants/constants';
import type { CoachInfo, PlayerInfo, Rego, SeasonInfo } from '~/interfaces/content';

export interface PlayScreenProps {
	rego: Rego[];
	seasonInfo: SeasonInfo[];
	playerInfo: PlayerInfo[];
	coachInfo: CoachInfo[];
}

const ClubScreen: FC<PlayScreenProps> = ({
	rego,
	seasonInfo,
	playerInfo,
	coachInfo,
}: PlayScreenProps): ReactElement => {
	return (
		<div className="flex flex-col gap-4">
			<Section category={SECTION_CATEGORY.REGO} />
			<Section category={SECTION_CATEGORY.SEASON_INFO} left />
			<Section category={SECTION_CATEGORY.PLAYER_INFO} />
			<Section category={SECTION_CATEGORY.COACH_INFO} left />
		</div>
	);
};

export default ClubScreen;
