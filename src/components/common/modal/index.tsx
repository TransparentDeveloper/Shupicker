import {ModalBackdrop} from './modal-backdrop'
import {ModalBody} from './modal-body'
import type {ModalPT} from './modal.type'

export const Modal = ({children, className}: ModalPT) => {
	return (
		<ModalBackdrop {...{className}}>
			<ModalBody>{children}</ModalBody>
		</ModalBackdrop>
	)
}
