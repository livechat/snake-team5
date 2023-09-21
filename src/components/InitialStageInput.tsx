import styled from '@emotion/styled'
import { useState } from 'react'

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
	onStart: (category: string) => void
}

const InitialStageInput = ({ onStart }: Props) => {
	const [category, setCategory] = useState('')

	const handleStart = () => {
		onStart(category)
	}

	return (
		<CenteredContainer>
			<InputLabel>Enter Category:</InputLabel>
			<input
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
			<button onClick={handleStart}>Start!</button>
		</CenteredContainer>
	)
}

export default InitialStageInput
