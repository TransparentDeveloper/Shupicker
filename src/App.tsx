import {GridLayout} from './components/layouts'
import {RecordSection} from './sections/record/record-section'
import {RegisterSection} from './sections/register/register-section'
import {SelectSection} from './sections/select/select-section'

const App = () => {
	return (
		<GridLayout
			topLeft={<RegisterSection />}
			bottomLeft={<RecordSection />}
			fullRight={<SelectSection />}
		/>
	)
}

export default App
