import { anchorTimeAtom } from '@/libs/recoil'
import { getFormattedCurTime } from '@/utils'
import { useRecoilState } from 'recoil'

export const useAnchorTime = () => {
	const [anchorTime, setAnchorTime] = useRecoilState(anchorTimeAtom)
	const updateTime = () => setAnchorTime(getFormattedCurTime())
	return { anchorTime, updateTime }
}
