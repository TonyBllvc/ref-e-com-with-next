import React, { useState } from 'react'
import { signIn } from "next-auth/react";
import { useLogin } from '../../../hooks/useLogin'

export default function LogAdmin() {
    const [show, setShow] = useState(false)
    const [email, setEmail] = useState('')
    // const [role, setRole] = useState('Admin')
    const [password, setPassword] = useState('')

    const { pending, error } = useLogin()


    const handleSubmit = async (e) => {
        e.preventDefault()

        await signIn("authorize_use")
        // await login(email, password)
    }

    const handleShowHide = () => {
        setShow(!show)
        // this i so the password is not changed
        // setGuestShow(guestShow)
    }

    return (
        <form onSubmit={handleSubmit}>
            <VStack spacing='5px' color='black' >

                <FormControl id='login-email' isRequired>
                    <FormLabel color='black' fontSize={['12.5', '13', '15', '16']}>
                        Email:
                    </FormLabel>
                    <Input height={['35px', '35px', '40px', '40px']} type='email' bg='green.100' placeholder='Enter your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </FormControl>

                {/* <FormControl id='login-role' isRequired>
                    <FormLabel color='black' fontSize={['12.5', '13', '15', '16']}>
                        Role:
                    </FormLabel>
                    <Input height={['35px', '35px', '40px', '40px']} type='text' bg='green.100' placeholder='Enter your Email' value={role} onChange={(e) => setRole(e.target.value)} isDisabled />
                </FormControl> */}

                <FormControl id='login-password' isRequired>
                    <FormLabel color='black' fontSize={['12.5', '13', '15', '16']}>
                        Password:
                    </FormLabel>
                    <InputGroup>

                        <Input height={['35px', '35px', '40px', '40px']} type={show ?
                            'text' : 'password'} bg='green.100' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' fontSize={['12.5', '13', '15', '16']} onClick={handleShowHide}>
                                {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </FormControl>

                {/* Button for Log in */}
                <Button height={['35px', '35px', '40px', '40px']} color='green.100' colorScheme='whatsapp' width='100%' style={{ marginTop: 15 }} type='submit' isLoading={pending}  >
                    Login
                </Button>
                {error && <div className="text-red-700 font-bold mt-3 text-center border-red-700 border-solid border-2"> {error} </div>}


            </VStack>
        </form>
    )
}
