import { useContext, useState, useEffect } from 'react'
import { CountdownButton, CountdownContainer, ButtonCountdownProps } from '../../styles/components/Countdown';
import { ChallengesContext } from '../../contexts/ChallengesContext';

let countdownTimeout: NodeJS.Timeout

export function Countdown() {
	const { startNewChallenge } = useContext(ChallengesContext)

	const [time, setTime] = useState(0.1 * 60)
	const [isActive, setIsActive] = useState(false)
	const [buttonStyle, setButtonStyle] = useState<ButtonCountdownProps['buttonStyle']>('start')
	const [hasFinished, setHasFinished] = useState(false)

	const minutes = Math.floor(time / 60)
	const seconds = time % 60
	const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
	const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

	function startCountdown() {
		setIsActive(true)
		setButtonStyle('cancel')
	}

	function resetCountdown() {
		clearTimeout(countdownTimeout)
		setButtonStyle('start')
		setTime(0.1 * 60)
		setIsActive(false)
	}

	useEffect(() => {
		if(isActive && time > 0) {
			countdownTimeout = setTimeout(() => {
				setTime(time - 1)
			}, 1000)
		}else if(isActive && time === 0) {
			setHasFinished(true)
			setIsActive(false)
			startNewChallenge()
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

			{hasFinished ? (
				<CountdownButton
						disabled
						buttonStyle="start"
					>
						Ciclo encerrado
				</CountdownButton>
			): (
				<>
					{isActive ?
						(
							<CountdownButton
								type="button"
								onClick={resetCountdown}
								buttonStyle="cancel"
							>
								Abandonar ciclo
							</CountdownButton>
						) :
						(
							<CountdownButton
								type="button"
								onClick={startCountdown}
								buttonStyle="start"
							>
								Iniciar um ciclo
							</CountdownButton>
						)}
				</>
			)}
		</>
	)
}