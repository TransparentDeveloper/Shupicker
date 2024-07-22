import type {NoticeSectionPT} from './notice-section.type'

export const NoticeSection = ({groupName = ''}: NoticeSectionPT) => {
	const formattedGroupName = `${'"'}${groupName}${'"'}`
	return (
		<div className='flex h-full w-full flex-col items-center justify-center gap-8'>
			<section className='text-2xl'>
				<strong className='font-semibold italic'>{formattedGroupName}</strong>
			</section>
			<p className='text-lg'>해체합니다.</p>
		</div>
	)
}
