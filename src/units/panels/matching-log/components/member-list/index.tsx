import { findMemberNameById } from '@/utils'
import * as S from './member-list.style'
import type * as T from './member-list.type'

export const MemberList = ({ members }: T.MemberListProps) => {
	return (
		<S.Container>
			{members?.map((member) => (
				<S.MemberName key={member.id}>{findMemberNameById(members, member.id)}</S.MemberName>
			))}
		</S.Container>
	)
}
