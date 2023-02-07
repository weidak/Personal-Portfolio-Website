import { Heading, HStack, Box, Image, Text, Container } from "@chakra-ui/react";

export default function Introduction () {

    const helloWorld = "Hello, I'm Weida"

    return (
        <Box as="section">
            <HStack justify={"center"} spacing={50} >
                <Container>
                    <Heading>
                        {helloWorld}
                    </Heading>
                    <Text>
                        A penultimate Computer Engineering student at the National University of Singapore. 
                    </Text>
                </Container>
                <Box maxWidth="30%" display={{ base: 'none', md:'center'}}>
                    <Image src="https://i.imgur.com/gKJSU0D.png" alt="profile pic"/>
                </Box>
            </HStack>
        </Box>
    );
}