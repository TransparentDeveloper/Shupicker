import {generateID} from '@/libs/uuid/util'
import type {TMember} from '@/types'
import type {TGroup} from '@/types/group'
import {removeElement, removeUndefinedElement} from './common'
import {addMemberPlay, findMemberById} from './member'

/** 그룹생성 */
export const createGroup = (props: Omit<TGroup, 'id'>) => {
	const id = generateID()
	const group: TGroup = {
		id,
		...props,
	}
	return group
}

/** 그룹에 속한 멤버 이름 반환 */
export const getGMemberNames = (group: TGroup, members: TMember[]) => {
	const gMember = getGMembers(group, members)
	const gMemberNames = gMember.map((member) => member.name)
	return gMemberNames
}

/** 그룹에 속한 멤버 객체를 배열로 반환 */
export const getGMembers = (group: TGroup, members: TMember[]) => {
	const gMemberIds = group.memberIds
	const gMembers = gMemberIds.map((memberId) =>
		findMemberById(members, memberId),
	)
	const removedUndefined = removeUndefinedElement(gMembers)
	return removedUndefined
}

/** 그룹에 속한 멤버의 참여횟수 조정 */
export const addGMemberPlays = (
	group: TGroup,
	members: TMember[],
	adding: number,
) => {
	const gMembers = getGMembers(group, members)
	const gMember = gMembers.map((member) => addMemberPlay(member, adding))
	return gMember
}

/** 한 멤버를 모든 그룹에서 배제 */
export const excludeMemberFromAllGroups = (
	groups: TGroup[],
	memberId: string,
): TGroup[] => {
	const excludedGroups = groups.map((group) =>
		removeMemberFromGroup(group, memberId),
	)
	const groupsWithMembers = filterGroupsWithMembers(excludedGroups)
	return groupsWithMembers
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
