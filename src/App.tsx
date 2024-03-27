import styled from 'styled-components'
import { Grid, GridElement, Header, PaddingContainer } from './components'
import { MatchingLog, PersonnelList, SelectSortedItems } from './units/panels'

const App = () => {
	return (
		<>
			<Header />
			<Main>
				<PaddingContainer horizontal={'2%'} vertical={'1%'}>
					<Grid rows={2} columns={2} rowGap="1rem" columnGap="2rem">
						<GridElement>
							<PersonnelList />
						</GridElement>

						<GridElement row={2} column={1}>
							<SelectSortedItems />
						</GridElement>

						<GridElement row={1} column={2} rowSpan={2}>
							<MatchingLog />
						</GridElement>
					</Grid>
				</PaddingContainer>
			</Main>
		</>
	)
}

export default App

const Main = styled.main`
	width: 100%;
	height: 90vh;
`
