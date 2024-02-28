import {
	Box,
	ColumnFlexBox,
	Grid,
	GridElement,
	HorizontalGaugeGraph,
	TaggingText,
	TextSpacer
} from '@/components'
import { URL_PARAM_PERSONNEL } from '@/constants'
import { useGetDecodedArray } from '@/hooks'
import { DIRECTION_COLUMN, FLEX_CENTER, TEXT_SHADOW_CSS } from '@/libs/styled-components/css-utils'
import { COLOR, FONT_SIZE } from '@/libs/styled-components/reference-tokens'
import { PersonnelType } from '@/types'
import { BoardBase, BoardHeader } from '@/units/boards'
import { faCheck, faSortAmountDownAlt } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const SelectSortedItems = () => {
	const { decodedArray: personnelArray } = useGetDecodedArray<PersonnelType>(URL_PARAM_PERSONNEL)

	return (
		<BoardBase>
			<BoardHeader
				sectionName="👆 정렬 & 선택"
				iconButtonDataArray={[
					{
						iconData: faSortAmountDownAlt
					},
					{
						iconData: faCheck,
						hoverBgColor: COLOR.system.confirm,
						hoverIconColor: COLOR.grayScale[150]
					}
				]}
			/>
			<S.VerticalScrollContainer>
				<Box width="100%" height="fit-content">
					<Grid columns={9}>
						<GridElement column={1} columnSpan={2}>
							<S.NameText>이윤신</S.NameText>
						</GridElement>
						<GridElement column={3} columnSpan={7}>
							<ColumnFlexBox gap="1rem">
								<ColumnFlexBox gap="0.5rem">
									<h4>
										<TaggingText bgIntensity="light" fontSize={FONT_SIZE.ti}>
											생성시각
										</TaggingText>
										<TextSpacer />
										대비, 참여횟수
									</h4>
									<HorizontalGaugeGraph
										currentValue={90}
										totalValue={200}
										gaugeColor={COLOR.brand.sub.light}
									/>
								</ColumnFlexBox>
								<ColumnFlexBox gap="0.5rem">
									<h4>현재까지 참여횟수</h4>
									<HorizontalGaugeGraph currentValue={90} totalValue={200} />
								</ColumnFlexBox>
							</ColumnFlexBox>
						</GridElement>
					</Grid>
				</Box>
			</S.VerticalScrollContainer>
		</BoardBase>
	)
}

export default SelectSortedItems

const VerticalScrollContainer = styled.div`
	${DIRECTION_COLUMN}
	gap: 1rem;

	width: 100%;
	height: 34vh;
	max-height: 100%;

	overflow-y: scroll;
	overflow-x: hidden;
`
const NameText = styled.h2`
	${FLEX_CENTER}
	width: 100%;
	height: 100%;
	color: ${COLOR.grayScale[1500]};
	text-align: center;
	${TEXT_SHADOW_CSS}
`

const S = {
	NameText,
	VerticalScrollContainer
}
