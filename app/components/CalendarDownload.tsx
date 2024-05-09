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
				rel="no-referrer">
				<Card className="border border-[#e5e7eb] hover:border hover:bg-gray-100">
					<CardHeader>
						<CardTitle className="flex items-center justify-center align-middle">
							<h2 className="flex items-center text-xl tracking-wide">
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
