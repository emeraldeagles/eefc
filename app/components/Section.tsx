import { CheckIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Icon } from './Icon';
import { ChevronIcon } from './IconPaths/Chevron';

type Props = {
	category: string;
	left?: boolean;
};

export const Section = ({ category, left }: Props) => {
	return (
		<div className="mx-auto my-12 w-full rounded-lg bg-white p-6 shadow-md">
			{/* <div className="mx-auto my-12 max-w-4xl rounded-lg bg-white p-6 shadow-md"> */}
			{/* <div className="text-center">
				<h2 className="text-3xl font-bold">Simple no-tricks pricing</h2>
				<p className="mt-2 text-gray-600">
					Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in.
					Explicabo id ut laborum.
				</p>
			</div> */}
			<div className="grid grid-cols-1 gap-6 md:grid-cols-3 ">
				{left ? (
					<>
						<div className="md:col-span-2">
							<h3 className="flex text-xl font-semibold">
								{category}
								<span>
									<Icon iconPath={<ChevronIcon />} />
								</span>
							</h3>
							<p className="mt-4 text-gray-600">
								Lorem ipsum dolor sit amet consectetur adipiscing elit. Itaque amet indis perferendis blanditiis
								repellendus etur quidem assumenda.
							</p>
							<div className="mt-6">
								<h4 className="text-lg font-semibold">What's included</h4>
								<div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
									<div className="flex items-center">
										<CheckIcon className="mr-2 text-green-500" />
										<span>Private forum access</span>
									</div>
									<div className="flex items-center">
										<CheckIcon className="mr-2 text-green-500" />
										<span>Member resources</span>
									</div>
									<div className="flex items-center">
										<CheckIcon className="mr-2 text-green-500" />
										<span>Entry to annual conference</span>
									</div>
									<div className="flex items-center">
										<CheckIcon className="mr-2 text-green-500" />
										<span>Official member t-shirt</span>
									</div>
								</div>
							</div>
						</div>
						<div className="flex flex-col items-center rounded-lg border bg-gray-100 p-6">
							<h3 className="text-lg font-semibold">Pay once, own it forever</h3>
							<div className="mt-4 text-4xl font-bold">$349</div>
							<div className="mt-1 text-gray-600">USD</div>
							<Button className="mt-6 w-full bg-blue-600 text-white">Get access</Button>
							<p className="mt-4 text-sm text-gray-600">
								Invoices and receipts available for easy company reimbursement
							</p>
						</div>
					</>
				) : (
					<>
						<div className="flex flex-col items-center rounded-lg border bg-gray-100 p-6">
							<h3 className="text-lg font-semibold">Pay once, own it forever</h3>
							<div className="mt-4 text-4xl font-bold">$349</div>
							<div className="mt-1 text-gray-600">USD</div>
							<Button className="mt-6 w-full bg-blue-600 text-white">Get access</Button>
							<p className="mt-4 text-sm text-gray-600">
								Invoices and receipts available for easy company reimbursement
							</p>
						</div>
						<div className="md:col-span-2">
							<h3 className="flex text-xl font-semibold">
								{category}
								<span>
									<Icon iconPath={<ChevronIcon />} />
								</span>
							</h3>
							<p className="mt-4 text-gray-600">
								Lorem ipsum dolor sit amet consectetur adipiscing elit. Itaque amet indis perferendis blanditiis
								repellendus etur quidem assumenda.
							</p>
							<div className="mt-6">
								<h4 className="text-lg font-semibold">What's included</h4>
								<div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
									<div className="flex items-center">
										<CheckIcon className="mr-2 text-green-500" />
										<span>Private forum access</span>
									</div>
									<div className="flex items-center">
										<CheckIcon className="mr-2 text-green-500" />
										<span>Member resources</span>
									</div>
									<div className="flex items-center">
										<CheckIcon className="mr-2 text-green-500" />
										<span>Entry to annual conference</span>
									</div>
									<div className="flex items-center">
										<CheckIcon className="mr-2 text-green-500" />
										<span>Official member t-shirt</span>
									</div>
								</div>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Section;
