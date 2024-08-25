import {parseArray, pushElement, removeElementByIndex} from '@/functions/common'
import {isNull} from '@/functions/type-guard'
import {compressToURL, decompressFromURL} from '@/libs/lz-string/util'
import {useSearchParams} from 'react-router-dom'

export const useManageDataOnUrl = () => {
	const [params, setParams] = useSearchParams()
	const getArr = <T>(paramKey: string): T[] => {
		const compressed = params.get(paramKey)
		if (isNull(compressed)) return []
		const decompressed = decompressFromURL(compressed)
		const result = parseArray<T>(decompressed)
		return result
	}
	const saveArr = <T>(paramKey: string, arr: T[]) => {
		const compressed = compressToURL(arr)
		params.set(paramKey, compressed)
	}
	const addToArr = <T>(paramKey: string, element: T) => {
		const prev = getArr<T>(paramKey)
		const updated = pushElement<T>(prev, element)
		saveArr(paramKey, updated)
	}
	const updateArr = <T>(paramKey: string, newArr: T[]) =>
		saveArr(paramKey, newArr)
	const removeOneFromArr = <T>(paramKey: string, idx: number) => {
		const prevArr = getArr<T>(paramKey)
		const resultArr = removeElementByIndex(prevArr, idx)
		saveArr(paramKey, resultArr)
	}
	const flush = () => setParams(params)
	return {getArr, saveArr, addToArr, updateArr, removeOneFromArr, flush}
}
