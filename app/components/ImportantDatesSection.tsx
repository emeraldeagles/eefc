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
	const [selectedDate, setSelectedDate] = useState<string>(formatDate(initialDate));

	const handleDateChange = (date: string) => {
		if (!date) {
			date = formatDate(new Date()); // Set to current date or another appropriate default
		}

		const dateObj = new Date(date);
		if (dateObj.toString() !== 'Invalid Date') {
			const formattedDate = formatDate(dateObj);
			if (selectedDate === formattedDate) {
				setSelectedDate(''); // Clear selected date to close the accordion
			} else {
				setSelectedDate(formattedDate); // Update with the new valid date
			}
		} else {
			setSelectedDate(formatDate(new Date())); // Set to a default valid date
		}
	};

	return (
		<div className="flex flex-col">
			<SectionTitle category="Important Dates" />
			<div className="flex flex-col gap-4 sm:flex-row">
				<div className="overflow-y-auto sm:max-h-[518px] sm:w-1/2 sm:rounded-lg	">
					<ImportantDatesList
						importantDates={importantDates}
						handleDateChange={handleDateChange}
						selectedDate={selectedDate}
					/>
				</div>
				<div className="sm:w-1/2">
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
