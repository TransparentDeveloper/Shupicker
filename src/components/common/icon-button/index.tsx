import { ShupickerIcon } from '@/components'
import { COLOR } from '@/libs/styled-components/reference-tokens'
import * as S from './icon-button.style'
import type * as T from './icon-button.type'

const IconButton = ({
	iconData,
	onClick,
	bgColor = COLOR.grayScale[200],
	iconColor = COLOR.grayScale[1200],
	hoverBgColor = COLOR.brand.main.light,
	hoverIconColor = COLOR.grayScale[1500],
	...rest
}: T.IconButtonProps) => {
	return (
		<S.RoundSquareButton
			$bgColor={bgColor}
			$iconColor={iconColor}
			$hoverBgColor={hoverBgColor}
			$hoverIconColor={hoverIconColor}
			{...{ onClick }}
			{...rest}
		>
			<ShupickerIcon {...{ iconData }} size="sm" />
		</S.RoundSquareButton>
	)
}

export default IconButton
