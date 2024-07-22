import {X} from 'lucide-react'
import type {DeleteMemberButtonPT} from './delete-member-button.type'

export const DeleteMemberButton = ({
	idx,
	onDeleteMember,
}: DeleteMemberButtonPT) => (
	<X
		className='aspect-square h-1/2 stroke-gray-500 transition-transform hover:scale-125 hover:stroke-white'
		onClick={() => {
			onDeleteMember && onDeleteMember(idx)
		}}
	/>
)
