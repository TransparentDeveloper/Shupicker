import { URL_PARAM_SHUPICKER_DATA } from '@/constants'
import { AdditionalTraitType, PersonnelType, ShupickerDataType } from '@/types'
import { shupickerDecoder, shupickerEncoder } from '@/utils'
import { useSearchParams } from 'react-router-dom'

export const useManageShupickerData = () => {
	const [params, setParams] = useSearchParams()
	const encodedData = params.get(URL_PARAM_SHUPICKER_DATA)

	const getPersonnelArray = (): PersonnelType[] => {
		if (!encodedData) return []
		const decodedData = shupickerDecoder(encodedData)
		return decodedData.personnelArray
	}

	const addPersonnel = (newPersonnel: PersonnelType) => {
		let saveData: ShupickerDataType
		if (!encodedData)
			saveData = {
				additionalTraitArray: [],
				personnelArray: [newPersonnel]
			}
		else {
			const decodedData = shupickerDecoder(encodedData as string)
			saveData = {
				additionalTraitArray: decodedData.additionalTraitArray,
				personnelArray: [...decodedData.personnelArray, newPersonnel]
			}
		}
		params.set(URL_PARAM_SHUPICKER_DATA, shupickerEncoder(saveData))
		setParams(params)
	}
	const updatePersonnelArray = (idx: number, newPersonnel: PersonnelType) => {
		if (!encodedData) return
		const decodedData = shupickerDecoder(encodedData)
		const personnelArray = decodedData.personnelArray
		personnelArray[idx] = newPersonnel
		const newData: ShupickerDataType = {
			additionalTraitArray: decodedData.additionalTraitArray,
			personnelArray: personnelArray
		}
		params.set(URL_PARAM_SHUPICKER_DATA, shupickerEncoder(newData))
		setParams(params)
	}

	const getAdditionalTraitArray = (): AdditionalTraitType[] => {
		if (!encodedData) return []
		const decodedData = shupickerDecoder(encodedData)
		return decodedData.additionalTraitArray
	}

	const addAdditionalTrait = (newAdditionalTrait: AdditionalTraitType) => {
		let saveData: ShupickerDataType
		if (!encodedData)
			saveData = {
				additionalTraitArray: [newAdditionalTrait],
				personnelArray: []
			}
		else {
			const decodedData = shupickerDecoder(encodedData as string)
			saveData = {
				additionalTraitArray: [...decodedData.additionalTraitArray, newAdditionalTrait],
				personnelArray: []
			}
		}
		params.set(URL_PARAM_SHUPICKER_DATA, shupickerEncoder(saveData))
		setParams(params)
	}

	const updateAdditionalArray = (traitId: number, userId: number, traitValue: string) => {
		if (!encodedData || !traitId || !userId || !traitValue) {
			console.log('없어')
			return
		}

		const decodedData = shupickerDecoder(encodedData as string)
		const additionalTraitArray = decodedData.additionalTraitArray
		const traitIdx = additionalTraitArray.findIndex((traitOne) => traitOne.id === traitId)
		if (traitIdx === -1) {
			console.log('특성 못찾음')
			return
		}

		const traitValueArray = additionalTraitArray[traitIdx].values
		traitValueArray.push({ userId, value: traitValue })

		additionalTraitArray[traitIdx] = {
			...additionalTraitArray[traitIdx],
			values: traitValueArray
		}

		const saveData = {
			additionalTraitArray: [...additionalTraitArray],
			personnelArray: [...decodedData.personnelArray]
		}

		params.set(URL_PARAM_SHUPICKER_DATA, shupickerEncoder(saveData))
		setParams(params)
	}

	return {
		getPersonnelArray,
		addPersonnel,
		updatePersonnelArray,
		getAdditionalTraitArray,
		addAdditionalTrait,
		updateAdditionalArray
	}
}
