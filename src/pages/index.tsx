import { Button, Flex, Stack } from '@chakra-ui/react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Flex width="100vw" height="100vh" align="center" justify="center" direction="column">
      <Stack>
        <h1>Logo</h1>
        <Flex as="form" width="100%" maxWidth={360} bg="red" p="8" borderRadius={8} flexDir="column">

          <Stack spacing="4">
            <input name="email" type="email" />
            <input name="password" type="password" />
          </Stack>
          <Button type='submit' mt="6" size="lg">Entrar</Button>
        </Flex>
      </Stack>
    </Flex>
  )
}
