import { json, useLoaderData } from '@remix-run/react';
import React from 'react';
import { getPlayerInfo } from '~/client/play';
import Tiles from '~/components/Tiles';
import { CARD_CATEGORY } from '~/constants/constants';

export async function loader() {
	const playerInfo = await getPlayerInfo();

	return json({ playerInfo });
}

export default function PlayerInfo() {
	const { playerInfo } = useLoaderData<typeof loader>();

	return <Tiles category={CARD_CATEGORY.PLAYER_INFO} content={playerInfo} />;
}
