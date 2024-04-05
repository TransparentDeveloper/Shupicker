import { URL_PARAM_MEMBER } from '@/constants'
import { useCryptoQuery } from '@/hooks'
import { MemberType } from '@/types'
import * as S from './essential-trait-column.style'
import type * as T from './essential-trait-column.type'

const EssentialTraitColumn = ({ traitLabel, traitId }: T.EssentialTraitColumnProps) => {
	const { getArray } = useCryptoQuery()
	/** 회원 배열 */
	const memberArray = getArray<MemberType>(URL_PARAM_MEMBER)
	return (
		<S.ColumnWrapper>
			<S.TraitLabel>{traitLabel}</S.TraitLabel>
			{memberArray.map((member) => {
				const memberTraitArray = member.essentialTraits
				const targetTrait = memberTraitArray?.find((trait) => trait.id === traitId)
				return <S.Label key={member.id}>{targetTrait?.value}</S.Label>
			})}
		</S.ColumnWrapper>
	)
}

export default EssentialTraitColumn
