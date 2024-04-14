import { TraitType } from '@/types'

/** 필수 특성 갯수 */
export const TOTAL_NUM_ESSENTIAL_TRAIT = 3

/** 필수 특성 중 '이름' 의 id */
export const ESSENTIAL_TRAIT_NAME_ID = 0
/** 필수 특성 중 '총 참여횟수' 의 id */
export const ESSENTIAL_TRAIT_PARTICIPATION_CNT_ID = 1
/** 필수 특성 중 '참여시각' 의 id */
export const ESSENTIAL_TRAIT_CREATION_TIME_ID = 2

/** 필수 특성 중 '이름' 의 label */
export const ESSENTIAL_TRAIT_NAME_LABEL = '이름'
/** 필수 특성 중 '총 참여횟수' 의 label */
export const ESSENTIAL_TRAIT_PARTICIPATION_CNT_LABEL = '총 참여횟수'
/** 필수 특성 중 '참여시각' 의 label */
export const ESSENTIAL_TRAIT_CREATION_TIME_LABEL = '참여시각'

export const ESSENTIAL_TRAIT_NAME_INIT: TraitType = {
	id: ESSENTIAL_TRAIT_NAME_ID,
	label: ESSENTIAL_TRAIT_NAME_LABEL,
	hasOption: false,
	options: [],
	value: '',
	valueIdx: -1
} as const
export const ESSENTIAL_TRAIT_PARTICIPATION_CNT_INIT: TraitType = {
	id: ESSENTIAL_TRAIT_PARTICIPATION_CNT_ID,
	label: ESSENTIAL_TRAIT_PARTICIPATION_CNT_LABEL,
	hasOption: false,
	options: [],
	value: '',
	valueIdx: -1
} as const
export const ESSENTIAL_TRAIT_CREATION_TIME_INIT: TraitType = {
	id: ESSENTIAL_TRAIT_CREATION_TIME_ID,
	label: ESSENTIAL_TRAIT_CREATION_TIME_LABEL,
	hasOption: false,
	options: [],
	value: '',
	valueIdx: -1
} as const
