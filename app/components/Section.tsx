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

export const Section = ({ category, content, leftToRight }: Props) => {
	const { title, description, image, info, link } = content;
	console.log('Section category => ', category);

	return (
		<>
			<SectionTitle category={category} />
			<div className="mx-auto w-full rounded-lg bg-white p-6 shadow-md">
				<div className="grid grid-cols-1 gap-6 lg:grid-cols-2 ">
					{leftToRight ? (
						<>
							<div className="flex h-full flex-col md:col-span-1">
								<div className="flex-grow">
									<h3 className="flex text-xl font-semibold">{title}</h3>
									<p className="mt-4 whitespace-pre-line text-gray-600">{description}</p>
									<div className="mt-6">
										<h4 className="text-lg font-semibold">{getInfoTitle(category)}</h4>
										<div className="mt-4 flex grid grid-cols-1 flex-col gap-2">
											{info.map((i: string) => {
												return (
													<div key={i} className="flex items-start justify-start">
														<Icon iconPath={<Tick />} iconClass="mr-2 mt-1 text-green-500" iconSize={20} />
														<p>{i}</p>
													</div>
												);
											})}
										</div>
									</div>
								</div>
								{getCallToAction(category) ? (
									<div className="mt-auto">
										<Link to={link} target="_blank" rel="no_referrer">
											<Button variant="outline" className="mt-6 w-full border-primary text-primary">
												{getCallToAction(category)}
											</Button>
										</Link>
									</div>
								) : null}
							</div>
							{category === SECTION_CATEGORY.REGO_INFO ? (
								<div className="flex flex-col items-center gap-2 rounded-lg">
									<img
										src="https://eefc.syd1.cdn.digitaloceanspaces.com/Squadi-Setup.jpeg"
										alt={category}
										className="h-full w-full rounded-lg p-0"
									/>
									<img
										src="https://eefc.syd1.cdn.digitaloceanspaces.com/Squadi-Benefits.jpeg"
										alt={category}
										className="h-full w-full rounded-lg p-0"
									/>
								</div>
							) : (
								<div className="flex flex-col items-center rounded-lg">
									<img src={image} alt={category} className="h-full w-full rounded-lg p-0" />
								</div>
							)}
						</>
					) : (
						<>
							{category === SECTION_CATEGORY.REGO_INFO ? (
								<div className="flex flex-col items-center gap-2 rounded-lg">
									<img
										src="https://eefc.syd1.cdn.digitaloceanspaces.com/Squadi-Setup.jpeg"
										alt={category}
										className="h-full w-full rounded-lg p-0"
									/>
									<img
										src="https://eefc.syd1.cdn.digitaloceanspaces.com/Squadi-Benefits.jpeg"
										alt={category}
										className="h-full w-full rounded-lg p-0"
									/>
								</div>
							) : (
								<div className="flex flex-col items-center rounded-lg">
									<img src={image} alt={category} className="h-full w-full rounded-lg p-0" />
								</div>
							)}
							<div className="flex h-full flex-col md:col-span-1">
								<div className="flex-grow">
									<h3 className="flex text-xl font-semibold">{title}</h3>
									<p className="mt-4 whitespace-pre-line text-gray-600">{description}</p>
									<div className="mt-6">
										<h4 className="text-lg font-semibold">{getInfoTitle(category)}</h4>
										<div className="mt-4 flex grid grid-cols-1 flex-col gap-2">
											{info.map(i => {
												return (
													<div key={i} className="flex items-start justify-start">
														<Icon iconPath={<Tick />} iconClass="mr-2 mt-1 text-green-500" iconSize={20} />
														<p>{i}</p>
													</div>
												);
											})}
										</div>
									</div>
								</div>
								{getCallToAction(category) ? (
									<div className="mt-auto">
										<Link to={link} target="_blank" rel="no_referrer">
											<Button variant="outline" className="mt-6 w-full border-primary text-primary">
												{getCallToAction(category)}
											</Button>
										</Link>
									</div>
								) : null}
							</div>
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default Section;
