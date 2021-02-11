import { useState } from 'react'
import {
  Heading,
  Box,
  Flex,
  Image,
  Input,
  InputRightElement,
  InputGroup,
  Stack,
  Button,
  IconButton,
  Text,
  Link,
} from '@chakra-ui/react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { useAuth } from '../../hooks/useAuth'

import { Header } from '..'

const ProtectionPage = ({ children }) => {
  const [appId, setAppId] = useState('')
  const [appSecret, setAppSecret] = useState('')

  const [showSecret, setShowSecret] = useState(false)

  const { token, setToken } = useAuth('')

  const isLoggedIn = token

  const handleClickShowSecret = () => setShowSecret(!showSecret)

  const loginToSymbl = async () => {
    const response = await fetch('https://api.symbl.ai/oauth2/token:generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify({
        type: 'application',
        appId,
        appSecret,
      }),
    })
    const json = await response.json()
    setToken(json.accessToken)
  }

  return (
    <>
      {!isLoggedIn ? (
        <>
          <Header />
          <Flex
            align="center"
            justify={{
              base: 'center',
              md: 'space-around',
              xl: 'space-between',
            }}
            direction={{ base: 'column-reverse', md: 'row' }}
            wrap="no-wrap"
            minH="70vh"
            px={8}
            mb={16}
          >
            <Box
              w={{ base: '80%', sm: '60%', md: '50%' }}
              mb={{ base: 12, md: 0 }}
            >
              <Image src="/images/auth.svg" size="100%" />
            </Box>
            <Stack
              spacing={4}
              w={{ base: '80%', md: '40%' }}
              align={['center', 'center', 'flex-start', 'flex-start']}
            >
              <Heading
                as="h1"
                size="2xl"
                pb={2}
                bgGradient="linear(to-l, #00B5D8,#4FD1C5)"
                bgClip="text"
                fontWeight="black"
                textAlign={['center', 'center', 'left', 'left']}
              >
                Login
              </Heading>
              <Input
                placeholder="id"
                size="md"
                value={appId}
                onChange={e => setAppId(e.target.value)}
              />
              <InputGroup size="md">
                <Input
                  placeholder="secret"
                  size="md"
                  value={appSecret}
                  pr="4.5rem"
                  type={showSecret ? 'text' : 'password'}
                  onChange={e => setAppSecret(e.target.value)}
                />
                <InputRightElement>
                  <IconButton
                    icon={showSecret ? <AiFillEyeInvisible /> : <AiFillEye />}
                    size="sm"
                    rounded="md"
                    onClick={handleClickShowSecret}
                  />
                </InputRightElement>
              </InputGroup>

              <Button onClick={() => loginToSymbl()}>Login</Button>
              <Text
                fontSize="xs"
                mt={2}
                textAlign="center"
                color="primary.800"
                opacity="0.6"
                mb={20}
              >
                You need a{' '}
                <Link color="teal" href="https://symbl.ai/">
                  Symbl{' '}
                </Link>
                account to login.
              </Text>
            </Stack>
          </Flex>
        </>
      ) : (
        children
      )}
    </>
  )
}

export default ProtectionPage
