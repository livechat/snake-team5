import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

const StyledButton = styled(Link)<{ kind?: 'primary' }>`
	font-family: 'Press Start 2P', sans-serif;
	font-size: 16px;
	padding: 24px 30px;
	text-transform: uppercase;
	text-align: center;
	border-radius: 10px;
	text-decoration: none;

	color: #9da6ea;
	background: linear-gradient(to bottom, #4150b5, #2d3672);

	${(props) =>
		props.kind === 'primary' &&
		`
		color: #764623;
		background: linear-gradient(to bottom, #FFF47C, #FFA031);
	`}
`

const Button = ({ children, kind, ...rest }: any) => {
	return (
		<StyledButton kind={kind} {...rest}>
			{children}
		</StyledButton>
	)
}

export default Button
