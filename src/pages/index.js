import {
  Container,
  Main,
  Hero,
  Header,
  ProtectionPage,
  VideoProcessing,
} from '../components'

const Index = () => (
  <Container>
    <Main>
      <ProtectionPage>
        <Header />
        <Hero
          title="Video Analysis"
          subtitle="Contextual Video Analysis app to process a conversation from a video and rendering transcripts to screen using Symbl and Next.js 📹 🔉 📝."
          image="/images/wave.jpg"
          ctaText="Source code"
          ctaLink="https://github.com/doninialessandro/next-symbl"
          disclaimer="Illustrative purposes only"
        />
        <VideoProcessing
          title="Run Analysis"
          subtitle="Select a video to process 📹."
          image="/images/upload.svg"
        />
        <br />
      </ProtectionPage>
    </Main>
  </Container>
)

export default Index
