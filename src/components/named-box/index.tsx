import { COLOR } from '@src/libs/styled-components/reference-tokens'
import { CenterFlexBox, ColumnFlexBox, CompressionContainer } from '..'
import * as S from './namedBox.style'
import type * as T from './namedBox.type'

const NamedBox = ({
	boxName,
	backgroundColor = COLOR.grayScale[300],
	borderColor = COLOR.brand.light,
	children,
	...rest
}: T.NamedBoxProps) => {
	return (
		<S.BoxContainer {...rest}>
			<CenterFlexBox align="verticalAlign">
				<ColumnFlexBox gap="0.5rem">
					<S.BoxName>{boxName}</S.BoxName>
					<S.BoxBody $backgroundColor={backgroundColor} $borderColor={borderColor}>
						<CompressionContainer horizontal="1rem" vertical="1rem">
							{children}
						</CompressionContainer>
					</S.BoxBody>
				</ColumnFlexBox>
			</CenterFlexBox>
		</S.BoxContainer>
	)
}

export default NamedBox
