import type {TGroup} from '@/types/group'

/** 특정 멤버를 모든 그룹에서 배제한 그룹의 배열을 반환 */
export const excludeMemberFromAllGroup = (
	groupArr: TGroup[],
	memberId: string,
): TGroup[] =>
	groupArr.map((group) => {
		const groupMemberIds = group.memberIds
		const newMemberIds = groupMemberIds.filter((eachId) => eachId !== memberId)
		return {id: group.id, memberIds: newMemberIds}
	})
/** 1인 이상 member 가 있는 그룹의 배열을 반환 */
export const getNonEmptyGroupArr = (groupArr: TGroup[]) =>
	groupArr.filter((group) => group.memberIds.length >= 1)
