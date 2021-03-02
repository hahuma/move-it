import Head from 'next/head'

import { Container } from '../styles/pages/Home';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile/';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Home | move.it</title>
      </Head>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>

        </div>
      </section>
    </Container>
  )
}
