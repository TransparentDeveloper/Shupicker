import { IconButton, Spacer } from '@/components'
import * as S from './panel-header.style'
import type * as T from './panel-header.type'

const PanelHeader = ({ sectionName, iconButtonDataArray }: T.BoardHeaderProps) => {
	return (
		<>
			<S.Container>
				<S.PanelNameText>{sectionName}</S.PanelNameText>
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
export default PanelHeader
