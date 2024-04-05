export const encoder = (origin: Array<Object> | string | number): string =>
	btoa(encodeURIComponent(JSON.stringify(origin)))
export const decoder = <T>(encodedString: string): Array<T> | T =>
	JSON.parse(decodeURIComponent(atob(encodedString)))
