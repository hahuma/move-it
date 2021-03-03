import { ProfileContainer } from '../../styles/components/Profile';
import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

export function Profile() {
	const { level } = useContext(ChallengesContext)
	return (
		<ProfileContainer>
			<img src="https://github.com/hahuma.png" alt="Petterson Firmino" />
			<div>
				<strong>Petterson Firmino</strong>
				<p>
					<img src="icons/level.svg" alt="level" />
					Level {level}
				</p>
			</div>
		</ProfileContainer>
	)
}