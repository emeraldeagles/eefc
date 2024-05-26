import { Button } from './ui/button';
import SectionTitle from './SectionTitle';
import type { SectionCardInfo } from '~/interfaces/content';
import { SECTION_CATEGORY } from '~/constants/constants';
import { Link } from '@remix-run/react';
import { Icon } from './Icon';
import { Tick } from './IconPaths/Tick';
import { getCallToAction, getInfoTitle } from '~/utils/UIhelpers';

type Props = {
	category: string;
	content: SectionCardInfo;
	leftToRight?: boolean;
};

const InfoContent = ({
	title,
	description,
	category,
	info,
}: {
	title: string;
	description: string;
	category: string;
	info: string[];
}) => (
	<>
		<h3 className="text-xl font-semibold">{title}</h3>
		<p className="mt-4 whitespace-pre-line text-gray-600">{description}</p>
		<div className="mt-6">
			<h4 className="text-lg font-semibold">{getInfoTitle(category)}</h4>
			<div className="mt-4 flex flex-col gap-2">
				{info.map((i: string) => (
					<div key={i} className="flex items-start justify-start">
						<Icon iconPath={<Tick />} iconClass="mr-2 mt-1 text-primary" iconSize={20} />
						<p>{i}</p>
					</div>
				))}
			</div>
		</div>
	</>
);

const CallToAction = ({ callToAction, isLinkArray, link, isSpecificCategory }: any) => (
	<div className={`${isSpecificCategory ? 'flex flex-col sm:flex-row sm:gap-2' : 'mt-6'}`}>
		{isLinkArray ? (
			link.map((l: string, index: number) => (
				<Link
					to={l}
					key={index}
					target="_blank"
					rel="noopener noreferrer"
					className="mt-6 flex w-full flex-col sm:flex-row">
					<Button variant="outline" className="w-full border-2 font-semibold hover:text-primary sm:ml-2 sm:mt-0">
						{callToAction[index]}
					</Button>
				</Link>
			))
		) : (
			<Link to={link} target="_blank" rel="noopener noreferrer" className="mt-6 w-full">
				<Button variant="outline" className="w-full border-2 font-semibold hover:text-primary sm:ml-2 sm:mt-0">
					{callToAction}
				</Button>
			</Link>
		)}
	</div>
);

const ImageSection = ({ images }: { images: string[] }) => (
	<div className="flex flex-col items-center gap-2 rounded-lg">
		{images.map((image, index) => (
			<img key={index} src={image} loading="lazy" alt={`Image ${index + 1}`} className="h-full w-full rounded-lg p-0" />
		))}
	</div>
);

const SectionContent = ({ category, content, leftToRight }: Props) => {
	const { title, description, info, link, images } = content;
	const isLinkArray = Array.isArray(link);
	const specificCategories = [
		SECTION_CATEGORY.REGO_INFO,
		SECTION_CATEGORY.BLUE_CARD_INFO,
		SECTION_CATEGORY.MINIROOS_INFO,
		SECTION_CATEGORY.JUNIORS_INFO,
		SECTION_CATEGORY.SENIORS_INFO,
	];
	const isSpecificCategory = specificCategories.includes(category);
	const callToAction = getCallToAction(category);

	return (
		<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
			{leftToRight ? (
				<>
					<div className="flex h-full flex-col md:col-span-1">
						<div className="flex-grow">
							<InfoContent title={title} description={description} category={category} info={info} />
						</div>
						{callToAction && (
							<CallToAction
								callToAction={callToAction}
								isLinkArray={isLinkArray}
								link={link}
								isSpecificCategory={isSpecificCategory}
							/>
						)}
					</div>
					<ImageSection images={images} />
				</>
			) : (
				<>
					<ImageSection images={images} />
					<div className="flex h-full flex-col md:col-span-1">
						<div className="flex-grow">
							<InfoContent title={title} description={description} category={category} info={info} />
						</div>
						{callToAction && (
							<CallToAction
								callToAction={callToAction}
								isLinkArray={isLinkArray}
								link={link}
								isSpecificCategory={isSpecificCategory}
							/>
						)}
					</div>
				</>
			)}
		</div>
	);
};

export const Section = ({ category, content, leftToRight }: Props) => (
	<>
		<SectionTitle category={category} />
		<div className="mx-auto w-full bg-white p-6 shadow-md sm:rounded-lg">
			<SectionContent category={category} content={content} leftToRight={leftToRight} />
		</div>
	</>
);

export default Section;
