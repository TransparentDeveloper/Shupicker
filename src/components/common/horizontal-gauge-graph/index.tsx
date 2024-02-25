import { COLOR } from '@/libs/styled-components/reference-tokens'
import { numberAdjust } from '@/utils'
import * as S from './horizontal-gauge-graph.style'
import type * as T from './horizontal-gauge-graph.type'

const HorizontalGaugeGraph = ({
	totalValue = 100,
	currentValue = 0,
	width = '100%',
	height = '1.4rem',
	gaugeColor = COLOR.brand.main.light
}: T.HorizontalGaugeGraphProps) => {
	const percentage = numberAdjust(Math.floor((100 * currentValue) / totalValue), 0, 100)

	return (
		<S.Wrapper $width={width} $height={height}>
			<S.Gauge $width={percentage + '%'} $height={height} $gaugeColor={gaugeColor} />
			<S.FractionText>{currentValue + ' / ' + totalValue}</S.FractionText>
		</S.Wrapper>
	)
}
export default HorizontalGaugeGraph
