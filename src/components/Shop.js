import { useState, useEffect } from 'react';
import { Spinner, SimpleGrid } from '@chakra-ui/react'
import ProductCard from "./ProductCard";


const Shop = () => {
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
            ? <div>
                <Spinner
                  thickness='4px'
                  speed='0.65s'
                  emptyColor='gray.200'
                  color='blue.500'
                  size='xl'
                />
              </div>
            : <SimpleGrid minChildWidth='sm' gap={6}>
                {data.map(product => {
                    return (
                        <ProductCard 
                            key={product.id}
                            src={product.image}
                            heading={product.title}
                            disc={product.description}
                            price={product.price}
                        />
                    )})
                    }
              </SimpleGrid>

        
    )
}

export default Shop 