import About from "@/components/about";
import Introduction from "@/components/introduction";
// import Navbar from "@/components/navbar";
import SkillSet from "@/components/skillsets";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Navbar from "@/components/navbar";
import { 
  Box, 
  Text, 
  useColorModeValue, 
  Container, 
  Stack,
  Divider,
  Center,
  Fade,
  ScaleFade,
  Flex
} from "@chakra-ui/react"

import { useRef, useState, useEffect } from "react";
import { useInView, motion, useScroll, useSpring } from "framer-motion";

export default function Home() {

  const aboutRef = useRef(null);
  const aboutRefInView = useInView(aboutRef);

  const experienceRef = useRef(null);
  const experienceRefInView = useInView(experienceRef);

  const projectRef = useRef(null);
  const projectRefInView = useInView(projectRef);

  const theme = {
    fontColor: 'gray.100',
    background: 'gray.900',
    bgGradient: 'linear(to-t, cyan.800, gray.900)',
    containerMargins: '10px'
  }


  useEffect(() => {
    console.log('element in view!', aboutRefInView);
  })

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

  const { scrollYProgress } = useScroll()

  return (
    <Box bg={"black"}>
      <Box
        id="main"
        bgGradient={theme.bgGradient}
      >
        <Container maxWidth={["100%", "80%", "70%", "130vh"]}>

          <Navbar />
          <Flex
            alignItems={"center"}
            justify={"center"}
            flexDirection={"column"}
            minHeight="100vh" 
            display="flex"
          >
            <Stack spacing={"10vh"}>
            <Fade
              in={true}
            >
              <Introduction theme={theme}/>
            </Fade>
            <About theme={theme}/>
            <SkillSet ref={aboutRef} theme={theme}/>
            <Center><Divider mt="10" orientation="horizontal"/></Center>
            <Experience theme={theme} ref={experienceRef} />
            <Projects theme={theme} />
            <Box boxSize="xxs"><Text fontSize="10" color={theme.fontColor} align={'center'} mb='10vh'>This website was built by me in 2023 using NextJS and ChakraUI.</Text></Box>
            </Stack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}

// import { motion, useScroll } from "framer-motion";

// export default function Home() {
//   const { scrollYProgress } = useScroll();

//   return (
//     <>
//       <motion.div
//         className="progress-bar"
//         style={{ 
//           scaleX: scrollYProgress,
//           height: "300px",
//           background: "orange",
//           transformOrigin: "left center",
//           position: "fixed",
//           bottom: 0,
//           left: 0,
//           right: 0,
//         }}
//       />
//       <h1>
//         <code>useScroll</code> demo
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam repellat id consequuntur provident aliquam ipsam magni tempora, repellendus optio sapiente tenetur doloremque nisi dolorum illum, eos beatae accusantium? Cupiditate?</p>

//       </h1>
//     </>
//   );
// }