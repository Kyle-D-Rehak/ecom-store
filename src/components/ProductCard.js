import { Card, 
         CardBody, 
         CardFooter, 
         Image, 
         Stack, 
         Heading, 
         Text, 
         Divider, 
         Button, 
         ButtonGroup 
        } from '@chakra-ui/react';

const ProductCard = (props) => {
    return (
        <Card maxW='xs'>
            <CardBody>
              <Image
                src={props.src}
                alt={props.description}
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>{props.heading}</Heading>
                <Text>
                    {props.disc}
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                  {props.price}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue'>
                  Buy now
                </Button>
                <Button variant='ghost' colorScheme='blue'>
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
        </Card>
    )
}

export default ProductCard