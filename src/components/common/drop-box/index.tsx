import { GIANTS_REGULAR } from '@/libs/styled-components/css-utils'
import { BORDER_RADIUS, COLOR, FONT_SIZE } from '@/libs/styled-components/reference-tokens'
import { SelectHTMLAttributes } from 'react'
import styled from 'styled-components'

export type DropBoxProps = SelectHTMLAttributes<HTMLSelectElement> & {
	options?: Array<string>
	width?: string
	bgColor?: string
	fontSize?: string
}
export type $SelectProps = {
	$width: string
	$bgColor: string
	$fontSize: string
}

const DropBox = ({
	options = ['미지정'],
	width = '18rem',
	fontSize = FONT_SIZE.sm,
	bgColor = COLOR.grayScale[200],
	...rest
}: DropBoxProps) => {
	return (
		<SelectBase $width={width} $fontSize={fontSize} $bgColor={bgColor} {...rest}>
			{options.map((option, optionIdx) => (
				<option key={optionIdx} value={option}>
					{option}
				</option>
			))}
		</SelectBase>
	)
}

export default DropBox

const SelectBase = styled.select<$SelectProps>`
	width: ${({ $width }) => $width};
	min-width: 6rem;
	max-width: 100%;
	height: 4rem;
	background-color: ${({ $bgColor }) => $bgColor};
	color: ${COLOR.grayScale[1500]};
	padding: 0.8rem;
	border: none;
	border-radius: ${BORDER_RADIUS.ti};

	${GIANTS_REGULAR}
	font-size: ${({ $fontSize }) => $fontSize};

	text-align: center;
`
