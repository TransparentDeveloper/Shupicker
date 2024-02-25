import { COLOR } from '@/libs/styled-components/reference-tokens'
import { numberAdjust } from '@/utils'
import * as S from './horizontal-gauge-graph.style'
import type * as T from './horizontal-gauge-graph.type'

const HorizontalGaugeGraph = ({
	percentage = 0,
	width = '100%',
	height = '1.2rem',
	bgColor = COLOR.brand.main.light
}: T.HorizontalGaugeGraphProps) => {
	const printedPercentage = numberAdjust(percentage, 0, 100)

	return (
		<S.Wrapper $width={width} $height={height}>
			<S.Gauge $width={printedPercentage + '%'} $height={height} $bgColor={bgColor} />
		</S.Wrapper>
	)
}
export default HorizontalGaugeGraph
