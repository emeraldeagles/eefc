import { Link } from '@remix-run/react';
import Navbar from './Navbar';
import { Button } from './ui/button';

const Header = () => {
	return (
		<>
			<Navbar />
			<section className="relative h-[80vh] w-full overflow-hidden">
				{/* <section className="relative w-full overflow-hidden"> */}
				<img
					alt="Emerald Eagles FC Players"
					className="h-full w-screen object-cover object-center"
					height={1080}
					src="https://eefc.syd1.cdn.digitaloceanspaces.com/EEFCHeader.png"
					style={{
						aspectRatio: '1920/1080',
						// height: '100vh', // This will ensure that the image takes the full viewport height
						// width: 'auto', // Auto width to maintain aspect ratio
						objectFit: 'cover', // This will cover the area and clip excess width
						// objectPosition: 'center', // This will center the image in the container
					}}
					width={1920}
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent" />
				<div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white md:px-6">
					<h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Emerald Eagles FC</h1>
					<p className="mt-4 max-w-xl text-lg md:text-xl">Emerald, Central Queensland</p>
					<Button className="mt-8" asChild variant="default">
						<Link to="/play">Join the Club</Link>
					</Button>
				</div>
			</section>
		</>
	);
};

export default Header;
