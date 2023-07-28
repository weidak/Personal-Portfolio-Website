import { Box, Stack, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "./projectcard";
import { AiOutlineLink } from "react-icons/ai"

interface ProjectsProps {
  theme: any;
}

const Projects: React.FC<ProjectsProps> = ({ theme }) => {

    const projects = [
        {
            title: "ICT+",
            image: "https://user-images.githubusercontent.com/70256674/253813924-09924562-f040-4444-aa6c-0cbc72490b0f.png",
            url: "https://github.com/tlyi/ictplus",
            description: "Adminstrative Application for In-Camp Trainings",
            linkIcon: AiOutlineLink,
        },
        {
            title: "FoodLeh",
            image: "https://img.youtube.com/vi/sjW3fCfo3BI/hqdefault.jpg",
            url: "https://github.com/chang-yichen/FoodLeh",
            description: "Online platform for Hawker Stalls",
            linkIcon: AiOutlineLink,
        },
        {
            title: "KE7 Web Portal",
            image: "https://imgur.com/a/x6mLf0Q",
            url: "https://ke7web.netlify.app/",
            description: "Home Portal for KEVII Hall",
            linkIcon: AiOutlineLink,
        },
        {
            title: "FPGA Project",
            image: "https://github.com/weidak/FPGA-Project-EE2026/assets/70256674/c3cbe4c6-f0b1-4b0e-b48f-da4eadc8850b",
            url: "https://github.com/tlyi/ictplus",
            description: "Adminstrative Application for In-Camp Trainings",
            linkIcon: AiOutlineLink,
        },
        {
            title: "ICT+",
            image: "https://user-images.githubusercontent.com/70256674/253813924-09924562-f040-4444-aa6c-0cbc72490b0f.png",
            url: "https://github.com/tlyi/ictplus",
            description: "Adminstrative Application for In-Camp Trainings",
            linkIcon: AiOutlineLink,
        },
        {
            title: "ICT+",
            image: "https://user-images.githubusercontent.com/70256674/253813924-09924562-f040-4444-aa6c-0cbc72490b0f.png",
            url: "https://github.com/tlyi/ictplus",
            description: "Adminstrative Application for In-Camp Trainings",
            linkIcon: AiOutlineLink,
        },
    ]


    return (
        <Box maxWidth={"90%"} color={theme.fontColor} alignSelf={"center"} mb="20vh">
            <Flex justify={"center"} pb="2vh">
                <Heading>
                    Projects
                </Heading>
            </Flex>
            <SimpleGrid columns={[1, 1, 2, 3]} spacing={5}>
                {projects.map((content, index) => (
                    <ProjectCard theme={theme} title={content.title} description={content.description} image={content.image} url={content.url} icon={content.linkIcon}/>
                ))}
            </SimpleGrid>
        </Box>
        );
}

export default Projects;