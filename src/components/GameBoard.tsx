import styled from '@emotion/styled'
import { useState, useEffect } from 'react'

const GRID_SIZE = 20
const INITIAL_SNAKE_POSITION = [
	{ x: GRID_SIZE / 2, y: GRID_SIZE / 2 },
	{ x: GRID_SIZE / 2 + 1, y: GRID_SIZE / 2 },
]

const GAME_STAGES = {
	INITIAL: 'initial',
	PLAYING: 'playing',
	OVER: 'over',
}

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
`

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

const StyledHeader = styled.header`
	height: 70px;
	width: 100%;
	background-color: rebeccapurple;
`

const Board = styled.div`
	height: calc(100% - 70px);
	width: 100%;
	background-color: #ccc;
	display: grid;
	grid-template-columns: repeat(20, 1fr);
	grid-template-rows: repeat(20, 1fr);
`

const Cell = styled.div`
	height: 100%;
	width: 100%;
	background-color: #ccc;
	border: 1px solid;
`

const Food = styled.div`
	height: 100%;
	width: 100%;
	background-color: red;
	border: 1px solid;
`

const Snake = styled.div`
	height: 100%;
	width: 100%;
	background-color: green;
	border: 1px solid;
`

const SnakeHead = styled.div`
	height: 100%;
	width: 100%;
	background-color: black;
	border: 1px solid;
`

const GameBoard = () => {
	const [gameStage, setGameStage] = useState(GAME_STAGES.INITIAL)

	const [words, setWords] = useState<string[]>([])
	const [selectedWord, setSelectedWord] = useState<string>('')
	const [category, setCategory] = useState('')
	const [snakePosition, setSnakePosition] = useState(INITIAL_SNAKE_POSITION)
	const [foodPosition, setFoodPosition] = useState({ x: 5, y: 5 })
	const [direction, setDirection] = useState('left')

	const renderBoard = () => {
		let cells = []
		for (let row = 0; row < GRID_SIZE; row++) {
			for (let col = 0; col < GRID_SIZE; col++) {
				const isFood = foodPosition.x === col && foodPosition.y === row
				const isSnake = snakePosition.find((snakeCell) => snakeCell.x === row && snakeCell.y === col)

				const isSnakeHead = snakePosition[0].x === row && snakePosition[0].y === col

				if (isSnakeHead) {
					const snakeHead = <SnakeHead key={`${row}-${col}`} />
					cells.push(snakeHead)
					continue
				}

				if (isSnake) {
					const snake = <Snake key={`${row}-${col}`} />
					cells.push(snake)
					continue
				}

				if (isFood) {
					const food = <Food key={`${row}-${col}`} />
					cells.push(food)
					continue
				}

				const cell = <Cell key={`${row}-${col}`} />
				cells.push(cell)
			}
		}
		return cells
	}

	const gameOver = () => {
		console.log('Game Over')
		setGameStage(GAME_STAGES.OVER)
	}

	const updateGame = () => {
		let newSnakePosition = [...snakePosition]

		if (
			snakePosition[0].x < 0 ||
			snakePosition[0].x >= GRID_SIZE ||
			snakePosition[0].y < 0 ||
			snakePosition[0].y >= GRID_SIZE
		) {
			gameOver()
			return
		}

		switch (direction) {
			case 'left':
				newSnakePosition.unshift({ x: newSnakePosition[0].x, y: newSnakePosition[0].y - 1 })
				break
			case 'right':
				newSnakePosition.unshift({ x: newSnakePosition[0].x, y: newSnakePosition[0].y + 1 })
				break
			case 'up':
				newSnakePosition.unshift({ x: newSnakePosition[0].x - 1, y: newSnakePosition[0].y })
				break
			case 'down':
				newSnakePosition.unshift({ x: newSnakePosition[0].x + 1, y: newSnakePosition[0].y })
				break
		}

		const isFoodEaten = newSnakePosition[0].x === foodPosition.x && newSnakePosition[0].y === foodPosition.y

		if (isFoodEaten) {
			foodRandomizer()
		} else {
			newSnakePosition.pop()
		}

		setSnakePosition(newSnakePosition)
	}

	const updateDirection = (event: any) => {
		switch (event.key) {
			case 'ArrowLeft':
				if (direction !== 'right') setDirection('left')
				break
			case 'ArrowRight':
				if (direction !== 'left') setDirection('right')
				break
			case 'ArrowUp':
				if (direction !== 'down') setDirection('up')
				break
			case 'ArrowDown':
				if (direction !== 'up') setDirection('down')
				break
		}
	}

	const foodRandomizer = () => {
		const x = Math.floor(Math.random() * GRID_SIZE)
		const y = Math.floor(Math.random() * GRID_SIZE)
		setFoodPosition({ x, y })
	}

	const fetchWords = async (category: string) => {
		try {
			const words = [
				'cat',
				'lion',
				'tiger',
				'giraffe',
				'elephant',
				'kangaroo',
				'chimpanzee',
				'rhinoceros',
				'hippopotamus',
				'salamander',
			]

			setWords(words)
			setSelectedWord(words[0])

			setGameStage(GAME_STAGES.PLAYING)
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		const interval = setInterval(() => {
			if (gameStage !== GAME_STAGES.PLAYING) return
			updateGame()
		}, 500)
		return () => clearInterval(interval)
	})

	useEffect(() => {
		window.addEventListener('keydown', updateDirection)
		return () => window.removeEventListener('keydown', updateDirection)
	})

	return (
		<Wrapper>
			{gameStage === GAME_STAGES.INITIAL ? (
				<CenteredContainer>
					<InputLabel>Enter Category:</InputLabel>
					<input
						autoFocus
						type="text"
						value={category}
						onChange={(e) => setCategory(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === 'Enter') {
								fetchWords(category)
							}
						}}
					/>
					<button onClick={() => fetchWords(category)}>Start!</button>
				</CenteredContainer>
			) : (
				<>
					<StyledHeader>{selectedWord}</StyledHeader>
					<Board>{renderBoard()}</Board>
				</>
			)}
		</Wrapper>
	)
}

export default GameBoard
