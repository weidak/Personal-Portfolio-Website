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
    Link,
    Button,
    useColorModeValue,
  } from "@chakra-ui/react";
  import { useRef, useEffect, useState } from "react";
  import { FiMenu } from "react-icons/fi";
  
  export default function Navbar() {
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
        position="sticky" // Add "position: sticky" here
        top="0" // Always set "top" to "0" for sticky behavior
        zIndex={999}
      >
        <Box
          bg="bg-surface"
          background={useColorModeValue("gray.50", "gray.900")}
          boxShadow={"0px 4px 6px rgba(0, 0, 0, 0.1)"}
        >
          <Container py={{ base: "4", lg: "5" }}>
            <HStack spacing="10" justify="space-between">
              <Image src="https://i.imgur.com/VhIvSNs.png" width={"70px"} />
              {isDesktop ? (
                <Flex justify="space-between" flex="1">
                  <ButtonGroup variant="link" spacing="8">
                    {navData.map((item, i) => (
                      <Link key={i} href={item.link}>
                        {" "}
                        {item.label}{" "}
                      </Link>
                    ))}
                  </ButtonGroup>
                </Flex>
              ) : (
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
                    size={"xs"}
                  >
                    <DrawerContent>
                      <Stack spacing="1vh" pt="2vh">
                        {navData.map((item, i) => (
                          <Link key={i} href={item.link}>
                            {" "}
                            <Button w="100%">{item.label} </Button>
                          </Link>
                        ))}
                      </Stack>
                    </DrawerContent>
                  </Drawer>
                </>
              )}
            </HStack>
          </Container>
        </Box>
      </Box>
    );
  }
  