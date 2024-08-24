import {GridLayout} from './components/layouts'
import {SortingSection} from './sections'
import {RecordSection} from './sections/record/record-section'
import {RegisterSection} from './sections/register/register-section'

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
