import { CenterFlexBox, ColumnFlexBox, PaddingContainer } from '@/components'
import * as S from './dialog.style'
import type * as T from './dialog.type'

const Dialog = ({
	size = 'default',
	onClose,
	title,
	isCloseButton = true,
	dialogContent
}: T.DialogProps) => {
	return (
		<S.FullSizeFilter>
			<CenterFlexBox align="bothAlign">
				<S.DialogBase $size={size} onClick={(e) => e.stopPropagation()}>
					{isCloseButton && <S.CloseButton onClick={onClose}>X</S.CloseButton>}
					<PaddingContainer horizontal="2rem" vertical="2rem">
						<ColumnFlexBox gap="1rem">
							<S.DialogTitle>{title}</S.DialogTitle>
							<CenterFlexBox align="bothAlign">{dialogContent}</CenterFlexBox>
						</ColumnFlexBox>
					</PaddingContainer>
				</S.DialogBase>
			</CenterFlexBox>
		</S.FullSizeFilter>
	)
}

export default Dialog
