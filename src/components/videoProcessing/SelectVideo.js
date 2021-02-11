import { InputGroup, useToast, Input, Button } from '@chakra-ui/react'
import { RiSendPlaneFill } from 'react-icons/ri'

const SelectVideo = () => {
  const toast = useToast()

  return (
    <>
      <InputGroup>
        <Input
          type="file"
          id="input"
          accept="audio/*, video/*"
          onChange={e => console.log(e.target.files[0])}
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
        }}
        leftIcon={<RiSendPlaneFill />}
      >
        Send for processing
      </Button>
    </>
  )
}

export default SelectVideo
