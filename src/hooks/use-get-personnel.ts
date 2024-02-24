import { URL_PARAM_PERSONNEL } from '@/constants'
import type { PersonnelType } from '@/types'
import { arrayDecoder } from '@/utils'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export const useGetPersonnel = () => {
	const [params] = useSearchParams()
	const [personnelArray, setPersonnelArray] = useState<PersonnelType[]>([])

	useEffect(() => {
		const encodedPersonnel = params.get(URL_PARAM_PERSONNEL)
		if (!encodedPersonnel) return

		setPersonnelArray(arrayDecoder<PersonnelType>(encodedPersonnel))
	}, [params, setPersonnelArray])

	return { personnelArray }
}
