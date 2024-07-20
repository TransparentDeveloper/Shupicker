import {SectionBase, SectionHeader} from '@/components/common/section-base'
import {MEMBER_KEY} from '@/constants'
import {useManageDataOnUrl, useSheet} from '@/hooks'
import type {TMember} from '@/types'
import {getFormedTime} from '@/utils'
import {PlusSquareIcon} from 'lucide-react'
import type {ButtonHTMLAttributes} from 'react'
import {RegisterForm} from './components/registeration-form'

export const RegisterSection = () => {
	const {onOpen} = useSheet()
	const {getArr} = useManageDataOnUrl()

	const memberArr: TMember[] = getArr(MEMBER_KEY)
	return (
		<SectionBase className='grid grid-rows-[50px_1fr_48px] gap-[1px]'>
			<SectionHeader
				title='회원 등록'
				description='회원 및 속성을 등록하세요.'
			/>
			<table className='flex h-full flex-col overflow-hidden' width='100%'>
				<thead className='flex h-fit w-full flex-col items-start'>
					<tr className='grid h-[70px] w-full grid-cols-[1fr_1fr_1fr_1fr] items-center justify-center rounded-none border-b-[2px] p-2 text-center'>
						<th>이름</th>
						<th>등록시간</th>
						<th></th>
						<th className='text-end'>게임 횟수</th>
					</tr>
				</thead>

				<tbody className='h-full w-full overflow-y-scroll scrollbar-hide'>
					{memberArr.map((member) => (
						<tr
							key={member.id}
							className='grid h-[55px] w-full grid-cols-[1fr_1fr_1fr_1fr] items-center justify-center rounded-none border-b-[1px] border-white/50 p-2 text-center'
						>
							<td>{member.name}</td>
							<td> {getFormedTime(member.createAt)}</td>
							<td></td>
							<td className='text-end'>{member.cntPlay}</td>
						</tr>
					))}
				</tbody>
			</table>
			<AddMemberButton
				onClick={() =>
					onOpen({
						title: '새 회원 정보 입력',
						description: '아래 폼을 입력하고, 새로운 회원을 등록해주세요.',
						isOpen: true,
						children: <RegisterForm />,
					})
				}
			/>
		</SectionBase>
	)
}

type AddMemberButtonPT = ButtonHTMLAttributes<HTMLButtonElement>

const AddMemberButton = (props: AddMemberButtonPT) => {
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
