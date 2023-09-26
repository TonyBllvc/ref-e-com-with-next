import React from 'react'
import Layout from '../../components/Layout'
import { Heading, Input, Stack, Textarea } from '@chakra-ui/react'

export default function New() {
    return (
        <Layout>
            <Stack spacing={3}>
                <Heading color='teal.600' mb='5px'>
                    New Product
                </Heading>
                <Input mb='4px' placeholder='Product name' size='md' />
                <Textarea placeholder='Description' />
            </Stack>
        </Layout>
    )
}
