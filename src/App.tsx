import {GridLayout} from './components/layouts'
import {useManageDataOnUrl} from './hooks'
import {RecordSection, RegisterSection, SortingSection} from './sections'

const App = () => {
	const {getArr} = useManageDataOnUrl()
	return (
		<GridLayout
			topLeft={<RegisterSection />}
			bottomLeft={<RecordSection />}
			fullRight={<SortingSection />}
		/>
	)
}

export default App
