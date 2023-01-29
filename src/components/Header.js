import { Link } from "react-router-dom";
import { Flex, Spacer, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'

const Header = (props) => {
    return (
        <Flex position='fixed' right='0' top='0' gap='2rem' width='100vw' paddingRight='2rem' paddingTop='1rem' paddingBottom='1rem' backgroundColor='white' shadow='base' zIndex='99'>
            <Spacer />
            <Link to="/">
                Home
            </Link>
            <Link to="/shop" relative="path">
                Shop
            </Link>
            <LinkBox>
                <LinkOverlay as={Link} to='/cart'>
                <Flex gap='.5rem'>

                <Link to="/cart" relative="path">
                Cart
                </Link>
                <Text backgroundColor='teal.100' width='1.5rem' borderRadius='50%'>{props.cart.length}</Text>
                </Flex>
                </LinkOverlay>
            </LinkBox>
        </Flex>
         
    )
}

export default Header 