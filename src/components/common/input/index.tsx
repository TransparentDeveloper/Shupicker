import { COLOR, FONT_SIZE } from '@/libs/styled-components/reference-tokens'
import { forwardRef } from 'react'
import * as S from './input.style'
import type * as T from './input.type'

const Input = forwardRef<HTMLInputElement, T.InputProps>(
	({ width = '18rem', fontSize = FONT_SIZE.md, bgColor = COLOR.grayScale[200], ...rest }, ref) => {
		return (
			<S.InputBase
				ref={ref}
				autoComplete="off"
				$width={width}
				$fontSize={fontSize}
				$bgColor={bgColor}
				{...rest}
			/>
		)
	}
)

export default Input
