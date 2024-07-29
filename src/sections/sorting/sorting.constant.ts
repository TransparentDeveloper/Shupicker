import type {TTableHeadMapper} from './sorting.type'

export const TABLE_COLS = 4
export const TABLE_HEAD_MAPPER: TTableHeadMapper = {
	labels: ['이름', '등록 이후', '총 참여횟수', `5분 당\n평균참여횟수`],
	values: ['name', 'createAt', 'cntPlay', 'cntPerTime'],
} as const

export const DEFAULT_TIME_CHUNK = 1000 * 60 * 5 // 5분
