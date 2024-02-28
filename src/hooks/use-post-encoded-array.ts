import { arrayDecoder, arrayEncoder } from '@/utils'
import { useSearchParams } from 'react-router-dom'

export const usePostEncodedArray = <T>() => {
	const [params, setParams] = useSearchParams()

	const saveArray = (newElement: T, urlParamKey: string) => {
		const encodedArray = params.get(urlParamKey)
		if (!encodedArray) params.set(urlParamKey, arrayEncoder<T>([newElement]))
		else {
			const originArray = arrayDecoder<T>(encodedArray)
			params.set(urlParamKey, arrayEncoder<T>([...originArray, newElement]))
		}
		setParams(params)
	}
	return { saveArray }
}
