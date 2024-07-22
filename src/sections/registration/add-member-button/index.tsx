import {PlusSquareIcon} from 'lucide-react'
import type {AddMemberButtonPT} from './add-member-button.type'

export const AddMemberButton = (props: AddMemberButtonPT) => {
	return (
		<div className='flex h-[48px] w-full cursor-pointer items-end justify-center'>
			<button
				className='flex h-[40px] w-fit min-w-[50%] border-spacing-28 items-center justify-center gap-2 rounded-lg border-[3px] border-dotted border-[#777777] text-[#777777] transition-colors duration-200 hover:bg-white'
				{...props}
			>
				<PlusSquareIcon color='#777777' className='bg-transparent' />
				추가하기
			</button>
		</div>
	)
}
