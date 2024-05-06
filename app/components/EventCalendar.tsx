import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import type { ImportantDates } from '~/interfaces/content';
import { formatDate } from './ImportantDatesSection';

type Props = {
	importantDates: ImportantDates[];
	handleDateChange: (date: string) => void;
	selectedDate: string;
};

export default function EventCalendar({ importantDates, handleDateChange, selectedDate }: Props) {
	function tileClassName({ date, view }) {
		if (view === 'month') {
			const dateStr = formatDate(date); // Ensure formatDate returns date in 'YYYY-MM-DD' format
			const isEvent = importantDates.some(event => formatDate(new Date(event.date)) === dateStr);
			if (isEvent) {
				return dateStr === selectedDate ? 'event-dot-selected' : 'event-dot';
			}
		}
	}

	return (
		<div className="calendar-container">
			<Calendar
				onChange={value => {
					if (value instanceof Date) {
						handleDateChange(formatDate(value));
					}
				}}
				value={new Date(selectedDate || new Date())} // Ensure always a valid date
				tileClassName={tileClassName}
			/>
		</div>
	);
}
