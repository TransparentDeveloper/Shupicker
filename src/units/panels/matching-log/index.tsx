import { ColumnFlexBox, PanelBase, PanelHeader } from '@/components'
import PanelMain from '@/components/panel/panel-main'
import { URL_PARAM_GROUP, URL_PARAM_MEMBER } from '@/constants'
import { useManageUrlArray } from '@/hooks'
import type { GroupType, MemberType, OptionalSizeProps } from '@/types'
import { GroupCard } from './components'

const MatchingLog = ({ width = '100%', height = '100%' }: OptionalSizeProps) => {
	const { getArray: getGroupArray } = useManageUrlArray<GroupType>(URL_PARAM_GROUP)
	const { getArray: getMemberArray } = useManageUrlArray<MemberType>(URL_PARAM_MEMBER)

	const groupArray = getGroupArray()
	const memberArray = getMemberArray()

	const memberArrayEachGroup = groupArray.map((group) => {
		const memberIdArray = group.memberIdArray
		return memberArray.filter((member) => memberIdArray.includes(member.id))
	})

	return (
		<PanelBase {...{ width, height }}>
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
