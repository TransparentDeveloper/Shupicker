import { Spacer } from '@/components'
import { URL_PARAM_GROUP, URL_PARAM_PERSONNEL } from '@/constants'
import { useManageUrlArray } from '@/hooks'
import { DIRECTION_COLUMN } from '@/libs/styled-components/css-utils'
import type { GroupType, PersonnelType } from '@/types'
import { BoardBase, BoardHeader } from '@/units/boards'
import styled from 'styled-components'
import { GroupCard } from './components'

const MatchingLog = () => {
	const { getArray: getGroupArray } = useManageUrlArray<GroupType>(URL_PARAM_GROUP)
	const { getArray: getPersonnelArray } = useManageUrlArray<PersonnelType>(URL_PARAM_PERSONNEL)

	const groupArray = getGroupArray()
	const personnelArray = getPersonnelArray()

	const memberArrayEachGroup = groupArray.map((group) => {
		const memberIdArray = group.personnelIdArray
		return personnelArray.filter((member) => memberIdArray.includes(member.id))
	})

	return (
		<BoardBase>
			<BoardHeader sectionName="📋 참여기록" />
			<Spacer y={2} />
			<S.VerticalScrollContainer>
				{groupArray.map((group, idx) => (
					<GroupCard key={group.id} groupId={group.id} memberArray={memberArrayEachGroup[idx]} />
				))}
			</S.VerticalScrollContainer>
		</BoardBase>
	)
}

export default MatchingLog

const VerticalScrollContainer = styled.div`
	${DIRECTION_COLUMN}
	gap: 1rem;
	width: 100%;
	height: 75vh;
	max-height: 100%;
	overflow-y: scroll;
	overflow-x: hidden;
`

const S = {
	VerticalScrollContainer
}
