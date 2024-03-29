import { Input } from '@/components/Form'
import { Button, Flex, Stack,Image } from '@chakra-ui/react'
import { Inter } from 'next/font/google'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import { useRouter } from 'next/router'

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
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema)
  })

  const handleSignIn: SubmitHandler<SignInFormData> = async(data) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    await router.push('/dashboard');
  }
  return (
    <Flex width="100vw" height="100vh" align="center" justify="center" direction="column">
      <Stack>
        <Image src="logo.svg"  alt="Pacto Energia"/>
        <Flex as="form" width="100%" maxWidth={360} bg="blue.800" p="8" borderRadius={8} flexDir="column" onSubmit={handleSubmit(handleSignIn)}>

          <Stack spacing="4">
            <Input label="E-mail" type="email" {...register('email')} error={formState.errors.email} />
            <Input label="Senha" type="password" {...register('password')} error={formState.errors.password} />
          </Stack>
          <Button type='submit' mt="6" size="lg">Entrar</Button>
        </Flex>
      </Stack>
    </Flex>
  )
}
