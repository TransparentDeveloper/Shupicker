import { Box, Grid, GridElement, IconButton, TaggingText } from '@/components'
import { FONT_SIZE } from '@/libs/styled-components/reference-tokens'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import * as S from './groupCard.style'
import type { GroupCardProps } from './groupCard.type.'

export const GroupCard = ({ groupId, memberArray }: GroupCardProps) => {
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
