import type { SVGProps } from 'react';
import type { Content } from '~/interfaces/content';

export type IconProps = {
	iconPath: SVGProps<SVGSVGElement>;
	href?: string;
	buttonClass?: string;
	buttonSize?: string;
	buttonShape?: string;
	iconClass?: string;
	iconColor?: string;
	iconSize?: number;
	fill?: string;
	strokeWidth?: number;
	isLink?: boolean;
	isButton?: boolean;
};

export type TileProps = {
	category: string;
	content: Content[];
	isLoading?: boolean;
};

export type ArticleProps = {
	category: string;
	content: Content[];
};

export type CardProps = {
	category: string;
	content: Content;
};

export type BasicCardProps = {
	description: string;
	images: string[];
	link?: string;
	date?: string;
	id?: string;
	category?: string;
	team?: string;
};

export type InfoCardProps = {
	title: string;
	description: string;
	image: string;
	team?: string;
	category: string;
	email?: string;
	ageGroup?: string;
	link?: string;
	type?: string;
};

export type MerchCardProps = {
	title: string;
	description: string;
	price: string;
	badge: string;
	image: string;
};

export type PricingCardProps = {
	title: string;
	description: string;
	image: string;
	price: string;
	open: boolean;
};

export type ResourceCardProps = {
	title: string;
	description: string;
	image: string;
	link: string;
	category: string;
};
