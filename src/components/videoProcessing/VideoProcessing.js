/* eslint-disable jsx-a11y/media-has-caption */
import { useState, useEffect, useCallback } from 'react'
import { Flex, Heading, Stack, useToast } from '@chakra-ui/react'

import Video from './Video'
import SelectVideo from './SelectVideo'
import Result from './Result'

import { useAuth } from '../../hooks/useAuth'
import { useInterval } from '../../hooks/useInterval'

const ProcessingArea = ({ title, subtitle, image }) => {
  const [file, setFile] = useState('')
  const [videoSrc, setVideoSrc] = useState('')
  const [conversationId, setConversationId] = useState(null)
  const [jobId, setJobId] = useState(null)
  const [processStatus, setProcessStatus] = useState('not_started')
  const [processResults, setProcessResults] = useState([])

  const { token } = useAuth()
  const toast = useToast()

  const handleSelectedFile = selectedFile => {
    setFile(selectedFile)
  }

  const submitFileForProcessing = fileToProcess => {
    setProcessStatus('in_progress')
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
        setConversationId(result.conversationId)
        setJobId(result.jobId)
      })
  }

  useInterval(
    () => {
      if (jobId) {
        fetch(`https://api.symbl.ai/v1/job/${jobId}`, {
          method: 'GET',
          headers: {
            'x-api-key': token,
          },
        })
          .then(rawResult => rawResult.json())
          .then(result => setProcessStatus(result.status))
      }
    },
    1000,
    processStatus === 'completed' || (processStatus !== 'not_started' && !jobId)
  )

  const getTranscripts = useCallback(() => {
    fetch(`https://api.symbl.ai/v1/conversations/${conversationId}/messages`, {
      method: 'GET',
      headers: {
        'x-api-key': token,
        'Content-Type': 'application/json',
      },
      mode: 'cors',
    })
      .then(rawResult => rawResult.json())
      .then(result => {
        setProcessResults(result.messages)
        setConversationId(null)
        setJobId(null)
        setProcessStatus('not_started')
        toast({
          title: '🎊 Finish!',
          description: 'The processing is completed!',
          status: 'success',
          duration: 4000,
          isClosable: true,
        })
      })
  }, [conversationId, toast, token])

  useEffect(() => {
    if (file) {
      const src = URL.createObjectURL(new Blob([file], { type: 'video/mp4' }))
      setVideoSrc(src)
    }
  }, [file])

  useEffect(() => {
    if (processStatus === 'completed' && conversationId) {
      getTranscripts()
    }
  }, [getTranscripts, processStatus, conversationId])

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
            isLoading={processStatus === 'in_progress'}
          />
        </Stack>
      </Flex>
      {processResults.length > 0 && <Result messages={processResults} />}
    </>
  )
}

ProcessingArea.defaultProps = {
  title: '',
  subtitle: '',
  image: '',
}

export default ProcessingArea
