import { ChallengeBoxContainer, ChallengeNotActive, ChallengeActive, ChallengeButton } from '../../styles/components/ChallengeBox';
import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

export function ChallengeBox() {
	const { activeChallenge, resetChallenge } = useContext(ChallengesContext)

	return (
		<>
			<ChallengeBoxContainer>
				{ activeChallenge ? (
					<ChallengeActive>
						<header>Ganhe {activeChallenge.amount} xp</header>

						<main>
							<img src={`icons/${activeChallenge.type}.svg`} alt="" />
							<strong>Novo desafio</strong>
							<p>{activeChallenge.description}</p>
						</main>

						<footer>
							<ChallengeButton
								type="button"
								buttonStyle="failed"
								onClick={resetChallenge}
							>
								Falhei
							</ChallengeButton>
							<ChallengeButton
								type="button"
								buttonStyle="succeeded"
								//onClick={}
							>
								Completei
							</ChallengeButton>
						</footer>
					</ChallengeActive>
				) : (
					<ChallengeNotActive>
						<strong>Finalize um ciclo para receber um desafio</strong>
						<p>
							<img src="icons/level-up.svg" alt="Level up" />
							Avance de level completando desafios.
						</p>
					</ChallengeNotActive>
				) }
			</ChallengeBoxContainer>
		</>
	)
}