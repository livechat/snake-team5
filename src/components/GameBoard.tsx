/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from '@emotion/styled'
import { useState, useEffect, useRef } from 'react'
import InitialStageInput from './InitialStageInput'
import GameOverInput from './GameOverInput'
import ScoreBoard from './ScoreBoard'

// const GRID_SIZE = 20
// const INITIAL_SNAKE_POSITION = [
// 	{ x: GRID_SIZE / 2, y: GRID_SIZE / 2 },
// 	{ x: GRID_SIZE / 2 + 1, y: GRID_SIZE / 2 },
// ]

const GAME_STAGES = {
	INITIAL: 'initial',
	PLAYING: 'playing',
	OVER: 'over',
}

const Wrapper = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
`

const IframeGame = styled.div`
	width: 100%;
	height: 100%;
`

const IFrame = styled.iframe`
	width: 100%;
	height: 100%;
	border: none;
`

const ScoreBoardWrapper = styled.div`
	position: relative;
	top: -87px;
`

const GameBoard = () => {
	const iframeRef = useRef<HTMLIFrameElement>(null)
	const [gameStage, setGameStage] = useState(GAME_STAGES.INITIAL)

	// @ts-ignore - to make build pass for now :)
	const [words, setWords] = useState<string[]>([])
	const [direction, setDirection] = useState('left')
	const [score] = useState(0)

	useEffect(() => {
		if (gameStage === GAME_STAGES.PLAYING) {
			setTimeout(() => {
				console.log('here')
				iframeRef.current?.focus()
			}, 1000)
		}
	}, [gameStage])

	// const renderBoard = () => {
	// 	let cells = []
	// 	for (let row = 0; row < GRID_SIZE; row++) {
	// 		for (let col = 0; col < GRID_SIZE; col++) {
	// 			const isFood = foodPosition.x === col && foodPosition.y === row
	// 			const isSnake = snakePosition.find((snakeCell) => snakeCell.x === row && snakeCell.y === col)

	// 			const isSnakeHead = snakePosition[0].x === row && snakePosition[0].y === col

	// 			if (isSnakeHead) {
	// 				const snakeHead = <SnakeHead key={`${row}-${col}`} />
	// 				cells.push(snakeHead)
	// 				continue
	// 			}

	// 			if (isSnake) {
	// 				const snake = <Snake key={`${row}-${col}`} />
	// 				cells.push(snake)
	// 				continue
	// 			}

	// 			if (isFood) {
	// 				const food = <Food key={`${row}-${col}`} />
	// 				cells.push(food)
	// 				continue
	// 			}

	// 			const cell = <Cell key={`${row}-${col}`} />
	// 			cells.push(cell)
	// 		}
	// 	}
	// 	return cells
	// }

	// const gameOver = () => {
	// 	console.log('Game Over')
	// 	setGameStage(GAME_STAGES.OVER)
	// }

	// const updateGame = () => {
	// 	let newSnakePosition = [...snakePosition]

	// 	if (
	// 		snakePosition[0].x < 0 ||
	// 		snakePosition[0].x >= GRID_SIZE ||
	// 		snakePosition[0].y < 0 ||
	// 		snakePosition[0].y >= GRID_SIZE
	// 	) {
	// 		gameOver()
	// 		return
	// 	}

	// 	switch (direction) {
	// 		case 'left':
	// 			newSnakePosition.unshift({ x: newSnakePosition[0].x, y: newSnakePosition[0].y - 1 })
	// 			break
	// 		case 'right':
	// 			newSnakePosition.unshift({ x: newSnakePosition[0].x, y: newSnakePosition[0].y + 1 })
	// 			break
	// 		case 'up':
	// 			newSnakePosition.unshift({ x: newSnakePosition[0].x - 1, y: newSnakePosition[0].y })
	// 			break
	// 		case 'down':
	// 			newSnakePosition.unshift({ x: newSnakePosition[0].x + 1, y: newSnakePosition[0].y })
	// 			break
	// 	}

	// 	const isFoodEaten = newSnakePosition[0].x === foodPosition.x && newSnakePosition[0].y === foodPosition.y

	// 	if (isFoodEaten) {
	// 		foodRandomizer()
	// 		setScore((prevScore) => prevScore + 1)
	// 	} else {
	// 		newSnakePosition.pop()
	// 	}

	// 	setSnakePosition(newSnakePosition)
	// }

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

	// const foodRandomizer = () => {
	// 	const x = Math.floor(Math.random() * GRID_SIZE)
	// 	const y = Math.floor(Math.random() * GRID_SIZE)
	// 	setFoodPosition({ x, y })
	// }

	const fetchWords = async (category: string) => {
		console.log('category', category)
		try {
			// const response = await fetch('https://word-generator-dbl6lzd3pa-vp.a.run.app/generate', {
			// 	method: 'POST',
			// 	headers: {
			// 		'Content-Type': 'application/x-www-form-urlencoded',
			// 		Authorization: `Basic ${import.meta.env.VITE_AUTH_TOKEN}`,
			// 	},
			// 	body: `category=${category}`,
			// })

			// if (!response.ok) {
			// 	throw new Error(`HTTP error! Status: ${response.status}`)
			// }

			// const data = await response.json()

			const words = ['hello', 'world']

			setWords(words)
			// setSelectedWord(words[0])

			setGameStage(GAME_STAGES.PLAYING)
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		const interval = setInterval(() => {
			if (gameStage !== GAME_STAGES.PLAYING) return
			// updateGame()
		}, 500)
		return () => clearInterval(interval)
	})

	useEffect(() => {
		window.addEventListener('keydown', updateDirection)
		return () => window.removeEventListener('keydown', updateDirection)
	})

	if (gameStage === GAME_STAGES.INITIAL) {
		return (
			<Wrapper>
				<InitialStageInput onStart={fetchWords} />
			</Wrapper>
		)
	}

	if (gameStage === GAME_STAGES.OVER) {
		return (
			<Wrapper>
				<GameOverInput score={score} />
			</Wrapper>
		)
	}

	return (
		<Wrapper>
			<IframeGame>
				<IFrame ref={iframeRef} src="https://snake-vue.netlify.app/" />
			</IframeGame>

			<ScoreBoardWrapper>
				<ScoreBoard text="Start!" />
			</ScoreBoardWrapper>
		</Wrapper>
	)
}

export default GameBoard
