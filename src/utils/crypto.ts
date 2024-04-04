export const arrayEncoder = <T>(originArray: T[]): string =>
	btoa(encodeURIComponent(JSON.stringify(originArray)))

export const arrayDecoder = <T>(encodedString: string): T[] =>
	JSON.parse(decodeURIComponent(atob(encodedString)))
