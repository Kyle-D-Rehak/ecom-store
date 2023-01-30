import { useState } from 'react';
import { 
    Flex, 
    Spacer,
    Image, 
    Heading, 
    Text, 
    Divider, 
    Button, 
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from '@chakra-ui/react';

const ProductCard = (props) => {

    const [ qty, setQty ] = useState(1);

    const handleChange = (_, num) => {
      setQty(num);
    }

    const addItem = (props) => {
        let wasUpdated = false;
        const newCart = [...props.cart];
        newCart.forEach(item => {
          if(item.id === props.id) {
            item.qty += qty;
            props.setCart(newCart);
            wasUpdated = true;
          }
        });
        if(!wasUpdated){
          newCart.push({id: props.id, src: props.src, heading: props.heading, price: props.price, qty: qty});
          props.setCart(newCart);
        }
        setQty(1);
    }

    return (
        <Flex flexDirection='column' maxW='sm' boxShadow='base' borderRadius='lg' borderWidth='1px' padding='1rem' gap='.5rem'>
              <Spacer />
              <Image
                src={props.src}
                alt={props.description}
                maxH='sm'
              />
              <Spacer />
                <Heading size='md'>{props.heading}</Heading>
                <Text noOfLines={5} align='left'>
                    {props.disc}
                </Text>
                <Spacer />
                <Text color='blue.600' fontSize='2xl' align='center'>
                  {`$${props.price.toFixed(2)}`}
                </Text>
              <Divider />
              <Flex>
                <Spacer />
                <NumberInput  maxW={20} onChange={handleChange} value={qty} min={1}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <Spacer />
                <Button variant='ghost' colorScheme='blue' onClick={() => addItem(props)}>
                  Add to cart
                </Button>
              <Spacer />
              </Flex>
        </Flex>
    )
}

export default ProductCard