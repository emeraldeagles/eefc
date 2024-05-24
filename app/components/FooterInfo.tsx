import { FaFacebookF, FaInstagram, FaCcVisa, FaCcMastercard } from 'react-icons/fa';
import { navigationLinks } from './Navbar';
import { Link } from '@remix-run/react';

export default function FooterInfo() {
	return (
		<footer className="mt-8 rounded-t-lg bg-white bg-footer-bg bg-cover bg-center bg-no-repeat">
			<div className="mx-auto grid max-w-7xl gap-4 px-4 py-8 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
					<div className="lg:w-0 lg:flex-1">
						<Link to="/" className="flex">
							<img
								className="h-12 w-auto sm:h-16"
								src="/images/EEFCLogoWeb.png"
								alt="Emerald Eagles FC Logo"
								loading="lazy"
							/>
						</Link>
					</div>
					<div className="flex items-center md:ml-12">
						<nav className="space-x-10 md:flex">
							{navigationLinks.map(item => (
								<Link
									key={item.name}
									to={item.link}
									className="text-base font-medium text-gray-500 hover:text-gray-900">
									{item.name}
								</Link>
							))}
						</nav>
					</div>
				</div>
				<div className="border-t border-gray-300" />
				<div className="relative flex items-center justify-between py-6">
					<div className="flex space-x-6">
						<Link
							to="https://www.facebook.com/emeraldeagles"
							className=" hover:text-accent hover:underline"
							target="_blank"
							rel="noopener noreferrer">
							<FaFacebookF />
						</Link>
						<Link
							to="https://www.instagram.com/explore/locations/161771333974512/emerald-eagles-football-club/"
							className=" hover:text-accent hover:underline"
							target="_blank"
							rel="noopener noreferrer">
							<FaInstagram />
						</Link>
						<Link
							to="https://emeraldeaglesfc.square.site/"
							className=" hover:text-accent hover:underline"
							target="_blank"
							rel="noopener noreferrer">
							<FaCcVisa />
						</Link>
						<Link
							to="https://emeraldeaglesfc.square.site/"
							className=" hover:text-accent hover:underline"
							target="_blank"
							rel="noopener noreferrer">
							<FaCcMastercard />
						</Link>
						{/* Social media icons */}
					</div>
					<div className="absolute left-1/2 -translate-x-1/2 transform">
						<Link
							to="https://jasonsandeman.netlify.app/"
							className=" hover:text-accent"
							target="_blank"
							rel="noopener noreferrer">
							Created by JW Sandeman
						</Link>
					</div>
					<div className="flex space-x-6">
						<p className="text-sm text-gray-400">&copy; 2024 Emerald Eagles FC. All rights reserved.</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
