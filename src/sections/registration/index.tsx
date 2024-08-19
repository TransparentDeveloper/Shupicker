import {SectionBase, SectionHeader} from '@/components/common/section-base'
import {MEMBER_KEY} from '@/constants'
import {formatHHMM} from '@/functions/time'
import {useManageDataOnUrl, useSheet} from '@/hooks'
import {useModal} from '@/hooks/use-modal'
import type {TMember} from '@/types'
import {useCallback} from 'react'
import {AddMemberButton} from './add-member-button'
import {RegisterForm} from './components/registeration-form'
import {DeleteMemberButton} from './delete-member-button'
import {MemberDeletionConfirmationModal} from './member-deletion-confirmation-modal'

export const RegisterSection = () => {
	const {getArr} = useManageDataOnUrl()
	const {onOpen: onOpenSheet} = useSheet()
	const {onOpen: onOpenModal} = useModal()

	const memberArr: TMember[] = getArr(MEMBER_KEY)

	const TableHead = useCallback(
		() => (
			<thead className='flex h-fit w-full flex-col items-start'>
				<tr className='grid h-[45px] w-full grid-cols-[2rem_1fr_1fr_1fr_1fr] items-end justify-center rounded-none border-b-[2px] px-2 py-1 text-center'>
					<th></th>
					<th>이름</th>
					<th>등록시간</th>
					<th></th>
					<th className='text-end'>게임 횟수</th>
				</tr>
			</thead>
		),
		[],
	)
	const onDeleteMember = (idx: number) => {
		if (idx < 0 && memberArr.length <= idx) return
		onOpenModal({
			children: <MemberDeletionConfirmationModal {...{idx}} />,
		})
	}

	return (
		<SectionBase className='grid grid-rows-[50px_1fr_48px] gap-[1px]'>
			<SectionHeader
				title='회원 등록'
				description='회원 및 속성을 등록하세요.'
			/>
			<table className='flex h-full flex-col overflow-hidden' width='100%'>
				<TableHead />
				<tbody className='h-full w-full overflow-y-scroll scrollbar-hide'>
					{memberArr.map((member, idx) => {
						const id = member.id
						const name = member.name
						const formattedCreateAt = formatHHMM(member.createAt)
						const cntPlay = member.cntPlay
						return (
							<tr
								key={id}
								className='grid h-[55px] w-full grid-cols-[2rem_1fr_1fr_1fr_1fr] items-center justify-center rounded-none border-b-[1px] border-white/50 px-2 py-1 text-center'
							>
								<td className='flex h-full items-center justify-center'>
									<DeleteMemberButton {...{idx, onDeleteMember}} />
								</td>
								<td className='flex h-full items-center justify-center'>
									<p>{name}</p>
								</td>
								<td className='flex h-full items-center justify-center'>
									<p>{formattedCreateAt}</p>
								</td>
								<td />
								<td className='flex h-full items-center justify-end'>
									<p className='text-end'>{cntPlay}</p>
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
			<AddMemberButton
				onClick={() =>
					onOpenSheet({
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
