import type { ReactElement, FC } from 'react';
import Draw from '~/components/Draw';
import Ladder from '~/components/Ladder';
import Tiles from '~/components/Tiles';
import { CARD_CATEGORY } from '~/constants/constants';
import type { Carnivals, MerchProps, News, RegoPrices } from '~/interfaces/content';

export interface HomeScreenProps {
	news: News[];
	merch: MerchProps[];
	regoPrices: RegoPrices[];
	carnivals: Carnivals[];
}

const HomeScreen: FC<HomeScreenProps> = ({ news, merch, regoPrices, carnivals }: HomeScreenProps): ReactElement => {
	console.log('home screen merch ==> ', merch);
	console.log('home screen news ==>', news);
	console.log('home screen carnivals ==>', carnivals);

	return (
		<>
			<Tiles category={CARD_CATEGORY.NEWS} content={news} isLoading={!news.length} />
			<Tiles category={CARD_CATEGORY.MERCH} content={merch} isLoading={!merch.length} />
			<Ladder />
			<Draw />
			<Tiles category={CARD_CATEGORY.REGO} content={regoPrices} isLoading={!regoPrices.length} />
			{/* <Tiles category={CARD_CATEGORY.CARNIVALS} content={carnivals} isLoading={!carnivals.length} /> */}
		</>
	);
};

export default HomeScreen;
