import { useState } from 'react'
import { useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export const useLogin = (url) => {
    const router = useRouter()
    const [error, setError] = useState(null)
    const [pending, setPending] = useState(false)

    const { dispatch } = useAuthContext()
    const toast = useToast()

    const login = async (email, password) => {
        setPending(true)
        setError(null)


        // add picture later 
        if (!email || !password) {
            toast({
                title: 'Please fill all the Fields!',
                status: 'warning',
                duration: 5000,
                isClosable: true,
                position: "top",
            })
            setPending(false)
            return
        }

        const details = { email, password }

        try {
            const res = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(details),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const json = await res.json()

            if (!res.ok) {
                setPending(false)
                setError(json.error)
                toast({
                    title: json.error,
                    status: 'warning',
                    duration: 5000,
                    isClosable: true,
                    position: "top",
                })
                return
            }
            if (res.ok) {
                toast({
                    title: 'Login Successful!',
                    description: json.surname + " " + json.first_name + ' logged in successfully',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                    position: "top",
                })
                sessionStorage.setItem('user', JSON.stringify(json))
            }

            // update auth Context
            dispatch({ type: 'LOGIN', payload: json })

            setPending(false)

            router.push('/')
        } catch (error) {
            toast({
                title: error.message,
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: "top",
            })
            setPending(false)
        }
    }

    return { login, pending, error, setPending }
}

// export default useSignup;
