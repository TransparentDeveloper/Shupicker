import type {TMember} from '@/types'
import _ from 'lodash'

export const extractMembersById = (members: TMember[], ids: string[]) => {
	return _.filter(members, (member) => _.includes(ids, member.id))
}
