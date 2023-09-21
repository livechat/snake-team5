import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import GameOuter from './components/GameContainer'

function App() {
	return (
		<BrowserRouter>
			<Header />
			<GameOuter />
		</BrowserRouter>
	)
}

export default App
