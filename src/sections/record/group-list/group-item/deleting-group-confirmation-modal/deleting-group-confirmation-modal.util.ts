import type {TMember} from '@/types'

export const subtractGroupMembersPlayCnt = (
	groupMemberIds: string[],
	memberArr: TMember[],
) =>
	memberArr.map((member) => {
		const memberId = member.id
		if (groupMemberIds.includes(memberId)) member.cntPlay--
		return member
	})
