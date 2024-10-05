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
	loading: boolean;
}

const HomeScreen: FC<HomeScreenProps> = ({
	news,
	merch,
	regoPrices,
	carnivals,
	loading,
}: HomeScreenProps): ReactElement => {
	return (
		<div className="space-y-6">
			<Tiles category={CARD_CATEGORY.REGO} content={regoPrices} isLoading={!regoPrices.length} />
			<Tiles category={CARD_CATEGORY.NEWS} content={news} isLoading={loading} />
			<Ladder />
			<Draw />
			<Tiles category={CARD_CATEGORY.MERCH} content={merch} isLoading={!merch.length} />
			<Tiles category={CARD_CATEGORY.CARNIVALS} content={carnivals} isLoading={loading} />
		</div>
	);
};

export default HomeScreen;
