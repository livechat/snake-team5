import styled from '@emotion/styled'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CenteredContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
`

const InputLabel = styled.label`
	font-size: 1.2em;
	margin-bottom: 10px;
	color: rebeccapurple;
`

type Props = {
	score: number
}

const GameOverInput = ({ score }: Props) => {
	const navigate = useNavigate()
	const [playerName, setPlayerName] = useState('')

	const handleScoreSave = () => {
		const pastScores = JSON.parse(localStorage.getItem('snakeGameScores') || '[]')
		pastScores.push({ name: playerName, score })
		localStorage.setItem('snakeGameScores', JSON.stringify(pastScores))

		navigate('/highscore')
	}

	return (
		<CenteredContainer>
			<InputLabel>Enter Your Name:</InputLabel>
			<input autoFocus type="text" value={playerName} onChange={(e) => setPlayerName(e.target.value)} />
			<button onClick={handleScoreSave}>Save</button>
		</CenteredContainer>
	)
}

export default GameOverInput
