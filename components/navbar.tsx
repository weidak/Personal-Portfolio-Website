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
} from "@chakra-ui/react";
import { useRef, useEffect, useState } from "react";
import { FiMenu } from 'react-icons/fi'

interface NavBarProps {
    formBackground: any,
    toggle: boolean
}

// export default function Navbar({formBackground}: any, {toggle}: Toggle)  {
    export default function Navbar(props: NavBarProps)  {
    const isDesktop = useBreakpointValue({ base: false, lg: true});

    // Drawer related properties
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
    ]

    return (
        <Box 
            as="nav" position="fixed" width={"100%"} background={props.formBackground} zIndex="sticky"
        >
           <Box bg="bg-surface" boxShadow="sm">
                <Container py={{ base: '4', lg: '5'}}>
                    <HStack spacing="10" justify="space-between">\
                    { props.toggle ? (
                        <Image src="https://i.imgur.com/VhIvSNs.png" width={"70px"}/>
                    ) : (
                        <Image src="https://i.imgur.com/zH4cvJv.png" width={"70px"}/>
                    )}                    
                    { isDesktop ? (
                        <Flex justify="space-between" flex="1">
                            <ButtonGroup variant="link" spacing="8">
                                {navData.map((item, i) => (
                                    <Link key={i} href={item.link}> {item.label} </Link>
                                ))}
                            </ButtonGroup>
                        </Flex>
                    ) : (
                        <>
                            <IconButton 
                                ref={btnRef} 
                                onClick={onOpen}
                                variant="ghost"
                                icon={<FiMenu fontSize="1.25rem"/>}
                                aria-label="Open Menu"
                            />
                            <Drawer
                                isOpen={isOpen}
                                placement='right'
                                onClose={onClose}
                                finalFocusRef={btnRef}
                                size={"xs"}
                            >
                                <DrawerContent>
                                    <Stack spacing="1vh" pt="2vh">
                                        {navData.map((item, i) => (
                                            <Link key={i} href={item.link}> <Button w="100%">{item.label} </Button></Link>
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
    )
}