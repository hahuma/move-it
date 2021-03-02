import styled from 'styled-components'

const CountdownContainer = styled.div`
	display: flex;
	align-items: center;

	font-family: Rajdhani, sans-serif;
	font-weight: 600;
	color: var(--title);

	> div {
		flex: 1;

		display: flex;
		align-items: center;
		justify-content: space-evenly;

		background: var(--white);
		box-shadow: 0 0 68px rgba(0, 0, 0, 0.05);
		border-radius: 5px;

		font-size: 0.5rem;
		text-align: center;

		span {
			flex: 1;
		}

		span:first-child {
			border-right: 1px solid #f0f1f3;
		}

		span:last-child {
			border-left: 1px solid #f0f1f3;
		}

	}

	span {
		font-size: 6.25rem;
		margin: 0 0.25rem;
	}
`

const CountdownButton = styled.button`
	width: 100%;
	height: 5rem;

	margin-top: 2rem;

	display: flex;
	align-items: center;
	justify-content: center;

	border-radius: 5px;

	background: var(--blue);

	font-size: 1.25rem;
	font-weight: 600;
	color: var(--white);
	transition: background-color 200ms;
	&:hover {
		background: var(--blue-dark);
	}
`

export {
	CountdownContainer,
	CountdownButton
}