import { URL_PARAM_MEMBER } from '@/constants'
import { useCryptoQuery } from '@/hooks'
import type { MemberType } from '@/types'
import * as S from './additional-trait-column.style'
import type * as T from './additional-trait-column.type'

const AdditionalTraitColumn = ({ traitLabel, traitId }: T.AdditionalTraitColumnProps) => {
	const { getArray } = useCryptoQuery()
	/** 회원 배열 */
	const memberArray = getArray<MemberType>(URL_PARAM_MEMBER)
	return (
		<S.ColumnWrapper>
			<S.AdditionalTraitLabel>{traitLabel}</S.AdditionalTraitLabel>
			{memberArray.map((member) => {
				const memberTraitArray = member.additionalTraits
				const targetTrait = memberTraitArray.find((trait) => trait.id === traitId)
				return <S.Label key={member.id}>{targetTrait?.value}</S.Label>
			})}
		</S.ColumnWrapper>
	)
}

export default AdditionalTraitColumn
