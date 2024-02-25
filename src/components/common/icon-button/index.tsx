import { ShupickerIcon } from '@/components'
import { COLOR } from '@/libs/styled-components/reference-tokens'
import * as S from './icon-button.style'
import type * as T from './icon-button.type'

const IconButton = ({
	iconData,
	bgColor = COLOR.grayScale[200],
	iconColor = COLOR.grayScale[1200],
	hoverBgColor = COLOR.brand.main.light,
	hoverIconColor = COLOR.grayScale[1500],
	shape = 'default',
	...rest
}: T.IconButtonProps) => {
	return (
		<S.RoundSquareButton
			$bgColor={bgColor}
			$iconColor={iconColor}
			$hoverBgColor={hoverBgColor}
			$hoverIconColor={hoverIconColor}
			$shape={shape}
			{...rest}
		>
			<ShupickerIcon {...{ iconData }} size="sm" />
		</S.RoundSquareButton>
	)
}

export default IconButton
