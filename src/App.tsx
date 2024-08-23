import {GridLayout} from './components/layouts'
import {RegisterSection, SortingSection} from './sections'
import {RecordSection} from './sections/record/record-section'

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
