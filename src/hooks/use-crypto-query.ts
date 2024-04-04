import { decoder, encoder } from '@/utils'
import { useSearchParams } from 'react-router-dom'

export const useCryptoQuery = () => {
	const [params, setParams] = useSearchParams()

	const getPrimitive = (paramKey: string, notFound: number | string): number | string => {
		if (!params.has(paramKey)) return notFound
		const found = params.get(paramKey)
		const decoded = decoder<number | string>(found as string)
		return decoded as number | string
	}

	const getArray = <T>(paramKey: string): Array<T> => {
		if (!params.has(paramKey)) return []
		const found = params.get(paramKey)
		const decoded = decoder<T>(found as string)
		return decoded as Array<T>
	}

	const setMultiQueryData = (
		paramKeyArray: Array<string>,
		paramValueArray: Array<Array<Object> | string | number>
	) => {
		const keyLength = paramKeyArray.length
		const valueLength = paramValueArray.length
		if (keyLength !== valueLength) throw new Error('Key and value pair count mismatch.')
		for (let i = 0; i < keyLength; i++) {
			params.set(paramKeyArray[i], encoder(paramValueArray[i]))
		}
		setParams(params)
	}

	const removeQueryData = (paramKey: string) => {
		if (params.has(paramKey)) params.delete(paramKey)
	}

	return { getPrimitive, getArray, setMultiQueryData, removeQueryData }
}
