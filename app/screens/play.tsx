import { Link } from '@remix-run/react';
import type { ReactElement, FC } from 'react';
import Section from '~/components/Section';
import SectionTitle from '~/components/SectionTitle';
import Tiles from '~/components/Tiles';
import { Card, CardContent } from '~/components/ui/card';
import { CARD_CATEGORY, SECTION_CATEGORY } from '~/constants/constants';
import type { RegoPrices, SectionCardInfo } from '~/interfaces/content';

export interface PlayScreenProps {
	regoInfo: SectionCardInfo;
	regoPrices: RegoPrices[];
	miniroosInfo: SectionCardInfo;
	juniorsInfo: SectionCardInfo;
	seniorsInfo: SectionCardInfo;
	fairPlayInfo: SectionCardInfo;
}

const ClubScreen: FC<PlayScreenProps> = ({
	regoInfo,
	regoPrices,
	miniroosInfo,
	juniorsInfo,
	seniorsInfo,
	fairPlayInfo,
}: PlayScreenProps): ReactElement => {
	return (
		<div className="flex flex-col gap-4">
			<Tiles category={CARD_CATEGORY.REGO} content={regoPrices} />
			<Section category={SECTION_CATEGORY.REGO_INFO} content={regoInfo} />
			<Section category={SECTION_CATEGORY.FAIRPLAY_INFO} content={fairPlayInfo} leftToRight />
			<Section category={SECTION_CATEGORY.MINIROOS_INFO} content={miniroosInfo} />
			<Section category={SECTION_CATEGORY.JUNIORS_INFO} content={juniorsInfo} leftToRight />
			<Section category={SECTION_CATEGORY.SENIORS_INFO} content={seniorsInfo} />
			<SectionTitle category="Field Map" />
			<Card className="p-0 shadow-lg">
				<CardContent className="m-0 w-full p-0">
					<Link
						to="https://eefc.syd1.cdn.digitaloceanspaces.com/Website/Info-Sections/EEFC_Field_Locations.png"
						target="_blank"
						rel="noopener noreferrer">
						<img
							src="https://eefc.syd1.cdn.digitaloceanspaces.com/Website/Info-Sections/EEFC_Field_Locations.png"
							alt="EEFC Field Locations"
							className="h-full w-full rounded-lg object-cover"
							loading="lazy"
						/>
					</Link>
				</CardContent>
			</Card>
		</div>
	);
};

export default ClubScreen;
