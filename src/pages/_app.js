import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'

import { AuthProvider } from '../hooks/useAuth'
import theme from '../styles/theme'

const MyApp = ({ Component, pageProps }) => (
  <AuthProvider>
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  </AuthProvider>
)

export default MyApp
