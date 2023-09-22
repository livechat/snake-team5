import styled from '@emotion/styled'
import { useState } from 'react'
import Button from './Button'

const CenteredContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
	font-family: 'Press Start 2P', sans-serif;
`

const Wrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
`

const InputLabel = styled.label`
	font-size: 16px;
	margin-bottom: 35px;
	color: #f7abff;
`

const Input = styled.input`
	padding: 20px;
	background: linear-gradient(to bottom, #060b2b, #151a3a);
	box-shadow: 0 1px 1px 0 #fff;
	border-radius: 10px;
	border: 1px solid transparent;
	outline: none;
	margin-bottom: 35px;
	color: #fff;
	font-family: 'Press Start 2P', sans-serif;
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

type Props = {
	onStart: (category: string) => void
}

const InitialStageInput = ({ onStart }: Props) => {
	const [category, setCategory] = useState('')

	const handleStart = () => {
		onStart(category)
	}

	return (
		<CenteredContainer>
			<Box>
				<Wrapper>
					<InputLabel>Choose Category:</InputLabel>
					<Input
						autoFocus
						type="text"
						value={category}
						onChange={(e) => setCategory(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === 'Enter') {
								handleStart()
							}
						}}
					/>
					<Button kind="primary" onClick={handleStart}>
						Start!
					</Button>
				</Wrapper>
			</Box>
		</CenteredContainer>
	)
}

export default InitialStageInput
