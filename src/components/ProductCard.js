import { 
    Flex, 
    Spacer,
    Image, 
    Heading, 
    Text, 
    Divider, 
    Button, 
} from '@chakra-ui/react';

const ProductCard = (props) => {

    const addItem = (props) => {
        console.log('initial value');
        console.log(props.cart);
        let wasUpdated = false;
        const newCart = [...props.cart];
        newCart.forEach(item => {
          console.log('item');
          console.log(item);
          if(item.id === props.id) {
            item.qty++;
            props.setCart(newCart);
            wasUpdated = true;
          }
        });
        if(!wasUpdated){
          newCart.push({id: props.id, src: props.src, heading: props.heading, price: props.price, qty: 1});
          props.setCart(newCart);
        }
        console.log('result');
        console.log(newCart);
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
                <Button variant='ghost' colorScheme='blue' onClick={() => addItem(props)}>
                  Add to cart
                </Button>
        </Flex>
    )
}

export default ProductCard