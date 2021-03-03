
import { ModalContainer, ModalOrverlay } from '../../styles/components/LevelUpModal';
import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

export function LevelUpModal() {
	const { level, closeModal } = useContext(ChallengesContext)



	return(
		<ModalOrverlay>
			<ModalContainer>
				<header>{level}</header>

				<strong>Parabéns</strong>
				<p>Você alcançou um novo level.</p>

				<button type="button" onClick={closeModal} >
					<img src="icons/close.svg" alt="Fechar modal" />
				</button>
			</ModalContainer>
		</ModalOrverlay>
	)
}