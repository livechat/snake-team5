import styled from '@emotion/styled'
import { Route, Routes } from 'react-router-dom'
import Menu from './Menu'
import GameBoard from './GameBoard'

const GameContainer = styled.div`
	height: 700px;
	width: 800px;
	border: 1px solid red;
`

const Wrapper = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`

const GameOuter = () => {
	return (
		<Wrapper>
			<GameContainer>
				<Routes>
					<Route path="/" element={<Menu />} />
					<Route path="/textravaganza" element={<GameBoard />} />
					<Route path="/highscore" element="" />
				</Routes>
			</GameContainer>
		</Wrapper>
	)
}

export default GameOuter
