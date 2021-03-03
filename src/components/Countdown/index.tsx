import { useContext } from 'react'
import { CountdownButton, CountdownContainer } from '../../styles/components/Countdown';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { CountdownContext } from '../../contexts/CountdownContext';

export function Countdown() {
	const {
		minutes,
		seconds,
		isActive,
		hasFinished,
		startCountdown,
		resetCountdown
	} = useContext(CountdownContext)

	const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
	const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')


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