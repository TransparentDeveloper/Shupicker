import { FLEX_CENTER } from '@/libs/styled-components/css-utils'
import { BORDER_RADIUS, COLOR, FONT_SIZE } from '@/libs/styled-components/reference-tokens'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export type TaggingTraitProps = {
	onClickCancel: VoidFunction
	children: string
}

const TaggingTrait = ({ onClickCancel, children }: TaggingTraitProps) => {
	return (
		<S.Container>
			<FontAwesomeIcon icon={faClose} onClick={onClickCancel} size="sm" />
			<TraitText>{children}</TraitText>
		</S.Container>
	)
}

export default TaggingTrait

const Container = styled.div`
	${FLEX_CENTER}
	flex-wrap: nowrap;
	gap: 0.5rem;
	width: fit-content;
	height: fit-content;
	padding: 0.5rem;
	background-color: ${COLOR.grayScale[250]};
	border-radius: ${BORDER_RADIUS.lg};
`

const TraitText = styled.p`
	font-size: ${FONT_SIZE.ti};
	color: ${COLOR.grayScale[1000]};
	white-space: nowrap;
`

const S = {
	Container,
	TraitText
}
