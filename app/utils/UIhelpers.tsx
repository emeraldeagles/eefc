import type {
	Carnivals,
	ClubInfo,
	Coaches,
	Committee,
	Content,
	Events,
	MerchProps,
	News,
	RegoPrices,
	Resources,
	Sponsors,
} from '~/interfaces/content';
import React from 'react';
import { CARD_CATEGORY, SECTION_CATEGORY } from '~/constants/constants';
import InfoCard from '../components/Cards/InfoCard';
import BasicCard from '../components/Cards/BasicCard';
import MerchCard from '../components/Cards/MerchCard';
import PricingCard from '../components/Cards/PricingCard';
import ResourceCard from '../components/Cards/ResourceCard';
import type { CardProps } from '~/interfaces/common';

export const isNews = (content: Content): content is News => {
	return 'link' in content;
};

export const isClubInfo = (content: Content): content is ClubInfo => {
	return 'title' in content;
};

export const isMerch = (content: Content): content is MerchProps => {
	return 'badge' in content;
};

export const isEvents = (content: Content): content is Events => {
	return 'description' in content;
};

export const isRegoPrices = (content: Content): content is RegoPrices => {
	return 'open' in content;
};

export const isCarnivals = (content: Content): content is Carnivals => {
	return 'description' in content;
};

export const isResources = (content: Content): content is Resources => {
	return 'link' in content;
};

export const isCoaches = (content: Content): content is Coaches => {
	return 'team' in content;
};

export const isCommittee = (content: Content): content is Committee => {
	return 'email' in content;
};

export const isSponsors = (content: Content): content is Sponsors => {
	return 'type' in content;
};

export const getCardByCategory = ({ content, category }: CardProps) => {
	if (category === CARD_CATEGORY.NEWS && isNews(content)) {
		const { id, description, images, link } = content;
		return <BasicCard id={id} description={description} images={images} link={link} category={category} />;
	}
	if (category === CARD_CATEGORY.CLUB_INFO && isClubInfo(content)) {
		const { title, description, image, link } = content;
		return <InfoCard title={title} description={description} image={image} link={link} category={category} />;
	}
	if (category === CARD_CATEGORY.MERCH && isMerch(content)) {
		const { title, description, price, badge, badgeColour, link, image } = content;
		return (
			<MerchCard
				title={title}
				description={description}
				price={price}
				badge={badge}
				badgeColour={badgeColour}
				link={link}
				image={image}
			/>
		);
	}
	if (category === CARD_CATEGORY.EVENTS && isEvents(content)) {
		const { id, date, description, images } = content;
		return <BasicCard id={id} category={category} date={date} description={description} images={images} />;
	}
	if (category === CARD_CATEGORY.REGO && isRegoPrices(content)) {
		const { title, description, image, price, open, info, link } = content;
		return (
			<PricingCard
				title={title}
				description={description}
				image={image}
				price={price}
				open={open}
				info={info}
				link={link}
			/>
		);
	}
	if (category === CARD_CATEGORY.CARNIVALS && isCarnivals(content)) {
		const { id, date, description, images } = content;
		return <BasicCard id={id} category={category} date={date} description={description} images={images} />;
	}
	if (category === CARD_CATEGORY.RESOURCES && isResources(content)) {
		const { title, description, image, link, category } = content;
		return <ResourceCard title={title} description={description} image={image} link={link} category={category} />;
	}
	if (category === CARD_CATEGORY.COACHES && isCoaches(content)) {
		const { title, description, image, team, ageGroup } = content;
		return (
			<InfoCard
				title={title}
				description={description}
				image={image}
				team={team}
				ageGroup={ageGroup}
				category={category}
			/>
		);
	}
	if (category === CARD_CATEGORY.COMMITTEE && isCommittee(content)) {
		const { title, description, image, email } = content;
		return <InfoCard title={title} description={description} image={image} email={email} category={category} />;
	}
	if (
		(category === CARD_CATEGORY.PLATINUM_SPONSORS ||
			category === CARD_CATEGORY.GOLD_SPONSORS ||
			category === CARD_CATEGORY.SILVER_SPONSORS ||
			category === CARD_CATEGORY.BRONZE_SPONSORS ||
			category === CARD_CATEGORY.DONATION_SPONSORS ||
			category === CARD_CATEGORY.GRANT_SPONSORS) &&
		isSponsors(content)
	) {
		const { title, description, image, link, type } = content;
		return (
			<InfoCard title={title} description={description} image={image} link={link} type={type} category={category} />
		);
	}
};

