import { ColumnFlexBox } from '@/components/layout'
import { COLOR } from '@/libs/styled-components/reference-tokens'
import { clampValue } from '@/utils'
import * as S from './horizontal-gauge.style'
import type * as T from './horizontal-gauge.type'

const HorizontalGauge = ({
	label,
	totalValue,
	currentValue,
	gaugeColor = COLOR.brand.main.light
}: T.HorizontalGaugeGraphProps) => {
	const percentage = clampValue(Math.floor((100 * currentValue) / totalValue), 0, 100)
	return (
		<ColumnFlexBox gap="0.5rem">
			<S.Label>{label}</S.Label>
			<S.GraphWrapper>
				<S.Gauge $width={percentage + '%'} $gaugeColor={gaugeColor} />
				<S.FractionText>{currentValue + ' / ' + totalValue}</S.FractionText>
			</S.GraphWrapper>
		</ColumnFlexBox>
	)
}
export default HorizontalGauge
