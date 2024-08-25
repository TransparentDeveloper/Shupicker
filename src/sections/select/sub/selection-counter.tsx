import {memo} from 'react'

type SelectionCounter = {
	selected: number
	total: number
}

export const SelectionCounter = memo(({selected, total}: SelectionCounter) => {
	return (
		<section className='flex h-fit w-full items-center justify-end font-light'>
			<span>(&nbsp;</span>
			<strong className='inline-block w-fit min-w-[30px] text-center italic'>
				{selected}
			</strong>
			<span>&nbsp; / &nbsp;</span>
			<strong className='inline-block w-fit min-w-[30px] text-center italic'>
				{total}
			</strong>
			<span> &nbsp;)</span>
		</section>
	)
})
SelectionCounter.displayName = 'SelectionCounter'
