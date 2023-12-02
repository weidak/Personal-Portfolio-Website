import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "./projectcard";
import { AiOutlineLink } from "react-icons/ai";

interface ProjectsProps {
  theme: any;
}

const Projects: React.FC<ProjectsProps> = ({ theme }) => {
  const projects = [
    {
        title: "PeerPrep",
        image: "https://github.com/weidak/weidak.github.io/assets/70256674/23520d58-20ad-46f6-9406-a926dce0c772",
        url: "https://github.com/CS3219-AY2324S1/ay2324s1-course-assessment-g05",
        description: "This project is a real-time, collaborative website that allows users to code together. It is built on a microservices architecture using NextJS, ExpressJS, Socket.IO, RabbitMQ, Redis, PostgreSQL and deployed on AWS.",
        techStack: ["nextjs", "express", "rabbitmq", "redis", "postgresql"]
    },
    {
        title: "Capstone Project",
        image: "https://github.com/weidak/weidak.github.io/assets/70256674/77be63f9-bc1d-4697-882e-e3f04e52b736",
        url: "https://github.com/nus-cg4002-group-4/MonkeysLaserTag",
        description: "This project aimed to showcase what we have learnt over the last 4 years. We were tasked to create a laser tag game with various IoT devices that uses a HiveMQTT broker.",
        techStack: ["python", "arduino"]
    },
    {
      title: "ICT+",
      image:
        "https://user-images.githubusercontent.com/70256674/253813924-09924562-f040-4444-aa6c-0cbc72490b0f.png",
      url: "https://github.com/tlyi/ictplus",
      description:
        "Handling your ICT administration in a more intuitive manner and prepare your personal equipment with ease",
      techStack: ["flutter"],
    },
    {
      title: "FoodLeh",
      image: "https://img.youtube.com/vi/sjW3fCfo3BI/hqdefault.jpg",
      url: "https://github.com/chang-yichen/FoodLeh",
      description:
        "Our aim is to provide a centralised platform for small F&B owners/cloud kitchen facility a POS such that they can dispatch the orders through a web application.",
      techStack: ["vue", "firebase"],
    },
    {
      title: "Fitbot CLI Application",
      image:
        "https://github.com/AY2122S1-CS2113T-F14-2/tp/assets/70256674/892fbfc2-f25c-422e-9167-5f07b3b38333",
      url: "https://ay2122s1-cs2113t-f14-2.github.io/tp/",
      description:
        "Fitbot is a desktop app that helps to keep track of calorie consumption and calorie output with the speed and convenience of command-line based tools.",
      techStack: ["java"],
    },
    {
      title: "KE7 Web Portal",
      image:
        "https://github.com/AY2122S1-CS2113T-F14-2/tp/assets/70256674/aca91141-a0fa-4e41-889d-cf4217ae87d8",
      url: "https://ke7web.netlify.app/",
      description:
        "This portal was intended for hall residents to book, organize and plan events through a web application, built on ReactJS & PostgreSQL",
      techStack: ["react", "postgresql"],
    },
    {
      title: "FPGA Project",
      image:
        "https://github.com/weidak/FPGA-Project-EE2026/assets/70256674/c3cbe4c6-f0b1-4b0e-b48f-da4eadc8850b",
      url: "https://github.com/weidak/FPGA-Project-EE2026",
      description:
        "Created a Sight and Sound Entertainment System using a Basys 3 Development Board with audio input from PmodMIC3 and visual output from PmodOLEDrgb.",
      techStack: ["verilog"],
    },
    {
      title: "RTOS Project",
      image:
        "https://user-images.githubusercontent.com/70256674/256972200-8dbc1e9a-788a-463e-8b73-0a534aff00d1.png",
      url: "https://github.com/weidak/RTOS-Project-CG2271",
      description:
        "This project was to design a robotic vehicle that is piloted through an Android application. Learned scheduling algorithms, multi-threading, resource locking and more.",
      techStack: ["c-plusplus"],
    },
  ];

  return (
    <Box
      as="section"
      id="projects"
      alignSelf={"center"}
      mb="20vh"
      alignItems="center"
      margin={theme.containerPadding}
    >
      <Flex justify={"center"} pb="2vh">
        <Heading as="u" color={theme.fontColor}>
          Projects
        </Heading>
      </Flex>
      <SimpleGrid columns={[1, 1, 1, 3]} spacing={[10]}>
        {projects.map((content, index) => (
          <ProjectCard
            key={index}
            theme={theme}
            title={content.title}
            description={content.description}
            image={content.image}
            url={content.url}
            techStack={content.techStack}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
