import challenges from '../../challenges.json'

import { ReactNode, createContext, useState } from 'react'

interface Challenge {
	type: "body" | "eye"
	description: string
	amount: number
}

interface ChallengesContextData {
	level: number
	currentExperience: number
	challengesCompleted: number
	activeChallenge: Challenge
	experienceToNextLevel: number
	levelUp: () => void
	startNewChallenge: () => void
	resetChallenge: () => void
}

interface ChallengesProviderProps {
	children: ReactNode
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider({ children }: ChallengesProviderProps) {
	const [level, setLevel] = useState(1)
	const [currentExperience, setCurrentExperience] = useState(0)
	const [challengesCompleted, setChallengesCompleted] = useState(0)

	const [activeChallenge, setActiveChallenge] = useState(null)

	const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

	function levelUp() {
		setLevel(level + 1)
		console.log('Novo Nível')
	}

	function startNewChallenge() {
		const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
		const challenge = challenges[randomChallengeIndex]
		setActiveChallenge(challenge)
	}

	function resetChallenge() {
		setActiveChallenge(null)
	}

	const contextValue = {
		level,
		levelUp,
		currentExperience,
		experienceToNextLevel,
		challengesCompleted,
		startNewChallenge,
		activeChallenge,
		resetChallenge
	}

	return (
		<ChallengesContext.Provider value={contextValue}>
			{children}
		</ChallengesContext.Provider>
	)
}