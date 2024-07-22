import type {TMember} from '@/types'

export const findMemberById = (
	memberArr: TMember[],
	memberId: string,
): TMember => {
	const targetIdx = memberArr.findIndex((member) => member.id === memberId)
	if (targetIdx === -1) throw new Error('관리하지 않는 member id 입니다.')
	return memberArr[targetIdx]
}
