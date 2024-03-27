import { Grid, GridElement, Header, PaddingContainer } from '@/components'
import { useScreenStore } from '@/context'
import { MatchingLog, MemberTable, SelectSortedItems } from '@/units/panels'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import styled from 'styled-components'

const App = () => {
	const { screen } = useScreenStore()

	// 스크린 크기와 관련하여 모바일 환경인 경우, 동작합니다.
	if (screen === 'mobile') {
		return (
			<Main>
				<Carousel
					className="carousel-wrapper"
					axis="horizontal"
					showArrows={true}
					showStatus={true}
					showIndicators={true}
					showThumbs={false}
					swipeable={false}
					dynamicHeight={true}
					emulateTouch={false}
					swipeScrollTolerance={100}
				>
					<Header height="100dvh" isMobile={true} />
					<MemberTable width="100dvw" height="100dvh" />
					<SelectSortedItems width="100dvw" height="100dvh" />
					<MatchingLog width="100dvw" height="100dvh" />
				</Carousel>
			</Main>
		)
	}

	// 스크린 크기와 관련하여 모바일 환경이 아닌 경우, 동작합니다.
	return (
		<>
			<Header height="8vh" />
			<S.Main>
				<PaddingContainer horizontal="1rem">
					<Grid rows={2} columns={2} rowGap="1rem" columnGap="2rem">
						<GridElement>
							<MemberTable />
						</GridElement>

						<GridElement row={2} column={1}>
							<MatchingLog />
						</GridElement>

						<GridElement row={1} column={2} rowSpan={2}>
							<SelectSortedItems />
						</GridElement>
					</Grid>
				</PaddingContainer>
			</S.Main>
		</>
	)
}

export default App

const Main = styled.main`
	width: 100%;
	height: 88%;
`
const S = {
	Main
}
