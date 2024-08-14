import {Button} from '@/components/common'
import type {ButtonHTMLAttributes} from 'react'

type AddGroupButtonPT = ButtonHTMLAttributes<HTMLButtonElement>

export const AddGroupButton = ({onClick}: AddGroupButtonPT) => {
	return (
		<Button className='w-full' {...{onClick}}>
			그룹 추가
		</Button>
	)
}
