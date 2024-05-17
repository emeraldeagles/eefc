import React from 'react';
import { Card, CardContent } from './ui/card';
import SectionTitle from './SectionTitle';

export default function Draw() {
	return (
		<>
			<SectionTitle category={'Draw'} />
			<Card className="mx-auto w-full">
				<CardContent className="p-0">
					<iframe
						src="https://registration.squadi.com/livescoreSeasonFixture?organisationKey=ccd8d990-5714-489b-b3af-9e8ffcf3c1bf&competitionUniqueKey=7f3ce9b1-d44a-41c3-9615-9d8e889dbe74&yearId=6"
						title="Seniors Draw"
						className="h-[50vh] w-full rounded-lg"
						allowFullScreen
					/>
				</CardContent>
			</Card>
		</>
	);
}
