import React, { useState } from 'react';
import ImportantDatesList from './ImportantDatesList';
import type { ImportantDates } from '~/interfaces/content';
import SectionTitle from './SectionTitle';
import EventCalendar from './EventCalendar';
import CalendarDownload from './CalendarDownload';

export const formatDate = (date: Date): string => {
	return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
};

type Props = {
	importantDates: ImportantDates[];
};

export default function ImportantDatesSection({ importantDates }: Props) {
	const initialDate = new Date(importantDates[0].date);
	console.log('debug Initial date set to:', formatDate(initialDate));
	const [selectedDate, setSelectedDate] = useState<string>(formatDate(initialDate));

	const handleDateChange = (date: string) => {
		console.log('debug Date received for change:', date);
		if (!date) {
			console.log('Received empty date, reverting to a default valid date.');
			date = formatDate(new Date()); // Set to current date or another appropriate default
		}

		const dateObj = new Date(date);
		if (dateObj.toString() !== 'Invalid Date') {
			const formattedDate = formatDate(dateObj);
			if (selectedDate === formattedDate) {
				console.log('Same date clicked, clearing date.');
				setSelectedDate(''); // Clear selected date to close the accordion
			} else {
				setSelectedDate(formattedDate); // Update with the new valid date
			}
		} else {
			console.log('Invalid date format received, setting to default.');
			setSelectedDate(formatDate(new Date())); // Set to a default valid date
		}
	};

	// const selectedEvent = importantDates.find(event => formatDate(new Date(event.date)) === selectedDate);

	return (
		<div className="flex flex-col">
			<SectionTitle category="Important Dates" />
			<div className="flex gap-4">
				<div className="max-h-[518px] w-1/2 overflow-y-auto rounded-b-2xl	">
					<ImportantDatesList
						importantDates={importantDates}
						handleDateChange={handleDateChange}
						selectedDate={selectedDate}
					/>
				</div>
				<div className="w-1/2">
					<EventCalendar
						importantDates={importantDates}
						handleDateChange={handleDateChange}
						selectedDate={selectedDate}
					/>
				</div>
			</div>
			<CalendarDownload />
		</div>
	);
}
