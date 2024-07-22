import {isUndefined} from 'lodash'
import type {NoticeSectionPT} from './notice-section.type'

export const NoticeSection = ({member}: NoticeSectionPT) => {
	let memberName = ''
	if (!isUndefined(member)) memberName = member.name
	const formattedMemberName = `${'"'}${memberName}${'"'}`
	return (
		<div className='flex h-full w-full flex-col items-center justify-center gap-8'>
			<section className='text-2xl'>
				<strong className='font-semibold italic'>{formattedMemberName}</strong>
				<span> 님 의</span>
			</section>
			<p className='text-lg'>모든 정보를 삭제합니다.</p>
		</div>
	)
}
