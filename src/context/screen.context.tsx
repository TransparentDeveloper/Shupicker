import { BREAK_POINT } from '@/libs/styled-components/reference-tokens'
import type { ScreenType } from '@/types/screen.type'
import ScreenRadioAlert from '@/units/overlays/screen-radio-alert'
import type { PropsWithChildren } from 'react'
import { createContext, useContext, useEffect, useState } from 'react'

export const ScreenContext = createContext<{ screen: ScreenType }>({
	screen: 'tablet'
})

export const useScreenStore = () => useContext(ScreenContext)

export const ScreenProvider = ({ children }: PropsWithChildren) => {
	// 화면 비율 중, 횡 길이가 더 길다면 true, 아니라면 false
	const [isLandScape, setIsLandScape] = useState(true)
	// 현재 screen 상태 (mobile 인지, table 인지)
	const [screen, setScreen] = useState<ScreenType>('tablet')

	const onHandleScreen = () => {
		if (window.innerWidth < window.innerHeight) {
			setIsLandScape(false)
			return
		}
		setIsLandScape(true)
		if (BREAK_POINT.mobile.maxWidth > window.innerWidth) {
			setScreen('mobile')
		} else {
			setScreen('tablet')
		}
	}
	useEffect(() => {
		window.addEventListener('resize', onHandleScreen)
		return () => {
			window.addEventListener('resize', onHandleScreen)
		}
	}, [])

	return (
		<ScreenContext.Provider value={{ screen: screen }}>
			{children}
			{!isLandScape && <ScreenRadioAlert />}
		</ScreenContext.Provider>
	)
}
