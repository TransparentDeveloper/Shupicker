export const isString = (input: unknown): input is string =>
	typeof input === 'string'

export const isUndefined = (input: unknown): input is undefined =>
	typeof input === 'undefined'

export const isNull = (input: unknown): input is null => input === null

export const isArray = (input: unknown): input is unknown[] =>
	Array.isArray(input)
