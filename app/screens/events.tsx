import type { ReactElement, FC } from 'react';
import ImportantDatesSection from '~/components/ImportantDatesSection';
import Tiles from '~/components/Tiles';
import { CARD_CATEGORY } from '~/constants/constants';
import type { Carnivals, Events, ImportantDates } from '~/interfaces/content';

export interface EventScreenProps {
	carnivals: Carnivals[];
	events: Events[];
	importantDates: ImportantDates[];
	loading: boolean;
}

const EventsScreen: FC<EventScreenProps> = ({
	carnivals,
	events,
	importantDates,
	loading,
}: EventScreenProps): ReactElement => {
	return (
		<>
			<ImportantDatesSection importantDates={importantDates} />
			<Tiles category={CARD_CATEGORY.EVENTS} content={events} isLoading={loading} />
			<Tiles category={CARD_CATEGORY.CARNIVALS} content={carnivals} isLoading={loading} />
		</>
	);
};

export default EventsScreen;
