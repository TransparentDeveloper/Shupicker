import {useModalStore} from '@/contexts/modal-context'
import {isNull} from 'lodash'

export const useModal = () => {
	const modalStore = useModalStore()
	if (isNull(modalStore))
		throw Error('modal 컨텍스트 할당이 정상적으로 이뤄지지 않았습니다.')
	return {...modalStore}
}
