import styled from 'styled-components'

const ExperienceHeader = styled.header`
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
		}

		.current-experience {
			position: absolute;
			top: 12px;
			transform: translateX(-50%);
		}
	}
`

export {
	ExperienceHeader
}