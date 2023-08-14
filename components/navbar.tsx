import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
    useBreakpointValue,
    Box,
    HStack,
    Flex,
    ButtonGroup,
    Button,
    Text,
  } from "@chakra-ui/react";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

interface NavbarButtonsProps {
  link: string,
  label: string,
  idx: number,
}

const NavbarButtons: React.FC<NavbarButtonsProps> = ({label, idx, link}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const navButtonsStyle: React.CSSProperties = {
    transition: 'transform 0.3s ease',
    cursor: '',
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    color: isHovered ? 'orange' : 'white',
    boxShadow: '10px',
    fontWeight: 'bold',
  }

  const smoothScrollTo = (targetId: string, offset: number) => {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const targetRect = targetElement.getBoundingClientRect()
      const offsetPosition = targetRect.top + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      console.log("Scrolling to " + targetId)
    }
  };
  

  return (
    <Text
      key={idx}
      as="a"
      onClick={() => smoothScrollTo(link, 80)}
      cursor="pointer" // Add cursor style to indicate link behavior
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={navButtonsStyle}
    >
      {label}
    </Text>
  )
}

export default function Navbar() {

  // Drawer related properties
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const { scrollYProgress } = useScroll()

  const navData = [
    {
      label: "About",
      link: "#about",
    },
    {
      label: "Experience",
      link: "#work",
    },
    {
      label: "Projects",
      link: "#projects",
    },
  ];

  const smoothScrollTo = (targetId: string) => {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const targetRect = targetElement.getBoundingClientRect()
      window.scrollTo({
        top: targetRect.top + window.scrollY,
        behavior: "smooth",
      });
      console.log("Scrolling to " + targetId)
    }
  };

  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const transitionStyles: React.CSSProperties = {
    transition: "opacity 0.5s ease",
    animation: "slide 0.5s downwards",
    animationDelay: "1s",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
    >
    { isDesktop ? (
        <Flex
        display="flex"
        height={"60px"}
        position="fixed"
        justify="center"
        top="0"
        left="0"
        right="0"
        bg="gray.900"
        zIndex={999}
        style={{
          ...transitionStyles,
          opacity: isScrolled ? 1 : 0,
        }}
        >
        <HStack
          alignSelf={"flex-start"}
          justifyContent="space-between"
          m="10px"
          py="2"
          px="4"
          width="130vh"
        >
          <code style={{ color: "white" }}>WEIDA</code>
          <ButtonGroup variant="link" spacing={"7"}>
            {navData.map((item, i) => (
              <NavbarButtons key={i} idx={i} label={item.label} link={item.link} />
            ))}
          </ButtonGroup>
        </HStack>
        <Box 
          as={motion.div}
          style={{ 
            scaleX: scrollYProgress,
            height: "2px",
            background: "white",
            transformOrigin: "left center",
            position: "fixed",
            left: 0,
            right: 0,
            top: 60,
          }}
          width={"100%"}
        />        
        </Flex>
      ) : (
      <Box
        display="flex"
        height={"64px"}
        position="fixed"
        bottom={"0"}
        left="0"
        right="0"
        bg="gray.800"
        boxShadow={"lg"}
        zIndex={999}
        style={{
          ...transitionStyles,
          opacity: isScrolled ? 1 : 0,
        }}
      >
        <Box 
          as={motion.div}
          style={{ 
            scaleX: scrollYProgress,
            height: "3px",
            background: "white",
            transformOrigin: "left center",
            position: "fixed",
            left: 0,
            right: 0,
            bottom: 63,
          }}
          width={"100%"}
        />     
        <HStack
          flex="1" 
          alignSelf={"flex-end"}
          justifyContent="space-between"
          m="10px"
          py="2"
          px="4"
        >
          <ButtonGroup variant="link" spacing={"7"}>
            {navData.map((item, i) => (
              <NavbarButtons key={i} idx={i} label={item.label} link={item.link} />
            ))}
          </ButtonGroup>
          <Button borderRadius="20px" boxSize={"2em"} onClick={() => smoothScrollTo("#main")}>
            <ChevronUpIcon boxSize="1.5em" />
          </Button>
        </HStack>
      </Box>
    )}
  </motion.div>
  )
}
  