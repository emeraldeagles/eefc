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
		<>
			{!isClubSponsorsRoute ? <PlatinumSponsors sponsors={sponsors} /> : null}
			<div className={isClubSponsorsRoute ? 'pt-16' : ''}>
				<ClubSites clubSites={clubSites} />
			</div>
			<FooterInfo />
		</>
	);
};

export default Footer;
