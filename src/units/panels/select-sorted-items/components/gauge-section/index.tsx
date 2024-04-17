import { ColumnFlexBox, HorizontalGauge } from '@/components'
import { ESSENTIAL_TRAIT_CREATION_TIME_ID, ESSENTIAL_TRAIT_PARTICIPATION_CNT_ID } from '@/constants'
import { useAnchorTime } from '@/hooks/use-anchor-time'
import { COLOR } from '@/libs/styled-components/reference-tokens'
import { MemberType } from '@/types'
import { calAvgCntPerUnitMin, findEssentialTraitById } from '@/utils'

export type GaugeSectionType = {
	member: MemberType
}

export const GaugeSection = ({ member }: GaugeSectionType) => {
	const { anchorTime } = useAnchorTime()
	const creationTime = findEssentialTraitById(member, ESSENTIAL_TRAIT_CREATION_TIME_ID) as string
	const joinCnt = findEssentialTraitById(member, ESSENTIAL_TRAIT_PARTICIPATION_CNT_ID) as number
	const avgCntPerUnitMin = calAvgCntPerUnitMin(anchorTime, creationTime, joinCnt, 5)

	return (
		<ColumnFlexBox gap="1rem">
			<HorizontalGauge
				label="5분 당 참여횟수"
				totalValue={100}
				currentValue={50}
				gaugeColor={COLOR.brand.main.base}
			/>
			<HorizontalGauge
				label="10분 당 참여횟수"
				totalValue={100}
				currentValue={80}
				gaugeColor={COLOR.brand.sub.base}
			/>
		</ColumnFlexBox>
	)
}
