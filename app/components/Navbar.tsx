import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from '@remix-run/react';
import { Button } from './ui/button';

export const navigationLinks = [
	{
		name: 'Home',
		link: '/',
	},
	{
		name: 'Shop',
		link: 'https://emeraldeagles-shop.square.site/',
	},
	{
		name: 'Club',
		link: '/club',
	},
	{
		name: 'Play',
		link: '/play',
	},
	{
		name: 'Events',
		link: '/events',
	},
];

export default function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="sticky inset-x-0 top-0 z-50 bg-white sm:rounded-b-lg">
			<nav className="mx-auto flex max-w-7xl items-center justify-between px-2 py-6 sm:p-6 lg:px-8" aria-label="Global">
				<div className="flex lg:flex-1">
					<Link to="/" className="-my-4 p-1.5">
						<span className="sr-only">Emerald Eagles Football Club</span>
						<img className="h-8 w-auto sm:h-16" src="/images/EEFCLogoWeb.png" alt="" loading="lazy" />
					</Link>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
						onClick={() => setMobileMenuOpen(true)}>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon className="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
				<div className="hidden lg:flex lg:gap-x-12">
					{navigationLinks.map(item => (
						<Link
							key={item.name}
							to={item.link}
							className="text-base font-medium text-gray-500 underline-offset-4 hover:text-primary hover:underline">
							{item.name}
						</Link>
					))}
				</div>
				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					<Button asChild variant="outline" className="hover:text-primary">
						<Link to="/play">Join the Club</Link>
					</Button>
				</div>
			</nav>
			<Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
				<div className="fixed inset-0 z-50" />
				<Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between">
						<Link to="/" className="-m-1.5 p-1.5">
							<span className="sr-only">Your Company</span>
							<img className="h-8 w-auto" src="/images/EEFCLogoWeb.png" alt="EEFC Logo" loading="lazy" />
						</Link>
						<button
							type="button"
							className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:text-primary hover:underline"
							onClick={() => setMobileMenuOpen(false)}>
							<span className="sr-only">Close menu</span>
							<XMarkIcon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
								{navigationLinks.map(item => (
									<Link
										key={item.name}
										to={item.link}
										onClick={() => setMobileMenuOpen(false)}
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-primary/10">
										{item.name}
									</Link>
								))}
							</div>
							<div className="py-6">
								<Link
									to="/play"
									className="text- -mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-primary/10">
									Join the club
								</Link>
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	);
}
