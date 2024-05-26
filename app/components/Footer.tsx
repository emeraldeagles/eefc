import type { ClubSitesProps, Sponsors } from '~/interfaces/content';
import ClubSites from '../components/ClubSites';
import FooterInfo from './FooterInfo';
import { useLocation } from '@remix-run/react';
import PlatinumSponsors from './PlatinumSponsors';

export type FooterProps = {
	sponsors: Sponsors[];
	clubSites: ClubSitesProps[];
};

const Footer = ({ sponsors, clubSites }: FooterProps) => {
	const location = useLocation();
	const isClubSponsorsRoute = location.pathname === '/club/sponsors';
	console.log('isClubSponsorsRoute', isClubSponsorsRoute);

	return (
		<div className="mt-16">
			{!isClubSponsorsRoute ? <PlatinumSponsors sponsors={sponsors} /> : null}
			<ClubSites clubSites={clubSites} />
			<FooterInfo />
		</div>
	);
};

export default Footer;
