import About from "@/components/about";
import Card from "@/components/card";
import Introduction from "@/components/introduction";
import Navbar from "@/components/navbar";
import ScrollIndicator from "@/components/scrollindicator";
import { 
  Box, 
  useColorMode, 
  useColorModeValue, 
  Container, 
  Stack
} from "@chakra-ui/react"
import { useState, useEffect } from "react";
import { IoSunny, IoMoon } from "react-icons/io5"

export default function Home() {

  const { toggleColorMode } = useColorMode();

  const [toggle, setToggle] = useState(false);

  //Form your own colour schemes
  const formBackground = useColorModeValue("gray.50", "gray.900");

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
    <Box>
      <Toggle/>
      <Navbar formBackground={formBackground} toggle={toggle}/>
      <Container
          maxWidth="90%"
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
          pt="20vh"
        >
          <Stack>
            <Introduction/>      
            <About/>  
            <Card formBackground={formBackground}/>
          </Stack>
      </Container>
    </Box>
  )

  function Toggle() {
    return (
      <Box position="fixed">      
        <Box
          position="absolute"
          // alignContent={"flex-end"}
          bottom={0}
          right={0}
          cursor={"pointer"}
          onClick={() => {
            toggleColorMode();
            setToggle(!toggle);
          } }
          top="95vh"
          left="50%"
          transform="translateY(-50%, -50%)"
        >
          {toggle ? <IoMoon /> : <IoSunny />}
        </Box>
      </Box>
    );
  }
}
