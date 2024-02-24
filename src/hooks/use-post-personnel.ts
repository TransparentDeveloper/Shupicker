import { URL_PARAM_PERSONNEL } from '@/constants'
import { PersonnelType } from '@/types'
import { arrayDecoder, arrayEncoder } from '@/utils'
import { useSearchParams } from 'react-router-dom'

export const usePostPersonnel = () => {
	const [params, setParams] = useSearchParams()

	const savePersonnel = (newPersonnel: PersonnelType) => {
		const encodedPersonnel = params.get(URL_PARAM_PERSONNEL)
		if (!encodedPersonnel) {
			params.set(URL_PARAM_PERSONNEL, arrayEncoder<PersonnelType>([newPersonnel]))
		} else {
			const originPersonnelArray = arrayDecoder<PersonnelType>(encodedPersonnel)
			params.set(
				URL_PARAM_PERSONNEL,
				arrayEncoder<PersonnelType>([...originPersonnelArray, newPersonnel])
			)
		}
		setParams(params)
	}
	return { savePersonnel }
}
