import type {TMember} from '@/types'
import type {TGroup} from '@/types/group'
import {removeElement} from './common'

/** 그룹생성 */
export const createGroup = (props: TGroup) => {
	const group: TGroup = {
		...props,
	}
	return group
}

/** 그룹에 속한 멤버 이름 반환 */
export const getGMemberNames = (gMembers: TMember[]) =>
	gMembers.map((member) => member.name)

/** 그룹에 속한 멤버의 참여횟수만 조정 */
export const addOnlyGMemberPlays = (
	group: TGroup,
	members: TMember[],
	adding: number,
) => {
	const gMemberIds = group.memberIds
	const updatedMembers = members.map((member) => {
		if (gMemberIds.includes(member.id)) member.cntPlay += adding
		return member
	})
	return updatedMembers
}

/** 한 멤버를 모든 그룹에서 배제 */
export const excludeMemberFromAllGroups = (
	groups: TGroup[],
	memberId: string,
): TGroup[] => {
	const groupsExcludingTarget = groups.map((group) => {
		group.memberIds = removeElement(group.memberIds, memberId)
		return group
	})
	return groupsExcludingTarget
}

/** 멤버가 1인 이상 있는 그룹만 반환 */
export const filterGroupsWithMembers = (groups: TGroup[]) => {
	return groups.filter((group) => {
		const cntMembers = group.memberIds.length
		return cntMembers >= 1
	})
}

/** 특정 멤버를 그룹에서 제거 */
export const removeMemberFromGroup = (
	group: TGroup,
	memberId: string,
): TGroup => {
	const groupId = group.id
	const gMemberIds = group.memberIds
	const removedIds = removeElement(gMemberIds, memberId)
	return {
		id: groupId,
		memberIds: removedIds,
	}
}
