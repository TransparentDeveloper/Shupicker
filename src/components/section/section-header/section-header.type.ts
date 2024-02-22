import { IconButtonProps } from '@/components/common/icon-button/icon-button.type'
import React from 'react'

export type SectionHeaderProps = {
	sectionName: string
	children: React.ReactNode
	iconButtonDataArray?: Array<IconButtonProps>
}
