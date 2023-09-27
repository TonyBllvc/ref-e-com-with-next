import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'
import { Box, Button, Heading, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Products() {
    const [products, setProducts] = useState([]);
    const router = useRouter()

    useEffect(() => {
        axios.get('/api/products').then(response => {
                setProducts(response.data);
            });
    }, []);


    return (
        <Layout>
            <Link href='/products/new'>
                <Button px={['4', '6', '10', '12']} fontSize={['sm', 'md', 'xl', '2xl']} variant='solid' color='whiteAlpha.900' colorScheme='teal' bg='teal.700'>
                    Add new product
                </Button>
            </Link>

            <TableContainer mt='30px'>
                <Table>
                    {/* <Heading background='blue.100' py='5px' pl='20px' fontSize='xl' color='teal.900' mb='5px'>
                        Product Name
                    </Heading> */}
                    <Thead>
                        <Tr display='flex' width='100%' flexDirection='row' backgroundColor='whiteAlpha.900'   >
                            <Th width='100%' py={2.5} display='flex' justifyContent='start' fontSize={['8', '12', '16']} overflow='hidden' textOverflow='ellipsis' wordBreak='break-all' background='blue.100'>
                                <Box width={['100%', '100%', '100%']} display='flex' alignItems='center' color='teal.900' fontSize={['10', '11', '15', '17']} >
                                    Product Name
                                </Box>
                            </Th>
                        </Tr>
                    </Thead>
                    {products && products.map(items => (
                        <Tbody width='100%'>
                            <Tr display='flex' width='100%' flexDirection='row' backgroundColor='whiteAlpha.900'   >
                                <Td width='100%' py={2.5} display='flex' justifyContent='start' overflow='hidden' textOverflow='ellipsis' wordBreak='break-all'>
                                    <Box width={['100%', '100%', '100%']} display='flex' alignItems='center' fontSize={['10', '11', '15', '17']} >
                                        { items.title }
                                    </Box>
                                </Td>
                                <Td width='100%' py={2.5} display='flex' justifyContent='center' fontSize={['8', '12', '16']} overflow='hidden' textOverflow='ellipsis' wordBreak='break-all'>
                                    <Button width={['100%', '100%', '80%', '70%']} variant='solid' color='whiteAlpha.900' colorScheme='teal' bg='teal.700' px={['4', '6', '10', '12']} onClick={() => router.push('/products')} fontSize={['sm', 'md', 'xl', '2xl']}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                        </svg>

                                        Edit
                                    </Button>
                                </Td>
                                <Td width='100%' py={2.5} display='flex' justifyContent='center' fontSize={['8', '12', '16']} overflow='hidden' textOverflow='ellipsis' wordBreak='break-all'>
                                    <Button width={['100%', '100%', '80%', '70%']} variant='solid' color='whiteAlpha.900' colorScheme='red' bg='red.700' px={['4', '6', '10', '12']} fontSize={['sm', 'md', 'xl', '2xl']}>

                                        Delete
                                    </Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    ))}
                </Table>
            </TableContainer>
        </Layout>
    )
}
