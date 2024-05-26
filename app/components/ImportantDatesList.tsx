import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@radix-ui/react-accordion';
import React from 'react';
import type { ImportantDates } from '~/interfaces/content';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { ArrowUpRight } from 'lucide-react';

type Props = {
	importantDates: ImportantDates[];
	handleDateChange: (date: string) => void;
	selectedDate: string;
};

export default function ImportantDatesList({ importantDates, handleDateChange, selectedDate }: Props) {
	return (
		<div>
			<Accordion
				type="single"
				value={selectedDate}
				onValueChange={newDate => handleDateChange(newDate)}
				collapsible
				className="min-w-full">
				{importantDates.map((event, index) => (
					<AccordionItem key={index} value={event.date} className="mb-4 bg-white shadow sm:rounded-lg">
						<AccordionTrigger className="flex w-full cursor-pointer items-start gap-2 p-4 hover:bg-gray-100">
							<Avatar>
								<AvatarImage src={event.clubLogo} />
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
							<div className="flex-grow pl-4">
								<h3 className="text-left text-lg font-semibold">{event.title}</h3>
								<p className="text-left text-sm text-gray-500">
									{event.date} | {event.location}
								</p>
							</div>
						</AccordionTrigger>
						<AccordionContent className="border-t p-6">
							<div className="flex">
								<div className="flex-grow flex-col gap-4">
									{event.description.split('\n').map((line, index) => (
										<>
											<p key={index}>{line}</p>
											<br></br>
										</>
									))}
									<a href={event.mapLink} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
										<span>
											Get directions{' '}
											<ArrowUpRight size={20} style={{ display: 'inline-block', verticalAlign: 'middle' }} />
										</span>
									</a>
								</div>
							</div>
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
}
