import { IconButton, Spacer } from '@/components'
import * as S from './section-header.style'
import type * as T from './section-header.type'

const SectionHeader = ({ sectionName, iconButtonDataArray }: T.SectionHeaderProps) => {
	return (
		<>
			<S.Container>
				<h3>{sectionName}</h3>
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
export default SectionHeader
