import { Box, Grid, GridElement, IconButton, Spacer, TaggingText } from '@/components'
import {
	ALIGN_CENTER,
	BORDER_INSET,
	DIRECTION_COLUMN,
	GIANTS_INLINE,
	JUSTIFY_START
} from '@/libs/styled-components/css-utils'
import { BORDER_RADIUS, COLOR, FONT_SIZE } from '@/libs/styled-components/reference-tokens'
import { BoardBase, BoardHeader } from '@/units/boards'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const MatchingLog = () => {
	return (
		<BoardBase>
			<BoardHeader sectionName="📋 참여기록" />
			<Spacer y={2} />
			<S.VerticalScrollContainer>
				<Box width="100%">
					<Grid columns={8} columnGap="1rem">
						<GridElement column={1} columnSpan={2}>
							<S.IdWrapper>
								<S.IdText>1</S.IdText>
							</S.IdWrapper>
						</GridElement>

						<GridElement column={3} columnSpan={4}>
							<S.TaggingListContainer>
								<TaggingText fontSize={FONT_SIZE.sm}>홍길동</TaggingText>
								<TaggingText fontSize={FONT_SIZE.sm}>이순신</TaggingText>
								<TaggingText fontSize={FONT_SIZE.sm}>권율</TaggingText>
								<TaggingText fontSize={FONT_SIZE.sm}>김철수</TaggingText>
							</S.TaggingListContainer>
						</GridElement>

						<GridElement column={7} columnSpan={2}>
							<S.MemoWrapper>
								<Grid columns={3}>
									<GridElement column={1} columnSpan={2}>
										<S.MemoText>21 : 15</S.MemoText>
									</GridElement>
									<GridElement column={3}>
										<IconButton iconData={faEdit} />
									</GridElement>
								</Grid>
							</S.MemoWrapper>
						</GridElement>
					</Grid>
				</Box>

				<Box width="100%">
					<Grid columns={8} columnGap="1rem">
						<GridElement column={1} columnSpan={2}>
							<S.IdWrapper>
								<S.IdText>2</S.IdText>
							</S.IdWrapper>
						</GridElement>

						<GridElement column={3} columnSpan={4}>
							<S.TaggingListContainer>
								<TaggingText fontSize={FONT_SIZE.sm}>김영희</TaggingText>
								<TaggingText fontSize={FONT_SIZE.sm}>제우스</TaggingText>
								<TaggingText fontSize={FONT_SIZE.sm}>하데스</TaggingText>
								<TaggingText fontSize={FONT_SIZE.sm}>포세이돈</TaggingText>
							</S.TaggingListContainer>
						</GridElement>

						<GridElement column={7} columnSpan={2}>
							<S.MemoWrapper>
								<Grid columns={3}>
									<GridElement column={1} columnSpan={2}>
										<S.MemoText>10 : 21</S.MemoText>
									</GridElement>
									<GridElement column={3}>
										<IconButton iconData={faEdit} />
									</GridElement>
								</Grid>
							</S.MemoWrapper>
						</GridElement>
					</Grid>
				</Box>
			</S.VerticalScrollContainer>
		</BoardBase>
	)
}

export default MatchingLog

const IdWrapper = styled.div`
	width: 100%;
	height: 100%;
	overflow: visible;
	${ALIGN_CENTER}
`
const IdText = styled.h1`
	${GIANTS_INLINE}
	color: ${COLOR.grayScale[1500]};
	opacity: 0.2;
	text-align: start;
	transform: translate(-10%, 20%) scale(230%);
`
const VerticalScrollContainer = styled.div`
	${DIRECTION_COLUMN}
	gap: 1rem;
	width: 100%;
	height: 75vh;
	max-height: 100%;
	overflow-y: scroll;
	overflow-x: hidden;
`
const TaggingListContainer = styled.div`
	${ALIGN_CENTER}
	${JUSTIFY_START}
  flex-wrap: wrap;
	gap: 1rem;
	width: 100%;
	height: 100%;
	border-radius: ${BORDER_RADIUS.md};
	padding: 0.5rem;
`
const MemoWrapper = styled.div`
	${ALIGN_CENTER}
	gap: 0.5rem;
	width: 100%;
	height: 100%;
	border-radius: ${BORDER_RADIUS.md};
`
const MemoText = styled.span`
	width: 100%;
	height: 100%;
	font-size: ${FONT_SIZE.ti};

	background-color: ${COLOR.grayScale[250]};
	border-radius: ${BORDER_RADIUS.md};
	padding: 0.1rem 0.3rem;
	${BORDER_INSET}

	text-align: center;

	text-overflow: ellipsis;
	overflow: hidden;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	line-height: 2.1rem;
`
const S = {
	IdWrapper,
	IdText,
	VerticalScrollContainer,
	TaggingListContainer,
	MemoWrapper,
	MemoText
}
