import React from 'react';
import { Card, CardContent } from './ui/card';
import SectionTitle from './SectionTitle';

export default function Ladder() {
	return (
		<>
			<SectionTitle category={'Ladder'} />
			<Card className="mx-auto w-full">
				<CardContent className="p-0">
					<iframe
						src="https://registration.squadi.com/liveScorePublicLadder?organisationKey=ccd8d990-5714-489b-b3af-9e8ffcf3c1bf&competitionUniqueKey=7f3ce9b1-d44a-41c3-9615-9d8e889dbe74&yearId=6"
						title="Seniors Ladder"
						className="h-[80vh] w-full rounded-lg sm:h-screen"
						allowFullScreen
						allow="autoplay; fullscreen"
						style={{ minHeight: '80vh' }}
						loading="lazy"
						tabIndex={-1}
					/>
				</CardContent>
			</Card>
		</>
	);
}
