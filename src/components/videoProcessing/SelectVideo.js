import { InputGroup, useToast, Input, Button } from '@chakra-ui/react'
import { RiSendPlaneFill } from 'react-icons/ri'

const SelectVideo = ({ submitFile, handleSelectedFile }) => {
  const toast = useToast()

  return (
    <>
      <InputGroup>
        <Input
          type="file"
          id="input"
          accept="audio/*, video/*"
          onChange={e => handleSelectedFile(e.target.files[0])}
        />
      </InputGroup>
      <Button
        variant="solid"
        onClick={() => {
          toast({
            title: '👌 Well done',
            description: 'we are processing your video!',
            status: 'success',
            duration: 2000,
            isClosable: true,
          })
          return submitFile()
        }}
        leftIcon={<RiSendPlaneFill />}
      >
        Send for processing
      </Button>
    </>
  )
}

export default SelectVideo
