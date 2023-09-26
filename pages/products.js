import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'
import { Button } from '@chakra-ui/react'

export default function Products() {
    return (
        <Layout>
            <Link href='/products/new'>
                <Button variant='solid' color='whiteAlpha.900' colorScheme='teal' bg='teal.700'>
                    Add new product
                </Button>
            </Link>
        </Layout>
    )
}
