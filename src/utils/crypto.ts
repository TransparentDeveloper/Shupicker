import CryptoJS from 'crypto-js'

export const objectEncoder = (object: Object): string => {
	const jsonString = JSON.stringify(object)
	const encryptedString = CryptoJS.AES.encrypt(
		jsonString,
		import.meta.env.VITE_APP_CRYPTO_SALT
	).toString()
	return encryptedString
}
export const objectDecoder = (encryptedString: string): Object => {
	const bytes = CryptoJS.AES.decrypt(encryptedString, import.meta.env.VITE_APP_CRYPTO_SALT)
	const decryptedString = bytes.toString(CryptoJS.enc.Utf8)
	const decryptedObject = JSON.parse(decryptedString)
	return decryptedObject
}
