import {Button, Input} from '@/components/common'
import {ScrollArea} from '@/components/ui'
import {MEMBER_KEY} from '@/constants'
import {useManageDataOnUrl, useSheet} from '@/hooks'
import {getFormedTime, getTimeStamp} from '@/utils'
import {zodResolver} from '@hookform/resolvers/zod'
import {isUndefined} from 'lodash'
import type {FieldValues} from 'react-hook-form'
import {useForm} from 'react-hook-form'
import * as z from 'zod'
import {createNewMember} from '../../registration.utils'

const schema = z.object({
	name: z.string().max(8, '이름은 8자 이하여야 합니다.'),
})

export const RegisterForm = () => {
	const {onClose} = useSheet()
	const {addToArr, flush} = useManageDataOnUrl()

	const {register, handleSubmit} = useForm({
		resolver: zodResolver(schema),
	})

	const currentTime = getFormedTime(getTimeStamp())

	const onSubmit = (data: FieldValues) => {
		const name = data.name
		if (isUndefined(name) || !name.length) {
			alert('이름을 입력해주세요.')
			return
		}
		const newMember = createNewMember(name)
		addToArr(MEMBER_KEY, newMember)
		flush()
		onClose()
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='flex h-full flex-col gap-10'
		>
			<ScrollArea className='h-fit max-h-[50%]'>
				<div className='flex h-full flex-col items-center gap-4 pt-4'>
					<div className='grid h-fit w-full grid-cols-[1fr_2fr] items-center justify-center gap-8'>
						<label
							className='w-full text-end text-xl font-medium leading-none'
							htmlFor='name'
						>
							이름
						</label>
						<Input
							placeholder='이름을 입력해주세요.'
							id='name'
							{...register('name')}
						/>
					</div>
					<div className='grid h-fit w-full grid-cols-[1fr_2fr] items-center justify-center gap-8'>
						<label
							className='w-full text-end text-xl font-medium leading-none'
							htmlFor='createAt'
						>
							등록시간
						</label>
						<Input placeholder={currentTime} disabled />
					</div>
					<div className='grid h-fit w-full grid-cols-[1fr_2fr] items-center justify-center gap-8'>
						<label
							className='w-full text-end text-xl font-medium leading-none'
							htmlFor='playCnt'
						>
							참여 횟수
						</label>
						<Input placeholder='0 회' disabled />
					</div>
				</div>
			</ScrollArea>
			<Button className='self-end' type='submit'>
				등록하기
			</Button>
		</form>
	)
}
