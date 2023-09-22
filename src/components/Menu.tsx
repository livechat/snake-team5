import styled from '@emotion/styled'
import Button from './Button'
import ScoreBoard from './ScoreBoard'

const Wrapper = styled.div`
	position: relative;
`

const ButtonWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`

const Box = styled.div`
	background-color: rgb(26 32 72 / 95%);
	border-radius: 10px;
	width: 460px;
	height: 300px;
	display: flex;
	align-items: center;
	justify-content: center;
`

const MenuTheme = () => {
	return (
		<Wrapper>
			<Box>
				<ButtonWrapper>
					<Button to="/textravaganza" kind="primary">
						Start
					</Button>
					<Button to="/highscore">Highscore</Button>
				</ButtonWrapper>
			</Box>

			<ScoreBoard />
		</Wrapper>
	)
}

export default MenuTheme
