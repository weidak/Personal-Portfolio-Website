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
} from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react";
import { IoSunny, IoMoon } from "react-icons/io5"

export default function Home() {

  const { toggleColorMode } = useColorMode();

  const [toggle, setToggle] = useState(false);

  //Form your own colour schemes
  const formBackground = useColorModeValue("gray.50", "gray.900");

  return (
    <>
    <Navbar formBackground={formBackground} />
    <Container
        alignItems={"center"}
        justifyContent={"center"}
        maxWidth="20xl"
      >
        <Introduction/>      
        <About/>  
        <Card formBackground={formBackground}/>
        <Toggle/>
    </Container>
    </>
  )

  function Toggle() {
    return (
      <Box
        position={"fixed"}
        top={"10vh"}
        right={2}
        cursor={"pointer"}
        onClick={() => {
          toggleColorMode();
          setToggle(!toggle);
        } }
      >
        {toggle ? <IoMoon /> : <IoSunny />}
      </Box>
    );
  }
}
