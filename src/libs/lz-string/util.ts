import {isString} from '@/functions/type-guard'
import {
	compressToEncodedURIComponent,
	decompressFromEncodedURIComponent,
} from 'lz-string'

export const compressToURL = (target: string | object) => {
	if (isString(target)) return compressToEncodedURIComponent(target)
	return compressToEncodedURIComponent(JSON.stringify(target))
}
export const decompressFromURL = (compressed: string): string => {
	const decompressed = decompressFromEncodedURIComponent(compressed)
	return decompressed
}
