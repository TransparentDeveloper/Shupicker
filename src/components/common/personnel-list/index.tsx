import { CenterFlexBox, ColumnFlexBox, PaddingContainer } from '@/components'
import { useDecodeUrl } from '@/hooks'
import { COLOR } from '@/libs/styled-components/reference-tokens'
import styled from 'styled-components'

const PersonnelList = () => {
	const { personnelArray } = useDecodeUrl()

	return (
		<PaddingContainer horizontal="2rem">
			<CenterFlexBox>
				<ColumnFlexBox>
					여기는 PersonnelList
					<S.AddButton>+</S.AddButton>
				</ColumnFlexBox>
			</CenterFlexBox>
		</PaddingContainer>
	)
}

export default PersonnelList

const AddButton = styled.button`
	width: 100%;
	height: 3rem;

	border-radius: 0.3rem;

	background-color: ${COLOR.grayScale[500]};
	color: ${COLOR.grayScale[1200]};

	transition: background-color 120ms;
	cursor: pointer;
	&:hover {
		background-color: ${COLOR.grayScale[1400]};
		color: ${COLOR.grayScale[200]};
	}
`
const S = {
	AddButton
}
