import About from "@/components/about";
import Card from "@/components/card";
import Introduction from "@/components/introduction";
import Navbar from "@/components/navbar";
import { 
  Box, 
  Flex, 
  useColorModeValue, 
  Container, 
  Stack,
  Divider,
  Center
} from "@chakra-ui/react"
import { useState, useEffect } from "react";
import { IoSunny, IoMoon } from "react-icons/io5"
import SkillSet from "@/components/skillsets";
import Experience from "@/components/experience";

export default function Home() {

  const formBackground = useColorModeValue("gray.50", "gray.900");
  const theme = {
    fontColor: 'gray.100',
    background: 'gray.900',
  }
  const fontColor = 'gray.100' 

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
      <Box bgGradient='linear(to-t, gray.900, gray.500)'>
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
          <Center><Divider w="70%" orientation="horizontal"/></Center>
          <Card formBackground={formBackground} theme={theme} />
        </Stack>
      </Container>
    </Box>
    </>
  );
}