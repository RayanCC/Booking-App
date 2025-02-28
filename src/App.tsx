import QueryProvider from './components/providers/QueryProvider'
import ThemeProvider from './components/providers/ThemeProvider'
import Siderbar from './components/sidebar/SideBar'

function App() {
	return (
		<QueryProvider>
			<ThemeProvider>
				<Siderbar />
			</ThemeProvider>
		</QueryProvider>
	)
}

export default App
