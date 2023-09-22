import styled from '@emotion/styled'

const Container = styled.div`
	position: absolute;
	bottom: -160px;
	display: flex;
	justify-content: center;
	width: 100%;
`

const Wrapper = styled.div`
	width: 100%;
	background-color: #131e45;
	box-shadow: 0 0 40px 0 #ff7ec6;
	border-radius: 10px;
	padding: 10px 30px;
	font-family: 'Press Start 2P', sans-serif;
	color: #ff9e9e;
	display: flex;
	text-transform: uppercase;
`

const Points = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 16px;
`

const PointsLabel = styled.div`
	font-size: 10px;
	margin-bottom: 10px;
`

const Text = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-grow: 2;
	color: #677ba8;
`

const Lives = styled.div`
	display: flex;
	flex-direction: column;
`

const LivesLabel = styled.div`
	font-size: 10px;
	margin-bottom: 10px;
	color: #a16b7b;
`

const LivesContent = styled.div`
	display: flex;
	gap: 10px;
`

const LivesImage = styled.img`
	width: 25px;
	height: 25px;
`

type Props = {
	points?: number
	text?: string
	lives?: number
}

const ScoreBoard = ({ points = 0, text = 'get ready!' }: Props) => {
	return (
		<Container>
			<Wrapper>
				<Points>
					<PointsLabel>Points</PointsLabel>
					{points}
				</Points>

				<Text>{text}</Text>

				<Lives>
					<LivesLabel>Lives</LivesLabel>

					<LivesContent>
						<LivesImage src="/peach.png" />
						<LivesImage src="/peach.png" />
						<LivesImage src="/peach.png" />
					</LivesContent>
				</Lives>
			</Wrapper>
		</Container>
	)
}

export default ScoreBoard
