import { ExperienceHeader } from '../../styles/components/ExperienceBar'
import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

export function ExperienceBar() {
	const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext)

	const percentToNextLevel = Math.floor((currentExperience * 100)) / experienceToNextLevel
	return (
		<ExperienceHeader currentExperience={`${percentToNextLevel}%`}>
			<span>0 xp</span>
			<div className="experience-area">
				<div className="achieved-experience" />
				<span className="current-experience">
				{currentExperience} xp
				</span>
			</div>
			<span className="span">{experienceToNextLevel} xp</span>
		</ExperienceHeader>
	)
}