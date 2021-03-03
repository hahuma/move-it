import Head from 'next/head'
import { GetServerSideProps } from 'next'

import { Container } from '../styles/pages/Home';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile/';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ChallengeBox } from '../components/ChallengeBox';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';

interface HomeProps {
  level: number;
  challengesCompleted: number;
  currentExperience: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider {...props}>
      <Container>
        <Head>
          <title>Home | move.it</title>
        </Head>
        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </Container>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async function (ctx) {
  const { level, challengesCompleted, currentExperience } = ctx.req.cookies
  console.log({ level, challengesCompleted, currentExperience })
  return {
    props: {
      level: Number(level),
      challengesCompleted: Number(challengesCompleted),
      currentExperience: Number(currentExperience)
    }
  }
}

