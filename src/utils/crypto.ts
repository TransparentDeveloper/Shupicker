import { ShupickerDataType } from '@/types'
import CryptoJS from 'crypto-js'

export const arrayEncoder = <T>(originArray: T[]): string => {
	const jsonString = JSON.stringify(originArray)
	const encryptedString = CryptoJS.AES.encrypt(
		jsonString,
		import.meta.env.VITE_APP_CRYPTO_SALT
	).toString()
	return encryptedString
}
export const arrayDecoder = <T>(encryptedString: string): T[] => {
	const bytes = CryptoJS.AES.decrypt(encryptedString, import.meta.env.VITE_APP_CRYPTO_SALT)
	const decryptedString = bytes.toString(CryptoJS.enc.Utf8)
	const originArray = JSON.parse(decryptedString)
	return originArray
}

export const shupickerEncoder = (originData: ShupickerDataType): string => {
	const jsonString = JSON.stringify(originData)
	const encryptedString = CryptoJS.AES.encrypt(
		jsonString,
		import.meta.env.VITE_APP_CRYPTO_SALT
	).toString()
	return encryptedString
}

export const shupickerDecoder = (encryptedString: string): ShupickerDataType => {
	const bytes = CryptoJS.AES.decrypt(encryptedString, import.meta.env.VITE_APP_CRYPTO_SALT)
	const decryptedString = bytes.toString(CryptoJS.enc.Utf8)
	const originData = JSON.parse(decryptedString)
	return originData
}
