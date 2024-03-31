import type { DialogProps } from '@/components/common/dialog/dialog.type'
import { useDialogStore } from '@/context'

export const useDialog = () => {
	const { onOpen, onClose } = useDialogStore()

	const onAlert = (alertMessage: string) => {
		onOpen({
			title: '⚠️ Alert',
			size: 'small',
			dialogContent: <div>{alertMessage}</div>,
			onClose
		})
	}
	const onOverlayWindow = ({
		title,
		dialogContent
	}: Pick<DialogProps, 'title' | 'dialogContent'>) => {
		onOpen({
			title,
			dialogContent,
			onClose
		})
	}
	return { onAlert, onOverlayWindow, onClose }
}
