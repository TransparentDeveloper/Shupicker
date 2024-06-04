import {isString} from 'lodash'
import {
	compressToEncodedURIComponent,
	decompressFromEncodedURIComponent,
} from 'lz-string'
export const compress = (target: string | object) => {
	if (isString(target)) return compressToEncodedURIComponent(target)
	else return compressToEncodedURIComponent(JSON.stringify(target))
}
export const decompress = (compressed: string): string => {
	const decompressed = decompressFromEncodedURIComponent(compressed)
	return decompressed
}
