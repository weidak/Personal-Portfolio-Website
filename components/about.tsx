import { Box, Flex, Text, Heading, VStack, HStack, Icon, Divider, Link, Stack, useBreakpointValue } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail } from 'react-icons/ai'

interface AboutProps {
  theme: any,
}

const about1 = "As an individual that has been passionate about technology, I have always been curious and like to explore new things within the field. As such, I have engaged in web-development projects as well as created a Telegram bot in my free time. Through these experiences, I have gained valuable software engineering skills." 
const about2 = "Digital things aside, I love to indulge in physical activities as well. I was the Vice Captain for my Hall's Floorball team and joined other sports such as Muay Thai and Ultimate Frisbee, with the most recent hobby being Bouldering."

const About: ForwardRefRenderFunction<HTMLDivElement, AboutProps> = ({ theme }, ref) => {

  const isDesktop = useBreakpointValue({ base: false, md: true, lg: true });

  return (
    <Box ref={ref} as="section" id="about" color={theme.fontColor} mb='10vh' m={theme.containerMargins}>
      <Flex justify="center">
        <Stack direction={"column"} align="center">
            <Heading as="u" size="lg" mb="10">
                About myself
            </Heading>
            { isDesktop ? (
              <Stack spacing={20} flexDir={'row'}>
                <VStack spacing={10} align="right" justify={"center"}>
                <HStack>
                    <Link href="https://www.linkedin.com/in/tay-weida/">
                      <Icon as={AiOutlineLinkedin} boxSize={'2.5em'}/>
                    </Link>
                  </HStack>
                  <HStack>
                    <Link href="https://www.github.com/weidak">
                      <Icon as={AiOutlineGithub} boxSize={'2.5em'}/>
                    </Link>
                  </HStack>
                  <HStack>
                    <Link href="mailto: weida.tay99@gmail.com">
                      <Icon as={AiOutlineMail} boxSize={'2.5em'}/>
                    </Link>
                  </HStack>
                </VStack>
                <Divider orientation="vertical"/>
                <VStack spacing={10}>
                    <Text>
                      {about1}
                    </Text>
                    <Text>
                      {about2}
                    </Text>
                </VStack>
              </Stack>
            ) : (
              <Stack spacing={20} flexDir={['column', 'column', 'row', 'row']}>
                <HStack spacing={10} align="left" justify={"center"}>
                  <HStack>
                    <Link href="https://www.linkedin.com/in/tay-weida/">
                      <Icon as={AiOutlineLinkedin} boxSize={'4em'}/>
                    </Link>
                  </HStack>
                  <HStack>
                    <Link href="https://www.github.com/weidak">
                      <Icon as={AiOutlineGithub} boxSize={'4em'}/>
                    </Link>
                  </HStack>
                  <HStack>
                    <Link href="mailto: weida.tay99@gmail.com">
                      <Icon as={AiOutlineMail} boxSize={'4em'}/>
                    </Link>
                  </HStack>
                </HStack>
                <Divider orientation="horizontal"/>
                <VStack spacing={4}>
                    <Text textAlign={"justify"}>
                      {about1}
                    </Text>
                    <Text textAlign={"justify"}>
                      {about2}
                    </Text>
                </VStack>
              </Stack>
            )}
        </Stack>
      </Flex>
    </Box>
  );
}

export default forwardRef(About);


// import { Box, Flex, Text, Heading, VStack, HStack, Icon, Divider, Link, Stack, useBreakpointValue } from "@chakra-ui/react";
// import { forwardRef, ForwardRefRenderFunction } from "react";
// import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail } from 'react-icons/ai'

// interface AboutProps {
//   fontColor: string,
// }

// const about1 = "As an individual that has been passionate about technology, I have always been curious and like to explore new things within the field. As such, I have engaged in web-development projects as well as created a Telegram bot in my free time. Through these experiences, I have gained valuable software engineering skills." 
// const about2 = "Digital things aside, I love to indulge in physical activities as well. I was the Vice Captain for my Hall's Floorball team and joined other sports such as Muay Thai and Ultimate Frisbee, with the most recent hobby being Bouldering."

// const About: ForwardRefRenderFunction<HTMLDivElement, AboutProps> = ({ fontColor }, ref) => {

//   const isDesktop = useBreakpointValue({ base: false, lg: true });

//   return (
//     <Box ref={ref} as="section" id="about" color={fontColor} mb='10vh'>
//       <Flex justify="center">
//         <Stack direction={"column"} align="center">
//             <Heading as="u" size="lg" mb="10">
//                 About myself
//             </Heading>
//               <Stack spacing={20} flexDir={['column', 'column', 'row', 'row']}>
//                 <VStack spacing={10} align="left" justify={"center"}>
//                   <HStack>
//                     <Icon as={AiOutlineLinkedin}/>
//                     <Link href="https://www.linkedin.com/in/tay-weida/">LinkedIn</Link>
//                   </HStack>
//                   <HStack>
//                     <Icon as={AiOutlineGithub}/>
//                     <Link href="https://www.github.com/weidak">GitHub</Link>
//                   </HStack>
//                   <HStack>
//                     <Icon as={AiOutlineMail}/>
//                     <Link href="mailto: weida.tay99@gmail.com">Email</Link>
//                   </HStack>
//                 </VStack>
//                 <Divider orientation="vertical"/>
//                 <VStack spacing={10}>
//                     <Text>
//                       {about1}
//                     </Text>
//                     <Text>
//                       {about2}
//                     </Text>
//                 </VStack>
//             </Stack>
//         </Stack>
//       </Flex>
//     </Box>
//   );
// }

// export default forwardRef(About);