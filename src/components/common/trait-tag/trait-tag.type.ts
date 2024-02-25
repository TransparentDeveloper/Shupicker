import { BgIntensityCSS } from './trait-tag.style'

export type TraitTagProps = {
	fontSize?: string
	bgIntensity?: keyof typeof BgIntensityCSS
	children: string
}
export type $WrapperProps = {
	$fontSize: string
	$bgIntensity: keyof typeof BgIntensityCSS
}
