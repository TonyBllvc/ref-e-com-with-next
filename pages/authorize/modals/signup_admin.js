import React, { useState } from 'react'
import { useSignUp } from '../../../hooks/useSignup'
import { useToast } from '@chakra-ui/react'

export default function signup_admin() {
    const [show, setShow] = useState(false)
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    // const [role, setRole] = useState('Admin')
    const [password, setPassword] = useState('')
    const [confirm_password, setConfirmPassword] = useState('')

    const { signup, pending, error, } = useSignUp('/api/auth/create')



    const toast = useToast()


    const handleShowHide = () => {
        setShow(!show)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (password !== confirm_password) {
            toast({
                title: 'Confirm password properly',
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: "top",
            })
            return
        }
        await signup(name, email, password)
    }

    return (
        <form onSubmit={handleSubmit} >
            <VStack spacing='5px' color='black' >

                <FormControl id='admin-name' isRequired>
                    <FormLabel color='black' fontSize={['12.5', '13', '15', '16']}>
                        Name:
                    </FormLabel>
                    <Input height={['35px', '35px', '40px', '40px']} type='text' bg='green.100' placeholder='i.e. Engr.' value={name} onChange={(e) => setName(e.target.value)} />
                </FormControl>
                {/* <FormControl id='admin-role' isRequired>
                    <FormLabel color='black' fontSize={['12.5', '13', '15', '16']}>
                        Role:
                    </FormLabel>
                    <Input height={['35px', '35px', '40px', '40px']} type='text' bg='green.100' placeholder='Enter your role id' value={role} onChange={(e) => setRole(e.target.value)} isDisabled />
                </FormControl> */}

                <FormControl id='admin-email' isRequired>
                    <FormLabel color='black' fontSize={['12.5', '13', '15', '16']}>
                        Email:
                    </FormLabel>
                    <Input height={['35px', '35px', '40px', '40px']} type='email' bg='green.100' placeholder='Enter your e-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
                </FormControl>
                <FormControl id='admin-password' isRequired>
                    <FormLabel color='black' fontSize={['12.5', '13', '15', '16']}>
                        Password:
                    </FormLabel>
                    <InputGroup>

                        <Input height={['35px', '35px', '40px', '40px']} type={show ? 'text' : 'password'} bg='green.100' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleShowHide}>
                                {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </FormControl>

                <FormControl id='admin-confirm-password' isRequired>
                    <FormLabel color='black' fontSize={['12.5', '13', '15', '16']}>
                        Confirm Password:
                    </FormLabel>
                    <InputGroup>

                        <Input height={['35px', '35px', '40px', '40px']} type={show ? 'text' : 'password'} bg='green.100' placeholder='Confirm your password' value={confirm_password} onChange={(e) => setConfirmPassword(e.target.value)} />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleShowHide}>
                                {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </FormControl>

                {/* <FormControl id='picture'>
            <FormLabel color='black'>
                Upload Profile Picture:
            </FormLabel>
            <Input type='file' bg='green.100' placeholder='Profile picture' onChange={(e) => postDetails(e.target.files[0])} />
        </FormControl> */}

                <Button height={['35px', '35px', '40px', '40px']} color='green.100' colorScheme='whatsapp' width='100%' style={{ marginTop: 15 }} type='submit' isLoading={pending} >
                    Sign Up
                </Button>
                {error && <div className="text-red-700 font-bold mt-3 text-center border-red-700 border-solid border-2"> {error} </div>}

            </VStack>
        </form>
    )
}
