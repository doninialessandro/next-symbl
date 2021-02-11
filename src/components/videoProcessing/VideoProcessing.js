/* eslint-disable jsx-a11y/media-has-caption */
import { useState, useEffect } from 'react'
import { Flex, Heading, Stack } from '@chakra-ui/react'

import Video from './Video'
import SelectVideo from './SelectVideo'
import Result from './Result'

import { useAuth } from '../../hooks/useAuth'

const ProcessingArea = ({ title, subtitle, image }) => {
  const [file, setFile] = useState('')
  const [videoSrc, setVideoSrc] = useState('')
  const { token } = useAuth()

  useEffect(() => {
    if (file) {
      const src = URL.createObjectURL(new Blob([file], { type: 'video/mp4' }))
      setVideoSrc(src)
    }
  }, [file])

  const handleSelectedFile = selectedFile => {
    setFile(selectedFile)
  }

  const submitFileForProcessing = fileToProcess => {
    fetch('https://api.symbl.ai/v1/process/video', {
      method: 'POST',
      headers: {
        'x-api-key': token,
        'Content-Type': 'video/mp4',
      },
      body: fileToProcess,
      json: true,
    })
      .then(rawResult => rawResult.json())
      .then(result => {
        console.log(result)
      })
  }

  return (
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
        <Video image={image} videoSrc={videoSrc} />

        <Stack
          spacing={4}
          w={{ base: '80vw', md: '30vw' }}
          align={['center', 'center', 'flex-start', 'flex-start']}
          mb={{ base: 12, md: 0 }}
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
          <SelectVideo
            submitFile={() => submitFileForProcessing(file)}
            handleSelectedFile={handleSelectedFile}
          />
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
        <Result />
      </Flex>
    </>
  )
}

ProcessingArea.defaultProps = {
  title: '',
  subtitle: '',
  image: '',
}

export default ProcessingArea
