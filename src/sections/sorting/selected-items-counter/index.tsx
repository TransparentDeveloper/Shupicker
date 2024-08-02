import type {SelectedItemsCounterPT} from './selected-items-counter.type'

export const SelectedItemsCounter = ({
	totalNum,
	partialNum,
}: SelectedItemsCounterPT) => {
	return (
		<section className='flex h-[50px] w-full items-center justify-end font-light'>
			<p className='inline-block font-extrabold italic'>{totalNum}&nbsp;</p> 명
			중&nbsp;
			<p className='inline-block font-extrabold italic'>{partialNum}&nbsp;</p>명
			선택 중..
		</section>
	)
}
