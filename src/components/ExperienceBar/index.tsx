import { ExperienceHeader } from '../../styles/components/ExperienceBar'

export function ExperienceBar() {
	return (
		<ExperienceHeader>
			<span>0 xp</span>
			<div className="experience-area">
				<div className="achieved-experience" style={{ width: '60%'}} />
				<span className="current-experience" style={{ left: '60%'}}>
				300 xp
				</span>
			</div>
			<span className="span">600 xp</span>
		</ExperienceHeader>
	)
}