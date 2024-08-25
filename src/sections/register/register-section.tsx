import {Button} from '@/components/common'
import {SectionBase, SectionHeader} from '@/components/common/section-base'
import {MEMBER_KEY} from '@/constants'
import {useManageDataOnUrl, useSheet} from '@/hooks'
import {useModal} from '@/hooks/use-modal'
import type {TMember} from '@/types'
import {DeleteMemberModal} from './sub/delete-member-modal'
import {RegisterMemberSheet} from './sub/register-member-sheet'
import {TableBody} from './sub/table-body'
import {TableHead} from './sub/table-head'

export const RegisterSection = () => {
	const {getArr} = useManageDataOnUrl()
	const {onOpen: onOpenSheet} = useSheet()
	const {onOpen: onOpenModal} = useModal()
	const members = getArr<TMember>(MEMBER_KEY)

	const onOpenRegisterMemberSheet = () => {
		onOpenSheet({
			title: '새 회원 정보 입력',
			description: '아래 폼을 입력하고, 새로운 회원을 등록해주세요.',
			isOpen: true,
			children: <RegisterMemberSheet />,
		})
	}

	const onOpenDeleteMemberModal = (target: TMember) => {
		onOpenModal({
			children: <DeleteMemberModal {...{target, members}} />,
		})
	}

	return (
		<SectionBase className='grid grid-rows-[50px_1fr_48px] gap-1'>
			<SectionHeader
				title='회원 등록'
				description='회원 및 속성을 등록하세요.'
			/>
			<table className='flex h-full w-full flex-col overflow-hidden'>
				<TableHead />
				<TableBody {...{members, onOpenDeleteMemberModal}} />
			</table>
			<Button flexibility='full' onClick={onOpenRegisterMemberSheet}>
				새 회원 추가
			</Button>
		</SectionBase>
	)
}
