import { Heading, SimpleGrid, Box, Container, List } from '@chakra-ui/react'

const ProcessingData = () => (
  <div>
    <Heading
      as="h1"
      size="2xl"
      pb={2}
      bgGradient="linear(to-l, #00B5D8,#4FD1C5)"
      bgClip="text"
      fontWeight="black"
      textAlign={['center', 'center', 'left', 'left']}
    >
      Processing Data
    </Heading>
    <SimpleGrid columns={2} spacingX="40px" spacingY="20px" marginTop="1rem">
      <Box boxShadow="dark-lg" p="6" rounded="md">
        <Container margin="1rem">
          <Heading as="h4" size="md">
            Transcripts pulled from Conversation API
          </Heading>
          <List spacing={3} margin="2rem">
            Messages
          </List>
        </Container>
      </Box>
    </SimpleGrid>
  </div>
)

export default ProcessingData
