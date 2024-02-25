import { IconButton, Spacer } from '@/components'
import * as S from './board-header.style'
import type * as T from './board-header.type'

const BoardHeader = ({ sectionName, iconButtonDataArray }: T.BoardHeaderProps) => {
	return (
		<>
			<S.Container>
				<S.BoardNameText>{sectionName}</S.BoardNameText>
				<S.ButtonGroup>
					{iconButtonDataArray?.map((iconButtonData, index) => (
						<IconButton key={index} {...iconButtonData} />
					))}
				</S.ButtonGroup>
			</S.Container>
			<Spacer y={1.5} />
		</>
	)
}
export default BoardHeader
