import {compress, decompress} from '@/utils'
import {transStrToArr} from '@/utils/parse'
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
	const addToArr = <T>(paramKey: string, element: T) => {
		const prevArr = getArr<T>(paramKey)
		prevArr.push(element)
		const compressed = compress(prevArr)
		params.set(paramKey, compressed)
		setParams(params)
	}
	return {getArr, addToArr}
}
