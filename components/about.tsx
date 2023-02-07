import { Box, Container, HStack, Text, Heading, VStack } from "@chakra-ui/react";

export default function About() {
    return (
        <Container as="section" id="about">
          <HStack p="10px">
            <VStack width="70%" >
                <Heading as="h2" size="lg">
                    About Me
                </Heading>
                <VStack spacing={10}>
                    <Text>
                    I am a highly driven individual that is curious about the technological field and like to try new things! Fostering a learning mindset has helped me grow as a person in general and improved my perspective towards problem-solving.
                    </Text>
                    <Text>
                    Digital things aside, I love to indulge in physical activities as well. I was the Vice Captain for my Hall's Floorball team and joined other sports such as Muay Thai and Ultimate Frisbee, with the most recent hobby being Bouldering.
                    </Text>
                </VStack>
            </VStack>
            <Box w="30%">
                {/* Logo or Some filler here */}
            </Box>
          </HStack>
        </Container>
        );
}