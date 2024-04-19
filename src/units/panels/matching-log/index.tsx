import { ColumnFlexBox, PanelBase, PanelHeader } from '@/components'
import PanelMain from '@/components/panel/panel-main'
import { URL_PARAM_GROUP, URL_PARAM_MEMBER } from '@/constants'
import { useCryptoQuery } from '@/hooks'
import type { GroupType, MemberType, OptionalSizeProps } from '@/types'
import { GroupCard } from './components'

const MatchingLog = ({ width = '100%', height = '100%' }: OptionalSizeProps) => {
	const { getArray } = useCryptoQuery()
	const memberArray = getArray<MemberType>(URL_PARAM_MEMBER)
	const groupArray = getArray<GroupType>(URL_PARAM_GROUP)

	return (
		<PanelBase {...{ width, height }}>
			<PanelHeader sectionName="📋 참여기록" />
			<PanelMain>
				<ColumnFlexBox gap="0.5rem">
					{groupArray.map((group, idx) => (
						<GroupCard key={group.id} group={group} sequence={idx} />
					))}
				</ColumnFlexBox>
			</PanelMain>
		</PanelBase>
	)
}

export default MatchingLog
