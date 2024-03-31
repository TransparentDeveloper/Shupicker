import type { DialogProps } from '@/components/common/dialog/dialog.type'
import { useDialogStore } from '@/context'

export const useDialog = () => {
	const { onOpen, onClose } = useDialogStore()

	const onAlert = (title: string) => {
		onOpen({
			title,
			size: 'small',
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
