import type { Dispatch, SetStateAction } from 'react'
export type RecordInputProps = {
	recordArray: Array<string>
	setRecordArray: Dispatch<SetStateAction<Array<string>>>
}
