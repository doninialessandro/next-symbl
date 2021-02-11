import { Container, Main, Hero, Header } from '../components'

const Index = () => (
  <Container>
    <Main>
      <Header />
      <Hero
        title="Video Analysis"
        subtitle="Contextual Video Analysis app to process a conversation from a video and rendering transcripts to screen using Symbl and Next.js 📹 🔉 📝"
        image="/images/wave.jpg"
        ctaText="Source code"
        ctaLink="https://github.com/doninialessandro/next-symbl"
        disclaimer="Illustrative purposes only"
      />

      <br />
    </Main>
  </Container>
)

export default Index
