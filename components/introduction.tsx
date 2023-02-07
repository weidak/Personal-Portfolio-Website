import { Heading, HStack, Box, Image, Text } from "@chakra-ui/react";

export default function Introduction () {

    const helloWorld = "Hello, I'm Weida"

    return (
        <Box as="section">
            <HStack justify={"center"} pt="10vh" spacing={50}>
                <Box>
                    <Heading>
                        {helloWorld}
                    </Heading>
                    <Text noOfLines={2}>
                        A penultimate Computer Engineering student at the National University of Singapore. 
                    </Text>
                </Box>
                <Box maxWidth="30%">
                    <Image src="https://i.imgur.com/gKJSU0D.png" alt="profile pic"/>
                </Box>
            </HStack>
        </Box>);
}