import { Link } from '@remix-run/react';
import React from 'react';
import { Button } from '~/components/ui/button';

export const meta = () => [
	{
		title: 'EEFC | Links',
	},
	{
		charset: 'utf-8',
	},
	{
		viewport: 'width=device-width,initial-scale=1',
	},
];

const LinksRoute = () => {
	return (
		<main className="mb-16 mt-8 flex flex-col items-center justify-center">
			<div className="w-full max-w-2xl rounded-lg bg-white p-6 text-center shadow-lg">
				{/* <div className="w-full max-w-2xl rounded-lg p-6 text-center"> */}
				<h1 className="heading-3 mb-4">Stay In The Loop!</h1>
				<div className="body-text mx-auto flex max-w-2xl flex-col gap-1">
					<p className="body-text">
						Don't miss out on our exciting events; keep an eye on our official communication channels. EEFC utilises the
						following channels to reach as many people as possible
					</p>
					<h2 className="heading-4">Socials</h2>
					<p className="body-text">
						News, events, and carnival information (including carnival player nominations) will be posted on our
						Facebook page and groups, so make sure you are <strong>actively</strong> following these.
					</p>
					<Link to="https://www.facebook.com/emeraldeagles">
						<Button className="body-text w-full">Main Club Page</Button>
					</Link>
					<Link to="https://www.facebook.com/groups/1091718031899695/">
						<Button className="body-text w-full">Miniroos Parents Group</Button>
					</Link>
					<Link to="https://www.facebook.com/groups/378025208449628/">
						<Button className="body-text w-full">6/7 Parents Group</Button>
					</Link>
					<Link to="https://www.facebook.com/groups/3794865160742347/">
						<Button className="body-text w-full">8/9 Parents Group</Button>
					</Link>
					<Link to="https://www.facebook.com/groups/1601622657334132/">
						<Button className="body-text w-full">10/11 Parents Group</Button>
					</Link>
					<Link to="https://www.facebook.com/groups/931924682005568/">
						<Button className="body-text w-full">Youth Parents Group</Button>
					</Link>
					<h2 className="heading-4">Emails & Push Notifications</h2>
					<p className="body-text mb-4">
						We also use Squadi for sending important communications via emails and mobile notifications. The Squadi app
						also has a news banner at the top of the home page which we use as well. You can also email us directly at
						admin@emeraldeagles.com.au
					</p>
					<a href="mailto:admin@emeraldeagles.com.au">
						<Button className="body-text w-full">Email The Club</Button>
					</a>

					<h2 className="heading-4">Website</h2>
					<p className="body-text mb-4">
						Lastly, this site is regularly updated with helpful club information, the latest news, and upcoming
						carnivals and events, so make sure to bookmark it.
					</p>
					<Link to="https://emeraldeagles.com.au/">
						<Button variant="outline" className="body-text w-full">
							Explore Website
						</Button>
					</Link>
				</div>
			</div>
		</main>
	);
};

export default LinksRoute;
