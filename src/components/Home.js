import hero from '../img/hero.jpg';
import { Link as ReactLink } from "react-router-dom";
import { Flex, Image, Button, LinkBox, LinkOverlay, Heading } from '@chakra-ui/react'

const Home = () => {
    return (
        <Flex position='absolute' top='0' left='0' zIndex='-1' height='100vh' width='100vw' flexDir='column' justifyContent='center'>
            <Image position='absolute' top='0' left='0' zIndex='-2' height='100vh' width='100vw' objectFit='cover' src={hero} alt='' />
            <Heading as='h2' textShadow='1px 1px 4px gray'size='4xl' color='white' margin='2rem'>Shop 'til you drop!</Heading>
            <LinkBox>
                <LinkOverlay as={ReactLink} to='/shop'>
                    <Button size='lg' colorScheme='blackAlpha' >Shop now!</Button>
                </LinkOverlay>
            </LinkBox>
        </Flex>
    )
}

export default Home 