import {useSheetStore} from '@/contexts'
import {isNull} from 'lodash'

export const useSheet = () => {
	const sheetStore = useSheetStore()
	if (isNull(sheetStore))
		throw Error('컨텍스트 할당이 정상적으로 이뤄지지 않았습니다.')
	return {...sheetStore}
}
