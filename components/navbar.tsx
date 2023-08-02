import {
    useBreakpointValue,
    Box,
    Container,
    HStack,
    Stack,
    Image,
    Flex,
    ButtonGroup,
    IconButton,
    useDisclosure,
    Drawer,
    DrawerContent,
    Text,
    Button,
    useColorModeValue,
  } from "@chakra-ui/react";
import { useRef, useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";

interface NavbarProps {
  backgroundGradient: string
  parentHeight: number,
}

export default function Navbar({ backgroundGradient, parentHeight }: NavbarProps ) {
  // Remove the offset state as it's not needed
  // const [offset, setOffset] = useState(0);

  // Remove the useEffect for handleScroll
  // useEffect(() => {
  //     const handleScroll = () => {
  //         setOffset(window.scrollY);
  //     }
  //     // Adds the scroll event listener when component mounts
  //     window.addEventListener('scroll', handleScroll);
  //     return () => {
  //         // Removes the scroll event listener when component unmounts
  //         window.removeEventListener('scroll', handleScroll);
  //     }
  // }, []);

  // Drawer related properties
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  const navData = [
    {
      label: "About",
      link: "#about",
    },
    {
      label: "Experience",
      link: "#experience",
    },
    {
      label: "Projects",
      link: "#projects",
    },
    {
      label: "Contact",
      link: "#contact",
    },
  ];

  return (
    <Box
      as="nav"
      position="fixed" 
      top="0" 
      zIndex={1}
      width="100%"
    >
      <Box
        color={"gray.100"}
      >
        <Container py={{ base: "4", lg: "5" }}>
          <HStack spacing="10" justify="space-between">
            {/* <Image src="https://i.imgur.com/VhIvSNs.png" width={"70px"} /> */}
            {/* {isDesktop ? (
              <Flex justify="space-between" flex="1">
                <ButtonGroup variant="link" spacing="8">
                  {navData.map((item, i) => (
                    <Text as="a" key={i} href={item.link}>
                      {" "}
                      {item.label}{" "}
                    </Text>
                  ))}
                </ButtonGroup>
              </Flex>
            ) : ( */}
              <>
                <IconButton
                  ref={btnRef}
                  onClick={onOpen}
                  variant="ghost"
                  icon={<FiMenu fontSize="1.25rem" />}
                  aria-label="Open Menu"
                />
                <Drawer
                  isOpen={isOpen}
                  placement="right"
                  onClose={onClose}
                  finalFocusRef={btnRef}
                  size={"10px"}
                >
                  <DrawerContent>
                    <Flex direction={"column"} pt="2vh" justify={"center"}>
                      {navData.map((item, i) => (
                        <Text as="a" key={i} href={item.link}>
                          {item.label}
                        </Text>
                      ))}
                    </Flex>
                  </DrawerContent>
                </Drawer>
              </>
            {/* )} */}
          </HStack>
        </Container>
      </Box>
    </Box>
  );
}
  