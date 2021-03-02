import { ProfileContainer } from '../../styles/components/Profile';

export function Profile() {
	return (
		<ProfileContainer>
			<img src="https://github.com/hahuma.png" alt="Petterson Firmino" />
			<div>
				<strong>Petterson Firmino</strong>
				<p>
					<img src="icons/level.svg" alt="level" />
					Level 1
				</p>
			</div>
		</ProfileContainer>
	)
}