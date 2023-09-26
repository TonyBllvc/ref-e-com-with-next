import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Stack, Textarea, VStack } from '@chakra-ui/react'
import axios from 'axios';

export default function New() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    async function handleSubmit(ev) {
        ev.preventDefault()
        const data = {
            title,
            description,
            price
        }
        axios.post('/api/products', data )
    }

    return (
        <Layout>
            <form onSubmit={handleSubmit}>
                <Container maxW='container.sm'>
                    <VStack spacing={3}>
                        <Heading color='teal.600' mb='5px'>
                            New Product
                        </Heading>
                        <FormControl >
                            <FormLabel color='teal.500'>
                                Product Name
                            </FormLabel>
                            <Input mb='4px' value={title} onChange={ev => setTitle(ev.target.value)} placeholder='Product name' size='md' />
                        </FormControl>
                        <FormControl >
                            <FormLabel color='teal.500'>
                                Description
                            </FormLabel>
                            <Textarea value={description} onChange={ev => setDescription(ev.target.value)} placeholder='Description' />
                        </FormControl>
                        <FormControl >
                            <FormLabel color='teal.500'>
                                Price in (USD)
                            </FormLabel>
                            <Input mb='4px' value={price} onChange={ev => setPrice(ev.target.value)} placeholder='Price' size='md' />
                        </FormControl>
                        <Box width='100%' display='flex' justifyContent='flex-end' >
                            <Button type='submit' px={['7', '10', '12', '14']} fontSize={['sm', 'md', 'xl', '2xl']} variant='solid' color='whiteAlpha.900' colorScheme='teal' bg='teal.700'>
                                Save
                            </Button>
                        </Box>
                    </VStack>
                </Container>
            </form>
        </Layout>
    )
}
