import { FaFacebookF, FaInstagram, FaCcVisa, FaCcMastercard } from 'react-icons/fa';
import { navigationLinks } from './Navbar';
import { Link } from '@remix-run/react';

export default function FooterInfo() {
	return (
		<footer className="m-0 bg-white bg-footer-bg bg-cover bg-center bg-no-repeat sm:mt-8 sm:rounded-t-lg">
			<div className="grid max-w-7xl flex-col gap-4 px-4 py-8 md:mx-auto md:flex-row md:px-6 lg:px-8">
				<div className="flex flex-col items-center justify-between gap-8 py-6 md:flex-row  md:space-x-10">
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
					<div className="flex items-center">
						<nav className="space-x-4 sm:space-x-10 md:flex">
							{navigationLinks.map(item => (
								<Link
									key={item.name}
									to={item.link}
									className="text-base font-medium hover:text-primary hover:underline">
									{item.name}
								</Link>
							))}
						</nav>
					</div>
				</div>
				<div className="border-t border-gray-300" />
				<div className="flex flex-col items-center justify-between gap-6 py-6 md:relative md:flex-row">
					<div className="flex space-x-6">
						<Link
							to="https://www.facebook.com/emeraldeagles"
							className=" hover:text-primary hover:underline"
							target="_blank"
							rel="noopener noreferrer">
							<FaFacebookF />
						</Link>
						<Link
							to="https://www.instagram.com/explore/locations/161771333974512/emerald-eagles-football-club/"
							className=" hover:text-primary hover:underline"
							target="_blank"
							rel="noopener noreferrer">
							<FaInstagram />
						</Link>
						<Link
							to="https://emeraldeaglesfc.square.site/"
							className=" hover:text-primary hover:underline"
							target="_blank"
							rel="noopener noreferrer">
							<FaCcVisa />
						</Link>
						<Link
							to="https://emeraldeaglesfc.square.site/"
							className=" hover:text-primary hover:underline"
							target="_blank"
							rel="noopener noreferrer">
							<FaCcMastercard />
						</Link>
						{/* Social media icons */}
					</div>
					<div className="xl:absolute xl:left-1/2 xl:-translate-x-1/2 xl:transform">
						<Link
							to="https://jasonsandeman.netlify.app/"
							className="hover:text-primary hover:underline"
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
