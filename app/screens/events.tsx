import type { ReactElement, FC } from 'react';
import ImportantDatesSection from '~/components/ImportantDatesSection';
import Tiles from '~/components/Tiles';
import { CARD_CATEGORY } from '~/constants/constants';
import type { Carnivals, Events, ImportantDates } from '~/interfaces/content';

export interface EventScreenProps {
	carnivals: Carnivals[];
	events: Events[];
	importantDates: ImportantDates[];
}

const EventsScreen: FC<EventScreenProps> = ({ carnivals, events, importantDates }: EventScreenProps): ReactElement => {
	return (
		<>
			<ImportantDatesSection importantDates={importantDates} />
			<Tiles category={CARD_CATEGORY.EVENTS} content={events} />
			<Tiles category={CARD_CATEGORY.CARNIVALS} content={carnivals} />
		</>
	);
};

export default EventsScreen;
