import { Box, Flex, Text, Heading, VStack, HStack, Icon, Divider, Link, Stack } from "@chakra-ui/react";
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail } from 'react-icons/ai'

interface AboutProps {
  fontColor: string,
}

const about1 = "As an individual that has been passionate about technology, I have always been curious and like to explore new things within the field. As such, I have engaged in web-development projects as well as created a Telegram bot in my free time. Through these experiences, I have gained valuable software engineering skills." 
const about2 = "Digital things aside, I love to indulge in physical activities as well. I was the Vice Captain for my Hall's Floorball team and joined other sports such as Muay Thai and Ultimate Frisbee, with the most recent hobby being Bouldering."

const About: React.FC<AboutProps> = ({ fontColor }) => {
    return (
        <Box as="section" id="about" top="-20vh" color={fontColor}>
          <Flex justify="center" >
            <Stack width={["90%", "80%", "70%", "70%"]} direction={"column"} align="center">
                <Heading as="u" size="lg" mb="10">
                    About Me
                </Heading>
                <Stack spacing={20} flexDir={['column', 'column', 'row', 'row']}>
                  <VStack spacing={10} align="left">
                    <HStack>
                      <Icon as={AiOutlineLinkedin}/>
                      <Link href="https://www.linkedin.com/in/tay-weida/">LinkedIn</Link>
                    </HStack>
                    <HStack>
                      <Icon as={AiOutlineGithub}/>
                      <Link href="https://www.github.com/weidak">GitHub</Link>
                    </HStack>
                    <HStack>
                      <Icon as={AiOutlineMail}/>
                      <Link href="mailto: weida.tay99@gmail.com">Email</Link>
                    </HStack>
                  </VStack>
                  <Divider orientation="vertical"/>
                  <VStack spacing={10}>
                      <Text>
                        {about1}
                      </Text>
                      <Text>
                        {about2}
                      </Text>
                  </VStack>
                </Stack>
            </Stack>
          </Flex>
        </Box>
        );
}

export default About;