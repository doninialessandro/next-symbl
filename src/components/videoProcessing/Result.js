/* eslint-disable jsx-a11y/accessible-emoji */
import {
  Heading,
  Box,
  Container,
  ListItem,
  List,
  Text,
  Stack,
  Flex,
  useColorMode,
} from '@chakra-ui/react'

const Result = ({ messages }) => {
  const { colorMode } = useColorMode()
  return (
    <Flex
      align="center"
      justify={{ base: 'center', md: 'space-around', xl: 'space-between' }}
      direction={{ base: 'column', md: 'row' }}
      wrap="no-wrap"
      minH="70vh"
      px={8}
      mb={16}
    >
      <Stack
        spacing={4}
        w={{ base: '80%', md: '40%' }}
        align={['center', 'center', 'flex-start', 'flex-start']}
      >
        <Heading
          as="h1"
          size="4xl"
          pb={2}
          bgGradient="linear(to-l, #00B5D8,#4FD1C5)"
          bgClip="text"
          fontWeight="black"
          textAlign={['center', 'center', 'left', 'left']}
        >
          Processed Data
        </Heading>
        <Heading
          as="h2"
          size="md"
          color="primary.800"
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={['center', 'center', 'left', 'left']}
        >
          Transcript pulled from Conversation API 📝
        </Heading>
      </Stack>
      <Box
        w={{ base: '80%', sm: '60%', md: '50%' }}
        mb={{ base: 12, md: 0 }}
        rounded="1rem"
        shadow="2xl"
      >
        <List spacing={3} margin="2rem">
          {messages.map(message => (
            <ListItem key={message.startTime}>
              <Container>
                <Text
                  color={colorMode === 'dark' ? 'cyan' : 'cyan.700'}
                  fontSize="xs"
                >
                  {`${new Date(message.startTime).toDateString()} ${new Date(
                    message.startTime
                  ).toTimeString()}`}
                </Text>
                <Text fontSize="lg">{message.text}</Text>
              </Container>
            </ListItem>
          ))}
        </List>
      </Box>
    </Flex>
  )
}

export default Result
