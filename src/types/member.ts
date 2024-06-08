import type {TTrait} from '.'

export type TMember = {
	id: string
	name: string
	createAt: number // timestamp
	cntPlay: number
	traits: TTrait[]
}
