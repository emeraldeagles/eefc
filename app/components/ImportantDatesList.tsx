import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@radix-ui/react-accordion';
import React from 'react';
import type { ImportantDates } from '~/interfaces/content';

type Props = {
	importantDates: ImportantDates[];
	handleDateChange: (date: string) => void;
	selectedDate: string; // Using selectedDate directly now
};

export default function ImportantDatesList({ importantDates, handleDateChange, selectedDate }: Props) {
	console.log('debug Current selectedDate:', selectedDate);

	return (
		// <div className="space-y-4">
		<div>
			<Accordion
				type="single"
				value={selectedDate}
				onValueChange={newDate => {
					console.log('Accordion value changed to:', newDate);
					if (newDate) {
						handleDateChange(newDate);
					}
					handleDateChange(newDate);
				}}
				collapsible
				className="min-w-full">
				{importantDates.map(event => (
					<AccordionItem key={event.title} value={event.date} className="mb-4 rounded-lg bg-white shadow">
						<AccordionTrigger className="flex w-full cursor-pointer items-center gap-2 p-4 hover:bg-gray-100">
							<img src={event.clubLogo} alt={event.title} className="h-10 w-10 rounded-full" />
							<div className="">
								<h3 className="text-lg font-semibold">{event.title}</h3>
								<p className="text-sm text-gray-500">
									{event.date} | {event.location}
								</p>
							</div>
						</AccordionTrigger>
						<AccordionContent className="p-4">
							<p>{event.description}</p>
							<a
								href={event.mapLink}
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-500 hover:underline">
								Get directions
							</a>
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
}
