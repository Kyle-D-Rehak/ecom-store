import { useState, useEffect } from 'react';
import { Spinner, SimpleGrid, Box } from '@chakra-ui/react'
import ProductCard from "./ProductCard";


const Shop = (props) => {
    const [ data, setData ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then(data => {
                setData(data);
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [])

    return (
        loading
            ? <Box marginTop='6rem'>
                <Spinner
                  thickness='4px'
                  speed='0.65s'
                  emptyColor='gray.200'
                  color='blue.500'
                  size='xl'
                />
              </Box>
            : <SimpleGrid minChildWidth='sm' gap={6} margin='5rem 2rem 2rem 4rem' >
                {data.map(product => {
                    return (
                        <ProductCard 
                            key={product.id}
                            id={product.id}
                            src={product.image}
                            heading={product.title}
                            disc={product.description}
                            price={product.price}
                            setCart={props.setCart}
                            cart={props.cart}
                        />
                    )})
                    }
              </SimpleGrid>

        
    )
}

export default Shop 