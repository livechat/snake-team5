import styled from '@emotion/styled'
import { Route, Routes } from 'react-router-dom'
import Menu from './Menu'
import GameBoard from './GameBoard'
import Highscore from './Highscore'
import Layout from './Layout'

const Wrapper = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`

const GameOuter = () => {
	return (
		<Wrapper>
			<Layout>
				<Routes>
					<Route path="/" element={<Menu />} />
					<Route path="/textravaganza" element={<GameBoard />} />
					<Route path="/highscore" element={<Highscore />} />
				</Routes>
			</Layout>
		</Wrapper>
	)
}

export default GameOuter
