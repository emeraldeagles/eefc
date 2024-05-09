import type {
	Carnivals,
	ClubInfo,
	Content,
	Events,
	MerchProps,
	News,
	RegoPrices,
	Resources,
} from '~/interfaces/content';
import React from 'react';
import { CARD_CATEGORY } from '~/constants/constants';
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

export const getCardByCategory = ({ content, category }: CardProps) => {
	if (category === CARD_CATEGORY.NEWS && isNews(content)) {
		const { id, description, images, link } = content;
		return <BasicCard id={id} description={description} images={images} link={link} category={category} />;
	}
	if (category === CARD_CATEGORY.CLUB_INFO && isClubInfo(content)) {
		const { title, description, image } = content;
		return <InfoCard title={title} description={description} image={image} />;
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
};

export const getHeaderImage = (location: any) => {
	if (location.pathname === '/') {
		return (
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
		);
	}
	if (location.pathname === '/events') {
		return (
			<img
				alt="Emerald Eagles FC Players"
				className="h-full w-screen object-cover object-center"
				height={1080}
				src="https://eefc.syd1.cdn.digitaloceanspaces.com/2024-Logos/EEFCLogoWeb.png"
				style={{
					aspectRatio: '1920/1080',
					objectFit: 'cover',
				}}
				width={1920}
			/>
		);
	}
	if (location.pathname === '/club') {
		return (
			<img
				alt="Emerald Eagles FC Players"
				className="h-full w-screen object-cover object-center"
				height={1080}
				src="https://eefc.syd1.cdn.digitaloceanspaces.com/2024-Logos/eefclogo.png"
				style={{
					aspectRatio: '1920/1080',
					objectFit: 'cover',
				}}
				width={1920}
			/>
		);
	}
	if (location.pathname === '/play') {
		return (
			<img
				alt="Emerald Eagles FC Players"
				className="h-full w-screen object-cover object-center"
				height={1080}
				src="https://eefc.syd1.cdn.digitaloceanspaces.com/2024-Logos/eefclogo.png"
				style={{
					aspectRatio: '1920/1080',
					objectFit: 'cover',
				}}
				width={1920}
			/>
		);
	}
};