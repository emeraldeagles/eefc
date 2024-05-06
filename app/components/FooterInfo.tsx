import { FaFacebookF, FaInstagram, FaPinterestP, FaCcVisa, FaCcMastercard, FaCcAmex } from 'react-icons/fa';
import { navigationLinks } from './Navbar';
import { Link } from '@remix-run/react';

export default function FooterInfo() {
	return (
		<footer className="bg-white">
			<div className="mx-auto grid max-w-7xl gap-4 px-4 py-8 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
					<div className="lg:w-0 lg:flex-1">
						<a href="#" className="flex">
							<img className="h-12 w-auto sm:h-16" src="/images/EEFCLogoWeb.png" alt="Emerald Eagles FC Logo" />
						</a>
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
				<div className="flex items-center justify-between py-6">
					<div className="flex space-x-6">
						{/* Social media icons */}
						<FaFacebookF className="text-gray-400 hover:text-gray-500" />
						<FaInstagram className="text-gray-400 hover:text-gray-500" />
						<FaPinterestP className="text-gray-400 hover:text-gray-500" />
					</div>
					<div className="flex space-x-6">
						{/* Payment icons */}
						<FaCcVisa className="text-gray-400 hover:text-gray-500" />
						<FaCcMastercard className="text-gray-400 hover:text-gray-500" />
						<FaCcAmex className="text-gray-400 hover:text-gray-500" />
					</div>
					<div>
						<p className="text-sm text-gray-400">&copy; 2024 Emerald Eagles FC. All rights reserved.</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
