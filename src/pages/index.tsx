import { Input } from '@/components/Form'
import { Button, Flex, Stack } from '@chakra-ui/react'
import { Inter } from 'next/font/google'
import { useForm } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from "yup"

const inter = Inter({ subsets: ['latin'] })


type SignInFormData = {
  email: string
  password: string
}

const signInFormSchema = yup.object({
  email: yup.string().email('E-mail invalido').required('E-mail obrigatório'),
  password: yup.string().required('Senha obrigatória')
})
export default function Home() {

  const {register, handleSubmit} = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema)
  })
  return (
    <Flex width="100vw" height="100vh" align="center" justify="center" direction="column">
      <Stack>
        <h1>Logo</h1>
        <Flex as="form" width="100%" maxWidth={360} bg="#1F2029" p="8" borderRadius={8} flexDir="column">

          <Stack spacing="4">
            <Input  type="email" {...register('email')} />
            <Input  type="password" {...register('password')} />
          </Stack>
          <Button type='submit' mt="6" size="lg">Entrar</Button>
        </Flex>
      </Stack>
    </Flex>
  )
}
