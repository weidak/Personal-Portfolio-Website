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
import { useState } from "react";
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
        maxWidth="90%"
        alignItems={"cetner"}
        justifyContent={"center"}
        flexDirection={"column"}
        pt="20vh"
      >
        <Stack spacing={20}>
          <Introduction/>      
          <About/>  
          <Card formBackground={formBackground}/>
        </Stack>
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
