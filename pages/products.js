import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'
import { Button } from '@chakra-ui/react'
import axios from 'axios';

export default function Products() {
    const [products,setProducts] = useState([]);

    // useEffect(() => {
    //   axios.get('/api/products')
    //   .then(response => {
    //     setProducts(response.data);
    //   });
    // }, []);

    return (
        <Layout>
            <Link href='/products/new'>
                <Button px={['4', '6', '10', '12']} fontSize={['sm', 'md', 'xl', '2xl']} variant='solid' color='whiteAlpha.900' colorScheme='teal' bg='teal.700'>
                    Add new product
                </Button>
            </Link>
        </Layout>
    )
}
