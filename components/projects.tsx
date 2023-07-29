import { Box, Stack, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "./projectcard";
import { AiOutlineLink } from "react-icons/ai"
import { BiLogoFlutter, BiLogoReact, BiLogoVuejs, BiLogoFirebase, BiLogoPostgresql, BiLogoCPlusPlus } from "react-icons/bi"
import { IoHardwareChipOutline } from "react-icons/io5"
import { LiaJava } from "react-icons/lia"

interface ProjectsProps {
  theme: any;
}

const Projects: React.FC<ProjectsProps> = ({ theme }) => {

    const projects = [
        {
            title: "ICT+",
            image: "https://user-images.githubusercontent.com/70256674/253813924-09924562-f040-4444-aa6c-0cbc72490b0f.png",
            url: "https://github.com/tlyi/ictplus",
            description: "Handling your ICT administration in a more intuitive manner and prepare your personal equipmentwith ease",
            linkIcon: AiOutlineLink,
            techStack: [BiLogoFlutter,]
        },
        {
            title: "FoodLeh",
            image: "https://img.youtube.com/vi/sjW3fCfo3BI/hqdefault.jpg",
            url: "https://github.com/chang-yichen/FoodLeh",
            description: "Our aim is to provide a centralised platform for small F&B owners/cloud kitchen facility a POS such that they can dispatch the orders through a web application.",
            linkIcon: AiOutlineLink,
            techStack: [BiLogoVuejs, BiLogoFirebase]
        },
        {
            title: "Fitbot CLI Application",
            image: "https://github.com/AY2122S1-CS2113T-F14-2/tp/assets/70256674/892fbfc2-f25c-422e-9167-5f07b3b38333",
            url: "https://ay2122s1-cs2113t-f14-2.github.io/tp/",
            description: "Fitbot is a desktop app that helps to keep track of calorie consumption and calorie output with the speed and convenience of command-line based tools.",
            linkIcon: AiOutlineLink,
            techStack: [LiaJava,]
        },
        {
            title: "KE7 Web Portal",
            image: "https://github.com/AY2122S1-CS2113T-F14-2/tp/assets/70256674/aca91141-a0fa-4e41-889d-cf4217ae87d8",
            url: "https://ke7web.netlify.app/",
            description: "This portal was intended for hall residents to book, organize and plan events through a web application, built on ReactJS & PostgreSQL",
            linkIcon: AiOutlineLink,
            techStack: [BiLogoReact, BiLogoPostgresql]
        },
        {
            title: "FPGA Project",
            image: "https://github.com/weidak/FPGA-Project-EE2026/assets/70256674/c3cbe4c6-f0b1-4b0e-b48f-da4eadc8850b",
            url: "https://github.com/weidak/FPGA-Project-EE2026",
            description: "Created a Sight and Sound Entertainment System using a Basys 3 Development Board with audio input from PmodMIC3 and visual output from PmodOLEDrgb.",
            linkIcon: AiOutlineLink,
            techStack: [IoHardwareChipOutline,]
        },
        {
            title: "RTOS Project",
            image: "https://user-images.githubusercontent.com/70256674/256972200-8dbc1e9a-788a-463e-8b73-0a534aff00d1.png",
            url: "https://github.com/weidak/RTOS-Project-CG2271",
            description: "This project was to design a robotic vehicle that is piloted through an Android application. Learned scheduling algorithms, multi-threading, resource locking and more.",
            linkIcon: AiOutlineLink,
            techStack: [BiLogoCPlusPlus]
        },

    ]


    return (
        <Box maxWidth={"90%"} color={theme.fontColor} alignSelf={"center"} mb="20vh" alignItems="center" margin="auto">
            <Flex justify={"center"} pb="2vh">
                <Heading as="u">
                    Projects
                </Heading>
            </Flex>
            <SimpleGrid columns={[1, 1, 2, 3]} spacing={10}>
                {projects.map((content, index) => (
                    <ProjectCard 
                    key={index}
                    theme={theme} 
                    title={content.title} 
                    description={content.description} 
                    image={content.image} 
                    url={content.url} 
                    techStack={content.techStack}/>
                ))}
            </SimpleGrid>
        </Box>
        );
}

export default Projects;