import React from 'react';
import { Icon } from './Icon';
import { ArrowUpRight } from './IconPaths/ArrowUpRight';
import { Card, CardHeader, CardTitle } from './ui/card';
import { Link } from '@remix-run/react';

export default function CalendarDownload() {
	return (
		<div className="w-full pt-8">
			<Link
				to="https://calendar.google.com/calendar/u/1?cid=YWRtaW5AZW1lcmFsZGVhZ2xlcy5jb20uYXU"
				target="_blank"
				rel="noopener noreferrer">
				<Card className="">
					<CardHeader>
						<CardTitle className="mobile-text flex items-center justify-center align-middle hover:text-primary hover:underline">
							<h2 className="flex items-center">
								Download our 2024 season calender here
								<span>
									<Icon iconPath={<ArrowUpRight />} />
								</span>
							</h2>
						</CardTitle>
					</CardHeader>
				</Card>
			</Link>
		</div>
	);
}
