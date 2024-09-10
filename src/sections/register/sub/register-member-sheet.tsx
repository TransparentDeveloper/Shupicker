import {Button, Input} from '@/components/common'
import {MEMBER_KEY} from '@/constants'
import {isLess, isMore} from '@/functions/common'
import {createMember} from '@/functions/member'
import {formatHHMM, getCurStamp} from '@/functions/time'
import {useManageDataOnUrl, useSheet} from '@/hooks'
import {generateID} from '@/libs/uuid/util'
import {isUndefined} from 'lodash'
import type {ComponentProps, FormEvent} from 'react'
import {forwardRef, useRef} from 'react'

const MIN_NAME_SIZE = 1
const MAX_NAME_SIZE = 8

export const RegisterMemberSheet = () => {
	const nameRef = useRef<HTMLInputElement>(null)
	const {onClose} = useSheet()
	const {addToArr, flush} = useManageDataOnUrl()

	const createAt = getCurStamp()
	const hhmm = formatHHMM(createAt)

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		e.stopPropagation()

		const name = nameRef.current?.value

		if (isUndefined(name) || isLess(name.length, MIN_NAME_SIZE)) {
			alert('이름을 입력하지 않았습니다.')
			return
		}
		if (isMore(name.length, MAX_NAME_SIZE)) {
			alert('최대 8자까지 입력할 수 있습니다.')
			return
		}

		const newMember = createMember({
			id: generateID(),
			name,
			createAt,
			cntPlay: 0,
			traits: [],
		})
		onClose()
		addToArr(MEMBER_KEY, newMember)
		flush()
	}

	return (
		<form className='flex h-full flex-col gap-10' {...{onSubmit}}>
			<section className='flex flex-col gap-4 overflow-y-auto overflow-x-hidden pt-4 scrollbar-hide'>
				<FormInput
					label='이름'
					placeholder={`최소 ${MIN_NAME_SIZE} 자 ~ 최대 ${MAX_NAME_SIZE} 자`}
					id='name'
					ref={nameRef}
				/>
				<FormInput label='등록시간' placeholder={hhmm} id='createAt' disabled />
				<FormInput label='참여 횟수' placeholder='0 회' id='play' disabled />
			</section>
			<Button className='self-end' type='submit'>
				확인
			</Button>
		</form>
	)
}

type FormInputPT = ComponentProps<typeof Input> & {
	label: string
}
const FormInput = forwardRef<HTMLInputElement, FormInputPT>(
	({label, ...props}, ref) => {
		return (
			<div className='grid h-fit w-full grid-cols-[1fr_2fr] items-center justify-center gap-8'>
				<label
					className='w-full text-end text-xl font-medium leading-none'
					htmlFor='form label'
				>
					{label}
				</label>
				<Input placeholder='이름을 입력해주세요.' ref={ref} {...props} />
			</div>
		)
	},
)
FormInput.displayName = 'FormInput'
