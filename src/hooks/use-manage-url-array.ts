import { arrayDecoder, arrayEncoder } from '@/utils'
import { useSearchParams } from 'react-router-dom'

export const useManageUrlArray = <T>(urlParamKey: string) => {
	const [params, setParams] = useSearchParams()

	const getArray = (): T[] => {
		const encodedArray = params.get(urlParamKey)
		if (!encodedArray) return []
		return arrayDecoder<T>(encodedArray)
	}
	const addElementOne = (newElement: T) => {
		const encodedArray = params.get(urlParamKey)
		if (!encodedArray) {
			params.set(urlParamKey, arrayEncoder<T>([newElement]))
		} else {
			const originArray = arrayDecoder<T>(encodedArray)
			params.set(urlParamKey, arrayEncoder<T>([...originArray, newElement]))
		}
		setParams(params)
	}
	const updateArray = (idx: number, newElement: T) => {
		const encodedArray = params.get(urlParamKey)
		if (!encodedArray) {
			return
		}
		const decodedArray = arrayDecoder<T>(encodedArray)
		decodedArray[idx] = newElement
		params.set(urlParamKey, arrayEncoder<T>(decodedArray))
		setParams(params)
	}
	return { addElementOne, getArray, updateArray }
}
