import { ColumnFlexBox, IconButton } from '@/components'
import * as S from './section-header.style'
import type * as T from './section-header.type'

const SectionHeader = ({ sectionName, children, iconButtonDataArray }: T.SectionHeaderProps) => {
	return (
		<ColumnFlexBox gap="1.2rem">
			<S.Container>
				<h3>{sectionName}</h3>
				<S.ButtonGroup>
					{iconButtonDataArray?.map((iconButtonData, index) => (
						<IconButton key={index} {...iconButtonData} />
					))}
				</S.ButtonGroup>
			</S.Container>
			{children}
		</ColumnFlexBox>
	)
}
export default SectionHeader
