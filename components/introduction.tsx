import { Heading, Box, Image, Text, Flex, Stack } from "@chakra-ui/react";

export default function Introduction () {

    const hello = "Hello, I'm Weida";
    const caption = "A penultimate Computer Engineering student at the National University of Singapore."
    const displayPic = "https://i.imgur.com/gKJSU0D.png";

    return (
        <Box as="section" h="calc(100vh)" alignItems={"center"} margin={"auto"}>
            <Stack justify={"center"} align={"center"} flexDir={['column', 'column', 'row', 'row']} spacing={20}>
                <Box>
                    <Heading>
                        {hello}
                    </Heading>
                    <Text>
                        {caption}
                    </Text>
                </Box>
                <Box width={["90%", "70%", "50%", "30%"]}>
                    <Image src={displayPic} alt="profile pic"/>
                </Box>
            </Stack>
        </Box>
    );
}