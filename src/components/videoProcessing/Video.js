/* eslint-disable jsx-a11y/media-has-caption */
import { useRef } from 'react'
import { Box, Image, AspectRatio } from '@chakra-ui/react'

const Video = ({ image, videoSrc }) => {
  const videoRef = useRef(null)

  return (
    <Box w={{ base: '80vw', sm: '60vw', md: '45vw' }} mr={{ base: 0, md: 20 }}>
      {videoSrc !== '' ? (
        <AspectRatio maxH="100%" w="100%" ratio={16 / 9} shadow="2xl">
          <video id="video-summary" controls src={videoSrc} ref={videoRef} />
        </AspectRatio>
      ) : (
        <Image src={image} size="100%" p={20} />
      )}
    </Box>
  )
}

export default Video
