import { useCryptoQuery, useDialog } from '@/hooks'
import type { OptionalSizeProps, TraitType } from '@/types'
// import { AddingMember, AddingTrait } from '@/units'
import { PanelBase, PanelHeader } from '@/components'
import PanelMain from '@/components/panel/panel-main'
import {
	ESSENTIAL_TRAIT_CREATION_TIME_ID,
	ESSENTIAL_TRAIT_CREATION_TIME_LABEL,
	ESSENTIAL_TRAIT_NAME_ID,
	ESSENTIAL_TRAIT_NAME_LABEL,
	ESSENTIAL_TRAIT_PARTICIPATION_NUM_ID,
	ESSENTIAL_TRAIT_PARTICIPATION_NUM_LABEL,
	URL_PARAM_ADDITIONAL_TRAIT
} from '@/constants'
import { AddingMember, AddingTrait } from '@/units/overlays'
import { faEdit, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { AdditionalTraitTable, EssentialTraitColumn } from './components'
import NoticeAdditionalTraitNotice from './components/no-additional-trait-notice'
import * as S from './member-table.style'

const MemberTable = ({ width = '100%', height = '100%' }: OptionalSizeProps) => {
	const { onOverlayWindow } = useDialog()
	const { getArray } = useCryptoQuery()

	/** 추가 특성 배열 */
	const additionalTraitArray = getArray<TraitType>(URL_PARAM_ADDITIONAL_TRAIT)
	/** 추가 특성이 있는지 여부 */
	const isAdditionalTrait = !!additionalTraitArray.length

	const onOpenAddingTrait = () => {
		onOverlayWindow({
			title: '특성 추가',
			dialogContent: <AddingTrait />
		})
	}
	const onOpenAddingMember = () => {
		onOverlayWindow({
			title: '인원 추가',
			dialogContent: <AddingMember />
		})
	}

	return (
		<PanelBase {...{ width, height }}>
			<PanelHeader
				sectionName="📌 인명부"
				iconButtonDataArray={[
					{
						iconData: faEdit,
						onClick: onOpenAddingTrait
					},
					{
						iconData: faUserPlus,
						onClick: onOpenAddingMember
					}
				]}
			/>
			<PanelMain>
				<S.GridTable>
					<EssentialTraitColumn
						traitLabel={ESSENTIAL_TRAIT_NAME_LABEL}
						traitId={ESSENTIAL_TRAIT_NAME_ID}
					/>
					<EssentialTraitColumn
						traitLabel={ESSENTIAL_TRAIT_PARTICIPATION_NUM_LABEL}
						traitId={ESSENTIAL_TRAIT_PARTICIPATION_NUM_ID}
					/>

					{isAdditionalTrait ? <AdditionalTraitTable /> : <NoticeAdditionalTraitNotice />}

					<EssentialTraitColumn
						traitLabel={ESSENTIAL_TRAIT_CREATION_TIME_LABEL}
						traitId={ESSENTIAL_TRAIT_CREATION_TIME_ID}
					/>
				</S.GridTable>
			</PanelMain>
		</PanelBase>
	)
}
export default MemberTable
