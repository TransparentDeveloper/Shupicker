import type {ReactElement} from 'react'

type GridLayoutPT = {
	topLeft: ReactElement
	bottomLeft: ReactElement
	fullRight: ReactElement
}
export const GridLayout = ({
	topLeft: TopLeft,
	bottomLeft: BottomLeft,
	fullRight: FullRight,
}: GridLayoutPT) => {
	return (
		<div className='grid h-full w-full grid-flow-col grid-cols-2 grid-rows-2 gap-2 p-2'>
			<div className='h-full w-full overflow-hidden rounded-lg border-[2px] border-white'>
				{TopLeft}
			</div>
			<div className='h-full w-full overflow-hidden rounded-lg border-[2px] border-white'>
				{BottomLeft}
			</div>
			<div className='row-span-2 h-full w-full overflow-hidden rounded-lg border-[2px] border-white'>
				{FullRight}
			</div>
		</div>
	)
}
