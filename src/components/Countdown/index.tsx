import { useState, useEffect } from 'react'
import { CountdownButton, CountdownContainer } from '../../styles/components/Countdown';

export function Countdown() {
	const [time, setTime] = useState(25 * 60)
	const [isActive, setIsActive] = useState(false)

	const minutes = Math.floor(time / 60)
	const seconds = time % 60
	const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
	const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

	function startCountdown() {
		setIsActive(true)
	}

	useEffect(() => {
		if(isActive && time > 0) {
			setTimeout(() => {
				setTime(time - 1)
			}, 1000)
		}
	}, [isActive, time])

	return(
		<>
			<CountdownContainer>
				<div>
					<span>{minuteLeft}</span>
					<span>{minuteRight}</span>
				</div>
				<span>:</span>
				<div>
					<span>{secondLeft}</span>
					<span>{secondRight}</span>
				</div>
			</CountdownContainer>
			<CountdownButton type="button" onClick={startCountdown}>
				Iniciar um ciclo
			</CountdownButton>
		</>
	)
}