import {RowOne} from './row-one'
import type {TableBodyPT} from './table-body.type'

export const TableBody = ({
	sortedMembers,
	selectedMemberIds,
	setSelectedMemberIds,
}: TableBodyPT) => {
	return (
		<tbody className='h-full w-full overflow-y-scroll scrollbar-hide'>
			{sortedMembers.map((member) => {
				return (
					<RowOne
						key={member.id}
						{...{member}}
						isSelected={selectedMemberIds.includes(member.id)}
						onSelect={setSelectedMemberIds}
					/>
				)
			})}
		</tbody>
	)
}
