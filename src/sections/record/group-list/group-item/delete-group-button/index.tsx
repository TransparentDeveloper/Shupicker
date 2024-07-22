import {X} from 'lucide-react'
import type {DeleteGroupButtonPT} from './delete-group-button.type'

export const DeleteGroupButton = ({onClick}: DeleteGroupButtonPT) => (
	<X
		className='aspect-square h-1/2 stroke-gray-500 transition-transform hover:scale-125 hover:stroke-white'
		{...{onClick}}
	/>
)
