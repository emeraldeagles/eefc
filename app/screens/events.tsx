import type { ReactElement, FC } from 'react';
import Tiles from '~/components/Tiles';
import { CARD_CATEGORY } from '~/constants/constants';
import type { Carnivals, Resources } from '~/interfaces/content';

export interface EventScreenProps {
	carnivals: Carnivals[];
	events: Resources[];
	importantDates: Resources[];
}

const EventsScreen: FC<EventScreenProps> = ({ carnivals, events, importantDates }: EventScreenProps): ReactElement => {
	return (
		<>
			{/* <ImportantDates /> */}
			<Tiles category={CARD_CATEGORY.EVENTS} content={events} />
			<Tiles category={CARD_CATEGORY.CARNIVALS} content={carnivals} />
		</>
	);
};

export default EventsScreen;