// return different tailwind classes based on category
export const getGridColClasses = (category: string) => {
	switch (category) {
		case CARD_CATEGORY.NEWS:
		case CARD_CATEGORY.EVENTS:
		case CARD_CATEGORY.CARNIVALS:
			return 'grid-cols-1 md:grid-cols-4';
		case CARD_CATEGORY.SILVER_SPONSORS:
		case CARD_CATEGORY.BRONZE_SPONSORS:
		case CARD_CATEGORY.DONATION_SPONSORS:
		case CARD_CATEGORY.GRANT_SPONSORS:
			return 'grid-cols-1 md:grid-cols-4';
		case CARD_CATEGORY.CLUB_INFO:
		case CARD_CATEGORY.MERCH:
		case CARD_CATEGORY.REGO:
		case CARD_CATEGORY.GOLD_SPONSORS:
			return 'grid-cols-1 md:grid-cols-3';
		case CARD_CATEGORY.RESOURCES:
		case CARD_CATEGORY.COACHES:
		case CARD_CATEGORY.COMMITTEE:
			return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
		case CARD_CATEGORY.PLATINUM_SPONSORS:
			return 'grid-cols-1 md:grid-cols-2';
	}
};

export const getCallToAction = (category: string) => {
	switch (category) {
		case SECTION_CATEGORY.REGO_INFO:
			return ['Register through Squadi', 'Register through Gameday (Miniroos)'];
		case SECTION_CATEGORY.FAIRPLAY_INFO:
			return 'Find out if your eligible';
		case SECTION_CATEGORY.COACH_INFO:
			return 'Register as a coach';
		case SECTION_CATEGORY.VOLUNTEER_INFO:
			return 'Register as a volunteer';
		case SECTION_CATEGORY.COMMITTEE_INFO:
			return 'Enquire about joining the committee';
		case SECTION_CATEGORY.SPONSORS_INFO:
			return 'Become a sponsor';
		case SECTION_CATEGORY.BLUE_CARD_INFO:
			return ['Apply for a new card', 'Link an existing card'];
		case SECTION_CATEGORY.MINIROOS_INFO:
			return 'Register through Gameday';
		case SECTION_CATEGORY.JUNIORS_INFO:
			return 'Register through Squadi';
		case SECTION_CATEGORY.SENIORS_INFO:
			return 'Register through Squadi';
	}
};

export const getInfoTitle = (category: string) => {
	switch (category) {
		case SECTION_CATEGORY.REGO_INFO:
			return 'Steps To Register';
		case SECTION_CATEGORY.FAIRPLAY_INFO:
			return 'Steps To Claim';
		case SECTION_CATEGORY.MINIROOS_INFO:
			return 'Miniroos Benefits';
		case SECTION_CATEGORY.JUNIORS_INFO:
			return 'Juniors Benefits';
		case SECTION_CATEGORY.SENIORS_INFO:
			return 'Seniors Benefits';
		case SECTION_CATEGORY.COACH_INFO:
			return 'Benefits/Committments';
		case SECTION_CATEGORY.VOLUNTEER_INFO:
			return 'Benefits/Committments';
		case SECTION_CATEGORY.COMMITTEE_INFO:
			return 'Benefits/Committments';
		case SECTION_CATEGORY.LIFE_MEMBERS_INFO:
			return 'Achievements';
		case SECTION_CATEGORY.SPONSORS_INFO:
			return 'Benefits';
		case SECTION_CATEGORY.HISTORY_INFO:
			return 'At A Glance';
		case SECTION_CATEGORY.BLUE_CARD_INFO:
			return 'Steps To Register';
	}
};

export const getImageClasses = (category: string) => {
	const baseClass = 'h-60 object-cover';

	switch (category) {
		case CARD_CATEGORY.COACHES:
		case CARD_CATEGORY.EVENTS:
		case CARD_CATEGORY.CARNIVALS:
		case CARD_CATEGORY.CLUB_INFO:
		case CARD_CATEGORY.RESOURCES:
			return baseClass;
		case CARD_CATEGORY.PLATINUM_SPONSORS:
			return 'sm:h-[480px] h-60 object-contain';
		case CARD_CATEGORY.GOLD_SPONSORS:
			return 'sm:h-80 h-44 object-contain';
		case CARD_CATEGORY.SILVER_SPONSORS:
			return 'sm:h-60 h-36 object-contain';
		case CARD_CATEGORY.BRONZE_SPONSORS:
		case CARD_CATEGORY.DONATION_SPONSORS:
		case CARD_CATEGORY.GRANT_SPONSORS:
			return 'sm:h-52 h-28 object-contain';
		default:
			return baseClass;
	}
};
