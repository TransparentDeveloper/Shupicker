import { IconButton } from '@/components'
import * as S from './panel-header.style'
import type * as T from './panel-header.type'

const PanelHeader = ({ sectionName, iconButtonDataArray }: T.PanelHeaderProps) => {
	return (
		<S.Container>
			<S.PanelNameText>{sectionName}</S.PanelNameText>
			<S.ButtonGroup>
				{iconButtonDataArray?.map((iconButtonData, index) => (
					<IconButton key={index} {...iconButtonData} />
				))}
			</S.ButtonGroup>
		</S.Container>
	)
}
export default PanelHeader
