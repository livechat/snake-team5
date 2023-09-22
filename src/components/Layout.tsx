import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

const Container = styled.div`
	height: 800px;
	width: 800px;
	background: url('/frame.jpg') no-repeat center center;
	background-size: cover;
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
	padding-top: 40px;
`

const GridContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 600px;
`

const Grid = styled.div`
	background: url('/grid.png') no-repeat center center;
	width: 554px;
	height: 464px;
`

const Body = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
`

const Logo = styled.img``

type Props = {
	children: React.ReactNode
}

const Layout = ({ children }: Props) => {
	return (
		<Container>
			<Content>
				<Link to="/">
					<Logo src="/logo.svg" />
				</Link>
			</Content>

			<GridContainer>
				<Grid>
					<Body>{children}</Body>
				</Grid>
			</GridContainer>
		</Container>
	)
}

export default Layout
