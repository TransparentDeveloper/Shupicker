import type {ComponentProps} from 'react'

import type {Modal} from '@/components/common'

export type ModalPT = ComponentProps<typeof Modal>
export type ModalContextPT = {
	onOpen: (props: ModalPT) => void
	onClose: VoidFunction
}
