import {
  Box,
  Flex,
  Text,
  Heading,
  VStack,
  HStack,
  Icon,
  Divider,
  Link,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
} from "react-icons/ai";

interface AboutProps {
  theme: any;
}

const about1 =
  "I am currently pursuing a Bachelor of Engineering in Computer Engineering at the National University of Singapore, where I have learned the fundamentals of AI, data structures, databases, cloud computing and data engineering with a main focus on software engineering. I also had the opportunity to study Computer Science at the University of Melbourne for one semester as part of an exchange program. As an individual that has been passionate about technology, I have always been curious and like to explore new things within the field. As such, I have engaged in web-development projects as well as created a Telegram bot in my free time.";
const about2 =
  "Setting aside technical aspects, I engage in physical activities whenever possible. I served as the Vice Captain for my Hall's Floorball team and participated in other sports such as Muay Thai and Ultimate Frisbee with my most recent hobby being Bouldering! These activities provide me with a break from the otherwise stationary lifestyle that most Software Engineers face and offer opportunities to make new friends.";

const About: ForwardRefRenderFunction<HTMLDivElement, AboutProps> = (
  { theme },
  ref
) => {
  const isDesktop = useBreakpointValue({ base: false, md: true, lg: true });

  return (
    <Box
      ref={ref}
      as="section"
      id="about"
      color={theme.fontColor}
      mb="10vh"
      m={theme.containerMargins}
    >
      <Flex justify="center">
        <Stack direction={"column"}>
          <Heading as="u" size="lg" mb="10">
            About myself
          </Heading>
          {isDesktop ? (
            <Stack spacing={20} flexDir={"row"}>
              <VStack spacing={10} align="right" justify={"center"}>
                <HStack>
                  <Link href="https://www.linkedin.com/in/tay-weida/">
                    <Icon as={AiOutlineLinkedin} boxSize={"2.5em"} />
                  </Link>
                </HStack>
                <HStack>
                  <Link href="https://www.github.com/weidak">
                    <Icon as={AiOutlineGithub} boxSize={"2.5em"} />
                  </Link>
                </HStack>
                <HStack>
                  <Link href="mailto: weida.tay99@gmail.com">
                    <Icon as={AiOutlineMail} boxSize={"2.5em"} />
                  </Link>
                </HStack>
              </VStack>
              <Divider orientation="vertical" />
              <VStack spacing={10} textAlign={"justify"}>
                <Text>{about1}</Text>
                <Text>{about2}</Text>
              </VStack>
            </Stack>
          ) : (
            <Stack spacing={20} flexDir={["column", "column", "row", "row"]}>
              <HStack spacing={10} align="left" justify={"center"}>
                <HStack>
                  <Link href="https://www.linkedin.com/in/tay-weida/">
                    <Icon as={AiOutlineLinkedin} boxSize={"4em"} />
                  </Link>
                </HStack>
                <HStack>
                  <Link href="https://www.github.com/weidak">
                    <Icon as={AiOutlineGithub} boxSize={"4em"} />
                  </Link>
                </HStack>
                <HStack>
                  <Link href="mailto: weida.tay99@gmail.com">
                    <Icon as={AiOutlineMail} boxSize={"4em"} />
                  </Link>
                </HStack>
              </HStack>
              <Divider orientation="horizontal" />
              <VStack spacing={4}>
                <Text textAlign={"justify"}>{about1}</Text>
                <Text textAlign={"justify"}>{about2}</Text>
              </VStack>
            </Stack>
          )}
        </Stack>
      </Flex>
    </Box>
  );
};

export default forwardRef(About);
