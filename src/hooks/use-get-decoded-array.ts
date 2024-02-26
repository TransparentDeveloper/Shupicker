import { arrayDecoder } from '@/utils'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export const useGetDecodedArray = <T>(urlParamKey: string) => {
	const [params] = useSearchParams()
	const [decodedArray, setDecodedArray] = useState<T[]>([])

	useEffect(() => {
		const encodedArray = params.get(urlParamKey)
		if (!encodedArray) return
		setDecodedArray(arrayDecoder<T>(encodedArray))
	}, [params, setDecodedArray])
	return { decodedArray }
}
