import { Link, useLocation } from '@remix-run/react';
import Navbar from './Navbar';
import { Button } from './ui/button';
import Breadcrumbs from './Breadcrumbs';
import { getHeaderImage } from '~/utils/UIhelpers';

const Header = () => {
	const location = useLocation();
	const mainRoutes = ['/', '/events', '/club', '/play'];
	const isBreadcrumbVisible = !mainRoutes.includes(location.pathname);

	return (
		<>
			<Navbar />
			<section className="relative mt-8 h-[50vh] w-full overflow-hidden rounded-lg">
				{getHeaderImage(location)}
				<div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent" />
				<div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white md:px-6">
					<h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Emerald Eagles FC</h1>
					<p className="mt-4 max-w-xl text-lg md:text-xl">Emerald, Central Queensland</p>
					<Button className="mt-8" asChild variant="default">
						<Link to="/play">Join the Club</Link>
					</Button>
				</div>
			</section>
			{isBreadcrumbVisible && <Breadcrumbs />}
		</>
	);
};

export default Header;
