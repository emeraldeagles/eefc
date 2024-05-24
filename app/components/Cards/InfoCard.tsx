import type { InfoCardProps } from '~/interfaces/common';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';
import { CARD_CATEGORY } from '~/constants/constants';
import { Link } from '@remix-run/react';
import { getImageClasses } from '~/utils/UIhelpers';

const isSponsorCategory = (category: string) =>
	[
		CARD_CATEGORY.PLATINUM_SPONSORS,
		CARD_CATEGORY.GOLD_SPONSORS,
		CARD_CATEGORY.SILVER_SPONSORS,
		CARD_CATEGORY.BRONZE_SPONSORS,
		CARD_CATEGORY.DONATION_SPONSORS,
		CARD_CATEGORY.GRANT_SPONSORS,
	].includes(category);

export default function InfoCard({ title, description, image, team, ageGroup, category, link, email }: InfoCardProps) {
	const cardImageClasses = `${getImageClasses(category)} w-full rounded-t`;

	const defaultImage = 'https://eefc.syd1.cdn.digitaloceanspaces.com/Website/Info-Sections/Placeholder-Avatar.jpeg';

	const renderBadges = () => {
		const badges = [
			description && category === CARD_CATEGORY.COACHES ? (
				<Badge variant="outline" className="border-accent text-accent" key="description-badge">
					{description}
				</Badge>
			) : null,
			ageGroup ? (
				<Badge variant="outline" className="border-destructive text-destructive" key="ageGroup-badge">
					{ageGroup}
				</Badge>
			) : null,
			team ? (
				<Badge variant="outline" className="border-secondary text-secondary" key="team-badge">
					{team}
				</Badge>
			) : null,
		].filter(Boolean);

		if (badges.length > 0) {
			return <div className="flex gap-2">{badges}</div>;
		}

		return (
			<div className="flex flex-col gap-1">
				{description && <div>{description}</div>}
				{email && <div>{email}</div>}
			</div>
		);
	};

	const CardContentStructure = () => (
		<>
			<CardHeader className="p-0">
				<img
					className={cardImageClasses}
					src={image || defaultImage}
					alt={title}
					loading="lazy"
					style={{ margin: 0, padding: 0, border: 0 }}
				/>
			</CardHeader>
			<CardContent className="p-0">
				<div className="small-text bg-primary px-6 py-1 text-white">{title}</div>
			</CardContent>
			<CardFooter className="flex justify-start gap-2 pt-6">{renderBadges()}</CardFooter>
		</>
	);

	return link ? (
		<Link
			to={link}
			className="hover:shadow-lg"
			target={isSponsorCategory(category) ? '_blank' : undefined}
			rel={isSponsorCategory(category) ? 'noopener noreferrer' : undefined}>
			<Card className="w-full overflow-hidden border-gray-300 bg-gray-100 p-0">{CardContentStructure()}</Card>
		</Link>
	) : (
		<Card className="w-full overflow-hidden border-gray-300 bg-gray-100 p-0">{CardContentStructure()}</Card>
	);
}
