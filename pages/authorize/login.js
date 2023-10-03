import { Box, Container, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import LogAdmin from './modals/LogAdmin'


export default function Login({signIn}) {
    return (
        <Container maxW='xl' centerContent >
            <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' textAlign='center' p={4} bg='white' w='100%' m='40px 0 15px 0' borderRadius='lg' borderWidth='1px' >
                Logo
                <Box bg='whatsapp.300' w='100%' mt='20px' p={4} color='black' borderRadius="lg" borderWidth="1px" >
                    <Tabs variant='soft-rounded' colorScheme='gray' >
                        <TabList mb='1em'>
                            <Tab width='50%' fontSize={['12.5', '13', '15', '16']}>
                                Login
                            </Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <LogAdmin />
                            </TabPanel>
                        </TabPanels>

                        <Box display='flex' width='100%' justifyContent='center' alignItems='center' >
                        <Button onClick={() => signIn('google')} variant='ghost' colorScheme='blue' bg='whiteAlpha.800'>
                            Login with google
                        </Button>
                        </Box>
                    <Box display='flex' width='100%' justifyContent='center' alignItems='center' >
                        <Text fontFamily='sans-serif' pr='10px' fontSize={['14', '15', '17', '20']}>
                            To create an account
                        </Text>
                        {/* <Link to='/sign_up' className='font-serif text-blue-700 font-semibold text-md base:text-lg'>
                Sign Up
              </Link> */}
                    </Box>
                </Tabs>
            </Box>
        </Box>

        </Container >
    )
}
