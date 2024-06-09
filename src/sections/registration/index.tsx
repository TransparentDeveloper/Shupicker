import {MEMBER_KEY} from '@/constants/param-key'
import {useManageDataOnUrl} from '@/hooks'
import type {TMember} from '@/types'
import {type ChangeEvent} from 'react'
import {
	addTraitEachMember,
	createNewMember,
	createNewTrait,
} from './registration.utils'

export const RegisterSection = () => {
	const {getArr, addToArr, saveArr, flush} = useManageDataOnUrl()

	const onAddNewMember = (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault()
		const memberName = (e.target.elements.item(0) as HTMLInputElement).value
		const newMember = createNewMember(memberName)
		addToArr(MEMBER_KEY, newMember)
		flush()
	}

	const onAddNewTrait = (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault()
		const traitLabel = (e.target.elements.item(0) as HTMLInputElement).value
		const traitOption =
			(e.target.elements.item(1) as HTMLInputElement).value ?? '😅 None'
		const newTrait = createNewTrait(traitLabel, ['미지정', traitOption])
		const memberArr = getArr<TMember>(MEMBER_KEY)
		const updatedMemberArr = addTraitEachMember(memberArr, newTrait)
		saveArr(MEMBER_KEY, updatedMemberArr)
		flush()
	}

	return (
		<div className='bg-blue-400 w-[800px] h-96 flex justify-center items-center flex-col'>
			Register
			<div className='border-black border-2 w-full h-1/5 flex flex-col justify-center items-center'>
				<form onSubmit={onAddNewMember}>
					<input placeholder='멤버 이름' />
					<button>멤버 추가</button>
				</form>
			</div>
			<div className='border-black border-2 w-full h-1/5 flex flex-col justify-center items-center'>
				<form onSubmit={onAddNewTrait}>
					<input placeholder='속성 이름' />
					<input placeholder='옵션 이름' />
					<button>속성 추가</button>
				</form>
			</div>
			<button>버튼</button>
		</div>
	)
}
