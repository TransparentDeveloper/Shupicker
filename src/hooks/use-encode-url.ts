import { PersonnelInfoType } from '@src/types'
import { arrayDecoder, arrayEncoder } from '@src/utils'
import { useSearchParams } from 'react-router-dom'

export const useEncodeUrl = () => {
	const [params, setParams] = useSearchParams()

	const saveWithUrl = (personnelInfo: PersonnelInfoType) => {
		const encodedInfo = params.get('encodedInfo')
		if (!encodedInfo) {
			params.set('encodedInfo', arrayEncoder<PersonnelInfoType>([personnelInfo]))
		} else {
			const currentArrayInUrl = arrayDecoder<PersonnelInfoType>(encodedInfo)
			params.set(
				'encodedInfo',
				arrayEncoder<PersonnelInfoType>([...currentArrayInUrl, personnelInfo])
			)
		}
		setParams(params)
	}

	return { saveWithUrl }
}
