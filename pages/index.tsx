import About from "@/components/about";
import Introduction from "@/components/introduction";
// import Navbar from "@/components/navbar";
import SkillSet from "@/components/skillsets";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Navbar from "@/components/navbar";
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
import { useInView, motion, AnimatePresence } from "framer-motion";

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
    containerMargins: '10px'
  }

  return (
    <Box bg={"black"}>
      <Box
        id="main"
        bgGradient={theme.bgGradient}
      >
        <Container maxWidth={["100%", "80%", "70%", "130vh"]}>

          <Navbar />
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
              <Introduction theme={theme}/>
            </Fade>
            <About theme={theme}/>
            <SkillSet ref={aboutRef} theme={theme}/>
            <Center><Divider mt="10" orientation="horizontal"/></Center>
            <Experience theme={theme} ref={experienceRef} />
            <Projects theme={theme} />
            <Box boxSize="xxs"><Text fontSize="10" color={theme.fontColor} align={'center'} mb='10vh'>This website was built by me in 2023 using NextJS and ChakraUI.</Text></Box>
            </Stack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}
