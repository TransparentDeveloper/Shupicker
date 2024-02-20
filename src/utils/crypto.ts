import CryptoJS from 'crypto-js'

export const arrayEncoder = <T>(array: T[]): string => {
	const jsonString = JSON.stringify(array)
	const encryptedString = CryptoJS.AES.encrypt(
		jsonString,
		import.meta.env.VITE_APP_CRYPTO_SALT
	).toString()
	return encryptedString
}
export const arrayDecoder = <T>(encryptedString: string): T[] => {
	const bytes = CryptoJS.AES.decrypt(encryptedString, import.meta.env.VITE_APP_CRYPTO_SALT)
	const decryptedString = bytes.toString(CryptoJS.enc.Utf8)
	const decryptedArray = JSON.parse(decryptedString)
	return decryptedArray
}
