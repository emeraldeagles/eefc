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
	return 'date' in content;
};

export const isRegoPrices = (content: Content): content is RegoPrices => {
	return 'open' in content;
};

export const isCarnivals = (content: Content): content is Carnivals => {
	return 'event' in content;
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
		return <InfoCard title={title} description={description} image={image} link={link} />;
	}
	if (category === CARD_CATEGORY.MERCH && isMerch(content)) {
		const { title, description, price, badge, badgeColour, image } = content;
		return (
			<MerchCard
				title={title}
				description={description}
				price={price}
				badge={badge}
				badgeColour={badgeColour}
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
			category === CARD_CATEGORY.BRONZE_SPONSORS) &&
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
	if (category === CARD_CATEGORY.NEWS) return 'grid-cols-1 md:grid-cols-4';
	if (category === CARD_CATEGORY.CLUB_INFO) return 'grid-cols-1 md:grid-cols-3';
	if (category === CARD_CATEGORY.MERCH) return 'grid-cols-1 md:grid-cols-3';
	if (category === CARD_CATEGORY.EVENTS) return 'grid-cols-1 md:grid-cols-4';
	if (category === CARD_CATEGORY.REGO) return 'grid-cols-1 md:grid-cols-3';
	if (category === CARD_CATEGORY.CARNIVALS) return 'grid-cols-1 md:grid-cols-4';
	if (category === CARD_CATEGORY.RESOURCES) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
	if (category === CARD_CATEGORY.COACHES) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
	if (category === CARD_CATEGORY.COMMITTEE) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
	if (category === CARD_CATEGORY.PLATINUM_SPONSORS) return 'grid-cols-1 md:grid-cols-2';
	if (category === CARD_CATEGORY.GOLD_SPONSORS) return 'grid-cols-1 md:grid-cols-3';
	if (category === CARD_CATEGORY.SILVER_SPONSORS) return 'grid-cols-1 md:grid-cols-4';
	if (category === CARD_CATEGORY.BRONZE_SPONSORS) return 'grid-cols-1 md:grid-cols-4 lg:grid-cols-5';
};

export const getCallToAction = (category: string) => {
	switch (category) {
		case SECTION_CATEGORY.REGO_INFO:
			return 'Register through Squadi now';
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
	}
};

export const getInfoTitle = (category: string) => {
	switch (category) {
		case SECTION_CATEGORY.REGO_INFO:
			return 'Steps To Register';
		case SECTION_CATEGORY.FAIRPLAY_INFO:
			return 'Steps To Claim';
		case SECTION_CATEGORY.SEASON_INFO:
			return 'Benefits of the season';
		case SECTION_CATEGORY.PLAYER_INFO:
			return 'Benefits/Committments';
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
			return 'At a glance';
	}
};

export const getImageHeight = (category: string) => {
	switch (category) {
		case CARD_CATEGORY.COACHES:
			return 'h-60';
		case CARD_CATEGORY.LIFE_MEMBERS:
			return 'h-60';
		case CARD_CATEGORY.PLATINUM_SPONSORS:
			return 'h-[480px]';
		case CARD_CATEGORY.GOLD_SPONSORS:
			return 'h-80';
		case CARD_CATEGORY.SILVER_SPONSORS:
			return 'h-60';
		case CARD_CATEGORY.BRONZE_SPONSORS:
			return 'h-52';
		case CARD_CATEGORY.EVENTS:
			return 'h-60';
		case CARD_CATEGORY.CARNIVALS:
			return 'h-60';
		case CARD_CATEGORY.CLUB_INFO:
			return 'h-60';
		case CARD_CATEGORY.RESOURCES:
			return 'h-60';
		default:
			return 'h-60';
	}
};