import { URL_PARAM_ADDITIONAL_TRAIT } from '@/constants'
import { useCryptoQuery } from '@/hooks'
import type { TraitType } from '@/types'
import { AdditionalTraitColumn } from '../'
import * as S from './additional-trait-table.style'

const AdditionalTraitTable = () => {
	const { getArray } = useCryptoQuery()
	/** 추가 특성 배열 */
	const additionalTraitArray = getArray<TraitType>(URL_PARAM_ADDITIONAL_TRAIT)

	return (
		<S.TableWrapper>
			<S.XScrollBase>
				{additionalTraitArray.map((additionalTrait) => {
					const traitLabel = additionalTrait?.label
					const traitId = additionalTrait?.id
					return <AdditionalTraitColumn key={traitId} traitLabel={traitLabel} traitId={traitId} />
				})}
			</S.XScrollBase>
		</S.TableWrapper>
	)
}

export default AdditionalTraitTable
