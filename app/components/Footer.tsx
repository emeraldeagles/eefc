import type { ClubSitesProps, Sponsors } from '~/interfaces/content';
import ClubSites from '../components/ClubSites';
import FooterInfo from './FooterInfo';
import MajorSponsors from '../components/MajorSponsors';

export type FooterProps = {
	sponsors: Sponsors[];
	clubSites: ClubSitesProps[];
};

const Footer = ({ sponsors, clubSites }: FooterProps) => {
	return (
		<>
			<MajorSponsors sponsors={sponsors} />
			<ClubSites clubSites={clubSites} />
			<FooterInfo />
		</>
	);
};

export default Footer;
