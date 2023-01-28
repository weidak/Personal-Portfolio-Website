import { Box, Button, Flex, Heading, Input, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { useState } from "react";
import { IoSunny, IoMoon } from "react-icons/io5"

export default function Home() {

  const { toggleColorMode } = useColorMode();

  const [toggle, setToggle] = useState(false);

  //Form your own colour schemes
  const formBackground = useColorModeValue("gray.100", "gray.700");

  return (
    <Flex 
      height={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Flex
        direction={"column"}
        background={formBackground}
        p={12}
        rounded={6}
        position={"relative"}
      >
        <Heading
          mb={6}
        >
          Card 1
        </Heading>

        <Input 
          placeholder="Email" 
          variant={"outline"}
          mb={3}
          type="email"
        />

        <Input 
          placeholder="Password" 
          variant={"outline"}
          mb={3}
          type="password"
        />

        <Button colorScheme={"teal"}>
          Submit
        </Button>

        <Box
          position={"absolute"}
          top={2}
          right={2}
          cursor={"pointer"}
          onClick={() => {
            toggleColorMode();
            setToggle(!toggle);
          }}
        >
          {toggle ? <IoMoon/> : <IoSunny/>}
        </Box>
      </Flex>
    </Flex>
  )
}
