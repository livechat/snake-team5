import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

const HorizontalNeon = styled.section`
	position: relative;
	background-color: #000;
	height: 420px;
	width: 100%;
	perspective: 125px;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;

	&:before {
		content: '';
		position: absolute;
		background: linear-gradient(0, transparent -150%, #000);
		right: 0;
		left: 0;
		height: 50px;
		z-index: 99;
		top: 0;
	}
`

const VerticalNeon = styled.section`
	position: absolute;
	background-color: black;
	color: #e5279d;
	height: 100%;
	width: 100%;
	transform: rotateX(25deg);

	&:before {
		content: '';
		position: absolute;
		background-color: currentColor;
		transform: translateX(-50%);
		top: -100vh;
		bottom: -100vh;
		left: 50%;
		width: 10px;
		box-shadow: -140px 0 0 currentColor, -290px 0 0 currentColor, -440px 0 0 currentColor, -590px 0 0 currentColor,
			-740px 0 0 currentColor, -890px 0 0 currentColor, -1040px 0 0 currentColor, -1190px 0 0 currentColor,
			140px 0 0 currentColor, 290px 0 0 currentColor, 440px 0 0 currentColor, 590px 0 0 currentColor,
			740px 0 0 currentColor, 890px 0 0 currentColor, 1040px 0 0 currentColor, 1190px 0 0 currentColor;
	}

	&:after {
		content: '';
		position: absolute;
		background-color: currentColor;
		top: 0;
		right: -100vw;
		left: -100vw;
		height: 10px;
		box-shadow: 0 90px 0 0 currentColor, 0 190px 0 currentColor, 0 290px currentColor, 0 -90px 0 0 currentColor,
			0 -190px 0 currentColor, 0 -290px currentColor, 0 -390px currentColor, 0 -490px currentColor;
		animation: lightv 2s linear infinite;
	}

	@keyframes lightv {
		from {
			transform: translateY(0);
		}
		to {
			transform: translateY(100px);
		}
	}
`

const BottomText = styled.p`
	font-family: 'Anton', sans-serif;
	color: #fff;
	margin-top: -7px;
	margin-bottom: 0;
	font-size: 5vw;
	transform: rotate(-10deg);
	text-shadow: 1px 0 0 #a8d5ec, -1px 0 0 #a8d5ec, 0 1px 0 #a8d5ec, 0 -1px 0 #a8d5ec, 1px 1px 0 #a8d5ec,
		-1px -1px 0 #a8d5ec, 1px -1px 0 #a8d5ec, -1px 1px 0 #a8d5ec;
	z-index: 3;
`

const Content = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
	flex-grow: 1;
	color: #fff;
	z-index: 100;
	position: relative;
	top: 50px;

	h1 {
		font-size: 9.8rem;
		font-family: 'Archivo Black', sans-serif;
		margin: 0 0 -15px 0;
		text-transform: uppercase;
		z-index: 1;
		background: linear-gradient(
			to bottom,
			rgba(244, 216, 244, 1) 0%,
			rgba(226, 216, 241, 1) 50%,
			rgba(106, 76, 120, 1) 51%,
			rgba(195, 136, 188, 1) 100%
		);
		background-clip: text;
		-webkit-text-fill-color: transparent;
		color: #fff;
	}
`
const ButtonWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`
const StyledButton = styled(Link)`
	font-size: 20px;
	padding: 10px 20px;
	font-family: 'Archivo Black', sans-serif;
	text-transform: uppercase;
	letter-spacing: 1px;
	z-index: 1;
	background: rgba(226, 216, 241, 1) 50%;
	text-decoration: none;
	color: black;
	text-align: center;
`

const MenuTheme = () => {
	return (
		<div>
			<Content>
				<h1>SNAKE</h1>
				<BottomText>Retro</BottomText>
			</Content>
			<HorizontalNeon>
				<VerticalNeon />
				<ButtonWrapper>
					<StyledButton to="/textravaganza">Start</StyledButton>
					<StyledButton to="/highscore">Highscore</StyledButton>
					<StyledButton to="/settings">Settings</StyledButton>
				</ButtonWrapper>
			</HorizontalNeon>
		</div>
	)
}

export default MenuTheme
