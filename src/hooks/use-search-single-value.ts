import { useSearchParams } from 'react-router-dom'

type SingleValueType = string | number

/** url 로 관리할 단일 값 관리 훅함수 */
export const useSearchSingleValue = (paramKey: string) => {
	const [params, setParams] = useSearchParams()

	/**
	 * @param notFound : 값이 없을 경우 반환값
	 */
	const getValue = (notFound: SingleValueType): SingleValueType => {
		const value = params.get(paramKey)
		if (!value) {
			return notFound
		}
		if (typeof notFound === 'number') return parseInt(value)
		return value
	}

	const setValue = (value: SingleValueType) => {
		if (typeof value === 'number') value = value.toString()
		params.set(paramKey, value)
		setParams(params)
	}
	return { getValue, setValue }
}
