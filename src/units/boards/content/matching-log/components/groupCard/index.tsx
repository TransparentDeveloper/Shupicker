import { Box, Grid, GridElement, IconButton, TaggingText } from '@/components'
import {
	ALIGN_CENTER,
	BORDER_INSET,
	DIRECTION_COLUMN,
	GIANTS_INLINE,
	JUSTIFY_START
} from '@/libs/styled-components/css-utils'
import { BORDER_RADIUS, COLOR, FONT_SIZE } from '@/libs/styled-components/reference-tokens'
import type { PersonnelType } from '@/types'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

type GroupCard = {
	groupId: number
	memberArray: Array<PersonnelType>
}

export const GroupCard = ({ groupId, memberArray }: GroupCard) => {
	return (
		<Box width="100%">
			<Grid columns={8} columnGap="1rem">
				<GridElement column={1} columnSpan={2}>
					<S.IdWrapper>
						<S.IdText>{groupId}</S.IdText>
					</S.IdWrapper>
				</GridElement>
				<GridElement column={3} columnSpan={4}>
					<S.TaggingListContainer>
						{memberArray?.map((member) => {
							return (
								<TaggingText key={member.id} fontSize={FONT_SIZE.sm}>
									{member.name}
								</TaggingText>
							)
						})}
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
	)
}

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
	transform: translate(30%, 3%) scale(170%);
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
	TaggingListContainer,
	MemoWrapper,
	MemoText
}
