import { 
    useBreakpointValue,
    Box,
    Container,
    HStack,
    Stack,
    Image,
    Flex,
    ButtonGroup,
    Button,
    IconButton,
    useDisclosure,
    Drawer,
    DrawerContent,
    Link
} from "@chakra-ui/react";
import { useRef } from "react";
import { FiMenu } from 'react-icons/fi'

export default function Navbar({formBackground}: any) {
    const isDesktop = useBreakpointValue({ base: false, lg: true})

    // Drawer related properties
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef<HTMLButtonElement>(null);

    const navData = [
        {
          label: "About",
          link: "dummy",
        },
        {
          label: "Experience",
          link: "dummy",
        },
        {
          label: "Projects",
          link: "dummy",
        },
        {
          label: "Contact",
          link: "dummy",
        },
    ]

    return (
        <Box 
            as="section" position="fixed" width={"100%"} background={formBackground}
        >
           <Box as="nav" bg="bg-surface" boxShadow="sm">
                <Container py={{ base: '4', lg: '5'}}>
                    <HStack spacing="10" justify="space-between">
                    <Image src="https://i.imgur.com/gKJSU0D.png" boxSize={"5"}/>
                    { isDesktop ? (
                        <Flex justify="space-between" flex="1">
                            <ButtonGroup variant="link" spacing="8">
                                {navData.map((item, i) => (
                                    <Button key={i}> {item.label} </Button>
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
                                            <Button key={i} w="100%"> {item.label} </Button>
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