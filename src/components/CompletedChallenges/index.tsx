import { CompletedChallengesContainer } from '../../styles/components/CompletedChallenges';
import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

export function CompletedChallenges() {
	const { challengesCompleted } = useContext(ChallengesContext)

	return(
		<CompletedChallengesContainer>
			<span>Desafios Completos</span>
			<span>{challengesCompleted}</span>
		</CompletedChallengesContainer>
	)
}