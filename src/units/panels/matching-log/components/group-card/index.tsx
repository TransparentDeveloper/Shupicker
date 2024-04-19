import { Box, Grid, GridElement } from '@/components'
import { URL_PARAM_MEMBER } from '@/constants'
import { useCryptoQuery } from '@/hooks'
import type { MemberType } from '@/types'
import { getGroupMembers } from '@/utils'
import { MemberList, SequenceNumber, SimpleNote } from '../'
import type { GroupCardProps } from './group-card.type.'

export const GroupCard = ({ group, sequence }: GroupCardProps) => {
	const { getArray } = useCryptoQuery()
	const memberArray = getArray<MemberType>(URL_PARAM_MEMBER)
	const groupMembers = getGroupMembers(group, memberArray)

	return (
		<Box width="100%" height="8rem">
			<Grid columns={8} columnGap="1rem">
				<GridElement column={1} columnSpan={2}>
					<SequenceNumber sequence={sequence} />
				</GridElement>
				<GridElement column={3} columnSpan={4}>
					<MemberList members={groupMembers} />
				</GridElement>
				<GridElement column={7} columnSpan={2}>
					<SimpleNote />
				</GridElement>
			</Grid>
		</Box>
	)
}
