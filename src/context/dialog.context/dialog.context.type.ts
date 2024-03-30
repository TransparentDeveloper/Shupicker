import type { DialogProps } from '@/components/common/dialog/dialog.type'

export type DialogContextProps = {
	onOpen: (props: DialogProps) => void
	onClose: VoidFunction
}
