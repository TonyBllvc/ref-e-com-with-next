import { useState } from 'react'
import { useToast } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export const useSignUp = (url) => {
    const [error, setError] = useState(null)
    const [pending, setPending] = useState(false)
    const router = useRouter()
    const toast = useToast()

    const signup = async (name, email, password) => {

        setPending(true)
        setError(null)

        // add picture later 
        if (!name || !email || !password) {
            toast({
                title: 'Please fill all the Fields!',
                status: 'warning',
                duration: 5000,
                isClosable: true,
                position: "top",
            })
            return
        }

        const details = { name, email, password }
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
                    duration: 4000,
                    isClosable: true,
                    position: "top",
                })
                return
            }
            if (res.ok) {
                toast({
                    title: 'Login Successful!',
                    description:  email + " Has signed up successfully",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                    position: "top",
                })
                // save user to local storage
                router('/login')
            }

            setPending(false)
            return
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

    return { signup, pending, error, setPending }
}

// export default useSignUp;
