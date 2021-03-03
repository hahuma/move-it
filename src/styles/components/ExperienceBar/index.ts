import styled from 'styled-components'

export interface ExperienceBarProps {
	currentExperience: string
}

const ExperienceHeader = styled.header<ExperienceBarProps>`
	display: flex;
	align-items: center;

	span {
		font-size: 1rem;
	}

	.experience-area {
		flex: 1;
		height: 4px;
		border-radius: 4px;
		background: var(--gray-line);
		margin: 0 1.5rem;
		position: relative;

		.achieved-experience {
			height: 4px;
			border-radius: 4px;
			background: var(--green);
			width: ${props => props.currentExperience};
		}

		.current-experience {
			position: absolute;
			top: 12px;
			transform: ${props => `translateX(-${props.currentExperience})`};
			left: ${props => props.currentExperience};
		}
	}
`

export {
	ExperienceHeader
}