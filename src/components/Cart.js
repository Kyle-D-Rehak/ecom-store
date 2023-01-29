import { Image, Text, Flex, Spacer, Divider, Container } from '@chakra-ui/react';

const Cart = (props) => {
    const thisCart = [...props.cart]

    const calculateTotal = () => {
        let total;
        if(thisCart.length > 0) {
            total = thisCart.reduce((sum, item) => {
                return sum + (item.price * item.qty);
            }, 0)
            return total;
        } else return 0;
    }
 
    let total = calculateTotal();

    return (
        <Flex flexDirection='column' alignItems='center'>
            <Flex flexDirection='column' gap='1rem'  margin='5rem auto 4rem' borderRadius='lg' borderWidth='1px' boxShadow='base' padding='1rem'>
                {thisCart.length > 0 ?
                 thisCart.map(product => {
                    return (
                        <Container>
                            <Flex align='center' gap='1rem'>
                                <Image src={product.src} alt='' boxSize='50px' />
                                <Text noOfLines={1} textAlign='left'>{product.heading}</Text>
                                <Spacer />
                                <Text whiteSpace='noWrap'>{`Qty: ${product.qty}`}</Text>
                                <Text>{`$${(product.price*product.qty).toFixed(2)}`}</Text>
                            </Flex>
                            <Divider  marginTop='1rem' />
                        </Container>
                    )
                })
                : <Text margin='3rem'>Your cart is empty!</Text>
                }
                <Container>
                    <Flex>
                        <Spacer />
                        <Text as='b'>{`Total: $${total.toFixed(2)}`}</Text>
                    </Flex>
                </Container>
            </Flex>
        </Flex>
    )
}

export default Cart 