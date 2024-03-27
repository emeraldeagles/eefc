import type { ReactElement, FC } from 'react';
import Tiles from '~/components/Tiles';
import { CARD_CATEGORY } from '~/constants/constants';
import type { Carnivals, Merch, News, RegoPrices } from '~/interfaces/content';

export interface HomeScreenProps {
	news: News[];
	merch: Merch[];
	regoPrices: RegoPrices[];
	carnivals: Carnivals[];
}

const HomeScreen: FC<HomeScreenProps> = ({ news, merch, regoPrices, carnivals }: HomeScreenProps): ReactElement => {
	return (
		<>
			<Tiles category={CARD_CATEGORY.NEWS} content={news} />
			<Tiles category={CARD_CATEGORY.MERCH} content={merch} />
			<Tiles category={CARD_CATEGORY.REGO} content={regoPrices} />
			<Tiles category={CARD_CATEGORY.CARNIVALS} content={carnivals} />
			{/* <Ladder /> */}
			{/* <Draw /> */}
		</>
	);
};

export default HomeScreen;
