import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
	@media screen and (max-width: 1080px) {
		html {
			font-size: 93.75%;
		}
	}

	@media screen and (max-width: 720px) {
		html {
			font-size: 87.5%;
		}
	}

	:root {
		--white: #FFF;
		--background: #F2F3F5;
		--gray-line: #DCDDE0;
		--text: #666666;
		--text-highlight: #B3B9FF;
		--title: #2E384D;
		--red: #E83F5B;
		--green: #4CD62B;
		--blue: #5965E0;
		--blue-dark: #4953B8;
		--blue-twitter: #2AA9E0;
	}

	* {
		margin: 0;
		border: 0;
		outline: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		background: var(--background);
		color: var(--text);
	}

	body, input, textarea, button {
		font: 400 1rem "Inter", sans-serif;
	}

	button {
		cursor: pointer;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

`
export { GlobalStyles }