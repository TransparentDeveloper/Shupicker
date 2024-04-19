import type { GroupType, MemberType } from '@/types'
import { findMemberById } from '@/utils'

/**
 * 같은 group 내에 속한 member 배열 구하기
 */
export const getGroupMembers = (group: GroupType, members: Array<MemberType>) => {
	const groupMembers = group.memberIdArray.map((memberId) => findMemberById(members, memberId))
	if (!!!groupMembers) return []
	return groupMembers
}
