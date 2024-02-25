import type * as T from './text-spacer.type'
const TextSpacer = ({ interval = 1 }: T.TextSpacerProps) => {
	return (
		<>
			{Array.from({ length: interval }).map((_, idx) => (
				<span key={idx}>&nbsp;</span>
			))}
		</>
	)
}
export default TextSpacer
