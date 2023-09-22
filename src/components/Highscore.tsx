import styled from '@emotion/styled'

const Wrapper = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	font-family: 'Press Start 2P', sans-serif;
	font-size: 16px;
`

const ScoreWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	position: absolute;
	width: 100%;
	top: 10px;
	bottom: 0;
	overflow: auto;
`

const ScoreBox = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 20px;
	padding: 10px 20px;
	letter-spacing: 1px;
	color: #f7abff;
	text-align: center;
`

const Highscore = () => {
	const scores = JSON.parse(localStorage.getItem('snakeGameScores') || '[]').sort((a: any, b: any) => b.score - a.score)

	return (
		<Wrapper>
			<ScoreWrapper>
				{scores.map((score: any, index: any) => (
					<ScoreBox key={index}>
						<span>{score.name}</span>
						<span>{score.score}</span>
					</ScoreBox>
				))}
			</ScoreWrapper>
		</Wrapper>
	)
}

export default Highscore
