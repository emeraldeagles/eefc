import React from 'react';
import type { LifeMembers } from '~/interfaces/content';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Card, CardContent } from './ui/card';

// Helper function to group life members by year
const groupByYear = (lifeMembers: LifeMembers[]): Record<string, string[]> => {
	return lifeMembers.reduce((acc: Record<string, string[]>, member: LifeMembers) => {
		if (!acc[member.year]) {
			acc[member.year] = [];
		}
		acc[member.year].push(member.title);
		return acc;
	}, {});
};

type LifeMembersTableProps = {
	lifeMembers: LifeMembers[];
};

export default function LifeMembersTable({ lifeMembers }: LifeMembersTableProps) {
	const groupedLifeMembers = groupByYear(lifeMembers);

	return (
		<div>
			<Card>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Member</TableHead>
								<TableHead className="text-right">Year</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{Object.entries(groupedLifeMembers).map(([year, members], index) => (
								<TableRow key={index}>
									<TableCell>
										{members.map((member, idx) => (
											<div key={idx} className="font-medium">
												{member}
											</div>
										))}
									</TableCell>
									<TableCell className="text-right">{year}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</CardContent>
			</Card>
		</div>
	);
}
