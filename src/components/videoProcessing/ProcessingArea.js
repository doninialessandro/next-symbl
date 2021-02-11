/* eslint-disable no-undef */
import { Box, Flex, Image, Heading, Stack } from '@chakra-ui/react'

import SelectVideo from './SelectVideo'
import ProcessingData from './ProcessingData'

const ProcessingArea = ({ title, subtitle, image }) => (
  <>
    <Flex
      align="center"
      justify={{ base: 'center', md: 'space-around', xl: 'space-between' }}
      direction={{ base: 'column-reverse', md: 'row' }}
      wrap="no-wrap"
      minH="70vh"
      px={8}
      mb={16}
    >
      <Box w={{ base: '80%', sm: '60%', md: '50%' }} mb={{ base: 12, md: 0 }}>
        <Image src={image} size="100%" />
      </Box>
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
          {title}
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
          {subtitle}
        </Heading>
        <SelectVideo />
      </Stack>
    </Flex>
    <Flex
      justify={{ base: 'start', md: 'start' }}
      direction={{ md: 'row' }}
      wrap="no-wrap"
      minH="70vh"
      w="100%"
      px={8}
      mb={16}
    >
      <ProcessingData />
    </Flex>
  </>
)

ProcessingArea.defaultProps = {
  title: '',
  subtitle: '',
  image: '',
}

export default ProcessingArea
