import {compress, decompress, transStrToArr} from '@/utils'
import {isNull} from 'lodash'
import {useSearchParams} from 'react-router-dom'

export const useManageDataOnUrl = () => {
	const [params, setParams] = useSearchParams()
	const getArr = <T>(paramKey: string): T[] => {
		const compressed = params.get(paramKey)
		if (isNull(compressed)) return []
		const decompressed = decompress(compressed)
		const result = transStrToArr<T>(decompressed)
		return result
	}
	const saveArr = <T>(paramKey: string, arr: T[]) => {
		const compressed = compress(arr)
		params.set(paramKey, compressed)
	}
	const addToArr = <T>(paramKey: string, element: T) => {
		const prevArr = getArr<T>(paramKey)
		prevArr.push(element)
		saveArr(paramKey, prevArr)
	}
	const flush = () => setParams(params)
	return {getArr, saveArr, addToArr, flush}
}
