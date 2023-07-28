import About from "@/components/about";
import Introduction from "@/components/introduction";
import Navbar from "@/components/navbar";
import SkillSet from "@/components/skillsets";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import { 
  Box, 
  Flex, 
  useColorModeValue, 
  Container, 
  Stack,
  Divider,
  Center,
  Fade
} from "@chakra-ui/react"
import { useState, useEffect } from "react";


export default function Home() {

  
  // const observer = new IntersectionObserver((entries) => {
  //   const entry = entries[0]
  // })


  const formBackground = useColorModeValue("gray.50", "gray.900");
  const theme = {
    fontColor: 'gray.100',
    background: 'gray.900',
  }
  const fontColor = 'gray.100' 

  const onOpen = true;

  // const [scrollPosition, setScrollPosition] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollPosition(window.scrollY);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <>
      {/* <Navbar /> */}
      <Box bgGradient='linear(to-t, cyan.800, gray.900)'>
      <Fade
        in={onOpen}
      >
      <Container
        maxWidth="100%"
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        pt="20vh"
        minHeight="100vh" 
      >
        <Stack spacing={"20vh"}>
          <Introduction fontColor={theme.fontColor}/>
          <About fontColor={theme.fontColor}/>
          <SkillSet fontColor={theme.fontColor}/>
          <Center><Divider w="70%" orientation="horizontal"/></Center>
          <Experience/>
          <Projects theme={theme} />
        </Stack>
      </Container>
      </Fade>
      </Box>
    </>
  );
}