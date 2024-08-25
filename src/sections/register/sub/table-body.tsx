import {formatHHMM} from '@/functions/time'
import type {TMember} from '@/types'
import {X} from 'lucide-react'

type TableBodyPT = {
	members: TMember[]
	onOpenDeleteMemberModal: (target: TMember) => void
}
export const TableBody = ({members, onOpenDeleteMemberModal}: TableBodyPT) => {
	return (
		<tbody className='h-full w-full overflow-y-scroll scrollbar-hide'>
			{members.map((member) => {
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
							<X
								className='aspect-square h-1/2 stroke-gray-500 transition-transform hover:scale-125 hover:stroke-white'
								onClick={() =>
									onOpenDeleteMemberModal && onOpenDeleteMemberModal(member)
								}
							/>
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
	)
}
