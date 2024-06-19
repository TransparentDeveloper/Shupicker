import {GridLayout} from './components/layouts'
import {RecordSection, RegisterSection, SortingSection} from './sections'

const App = () => {
	return (
		<GridLayout
			topLeft={<RegisterSection />}
			bottomLeft={<RecordSection />}
			fullRight={<SortingSection />}
		/>
	)
}

export default App
