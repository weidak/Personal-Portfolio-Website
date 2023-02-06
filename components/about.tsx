import { Box, Container, HStack, Text, Image } from "@chakra-ui/react";

export default function About() {
    return (
        <Container as="section">
          <HStack p="10px">
            <Box width="70%">
              <Text>
                Hello, I am Weida, currently a penultimate student in Computer Engineering at the National University of Singapore. 
                
                This is my second year studying in the school and I have indulged myself in various aspects of NUS in the past 2 years. As an individual passionate about technology, I have always been curious and like to explore new things in the field. As such, I have engaged in web-development projects as well as made a telegram bot out of my free time. Through these experiences, I have gained valuable software engineering skills. This aside, I was also the Vice-Captain for my Hall's Floorball team and like to play Ultimate Frisbee as well.
              </Text>
            </Box>
            <Box w="30%">
              <Image src="https://i.imgur.com/gKJSU0D.png" alt="profile pic"/>
            </Box>
          </HStack>
        </Container>
        );
}