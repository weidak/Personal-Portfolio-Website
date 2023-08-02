import About from "@/components/about";
import Introduction from "@/components/introduction";
import Navbar from "@/components/navbar";
import SkillSet from "@/components/skillsets";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import { 
  Box, 
  Text, 
  useColorModeValue, 
  Container, 
  Stack,
  Divider,
  Center,
  Fade,
  ScaleFade,
  Flex
} from "@chakra-ui/react"

import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";

export default function Home() {

  const aboutRef = useRef(null);
  const aboutRefInView = useInView(aboutRef);

  const experienceRef = useRef(null);
  const experienceRefInView = useInView(experienceRef);

  const projectRef = useRef(null);
  const projectRefInView = useInView(projectRef);

  const theme = {
    fontColor: 'gray.100',
    background: 'gray.900',
    bgGradient: 'linear(to-t, cyan.800, gray.900)',
  }


  useEffect(() => {
    console.log('element in view!', aboutRefInView);
  })

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
      const handleScroll = () => {
          setScrollPosition(window.scrollY);
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
          window.removeEventListener("scroll", handleScroll);
      }
  })

  return (
    <>
      <Box
        id="main"
        bgGradient={theme.bgGradient}
      >
        <Container maxWidth={["100%", "70%", "70%", "130vh"]}>
          <Flex
            alignItems={"center"}
            justify={"center"}
            flexDirection={"column"}
            minHeight="100vh" 
            display="flex"
          >
            <Stack spacing={"10vh"}>
            <Fade
              in={true}
            >
              <Introduction fontColor={theme.fontColor}/>
            </Fade>
            <ScaleFade in={aboutRefInView} initialScale={0.90}>
              <About ref={aboutRef} fontColor={theme.fontColor}/>
              <SkillSet ref={aboutRef} fontColor={theme.fontColor}/>
            </ScaleFade>
              <Center><Divider mt="10" orientation="horizontal"/></Center>
            <ScaleFade in={experienceRefInView}>
                <Experience ref={experienceRef} />
            </ScaleFade>
              <Projects theme={theme} />
              <Box boxSize="xxs"><Text fontSize="10" color={theme.fontColor} align={'center'} mb='10vh'>This website was built by me in 2023 using NextJS and ChakraUI.</Text></Box>
            </Stack>
          </Flex>
        </Container>
      </Box>
    </>
  );
}