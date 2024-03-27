import { ColumnFlexBox, PanelBase, PanelHeader } from '@/components'
import PanelMain from '@/components/panel/panel-main'
import { URL_PARAM_GROUP, URL_PARAM_PERSONNEL } from '@/constants'
import { useManageUrlArray } from '@/hooks'
import type { GroupType, PersonnelType } from '@/types'
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
		<PanelBase>
			<PanelHeader sectionName="📋 참여기록" />
			<PanelMain>
				<ColumnFlexBox gap="0.5rem">
					{groupArray.map((group, idx) => (
						<GroupCard key={group.id} groupId={group.id} memberArray={memberArrayEachGroup[idx]} />
					))}
				</ColumnFlexBox>
			</PanelMain>
		</PanelBase>
	)
}

export default MatchingLog
