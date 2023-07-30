import { Card, CardHeader, Flex, Text, CardBody, useColorModeValue, Box, Icon, VStack, Stack } from "@chakra-ui/react";
import { AddIcon, ChatIcon, DownloadIcon, CheckIcon } from "@chakra-ui/icons";
import { LiaUniversitySolid, LiaBookSolid } from "react-icons/lia"
import { SiAutodesk } from "react-icons/si"
import { BsPersonWorkspace } from "react-icons/bs"
import TimelineRow from "./timelinerow";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { IconType } from "react-icons";

interface TimelineProps {
    fontColor: string,
    timelineTitle: string,
    timelineData: {
        logo: IconType, 
        company: string,
        date: string,
        color: string
        description: {
            role: string;
            overview: string;
            details: string[];
        };
    }[],
}

const Timeline: React.FC<TimelineProps> = ({ timelineData, timelineTitle, fontColor}) => {
    return (
        <Box color={fontColor} minWidth="50%" p="10">
            <Card p="1rem" maxHeight="100%" background="0" color={fontColor} border={"10px"} variant="unstyled">
                <CardHeader pt="0px" p="28px 0px 35px 21px">
                    <Text fontSize="2em" fontWeight="bold" pb=".5rem" as="u">
                        {timelineTitle}
                    </Text>
                </CardHeader>
                <CardBody ps="26px" pe="0px" mb="31px" position="relative">
                    <Flex direction="column" display='flex' flex='1'>
                    {timelineData.map((row, index, arr) => (
                        <TimelineRow
                        key={index}
                        logo={row.logo}
                        company={row.company}
                        date={row.date}
                        color={row.color}
                        index={index}
                        arrLength={arr.length}
                        description={row.description}
                        />
                    ))}
                    </Flex>
                </CardBody>
            </Card>
        </Box>
    )
}

const Experience: ForwardRefRenderFunction<HTMLDivElement> = ({}, ref) => {
  const fontColor = "gray.50"

  const timelineData = [
    {
        logo: SiAutodesk,
        company: "Autodesk",
        date: "Aug 2022 - Dec 2022",
        color: "brand.300",
        description: {
            role: "Data Engineering/QA Intern",
            overview: "Developed on internal services that support Autodesk’s product usage data through the integration and maintenance of data pipelines that employ numerous Amazon Web Services (AWS) and Apache services.",
            details: [
                "Upgraded the backend APIs of existing Python and Java frameworks and underwent AWS trainings provided by the company",
                "Utilized Apache Airflow to update functionality and orchestrate ETL pipelines, improving user experience on existing services.",
                "Performed quality assurance through implementing automated test projects for services provided by the team. ",
                "Collaborated with team members closely using the AGILE framework to ensure Epics and Sprints were met."
            ],
        },
    },
    {
        logo: BsPersonWorkspace,
        company: "Creative Technology Ltd",
        date: "May 2022 - Jul 2022",
        color: "blue.300",
        description: {
            role: "Web Developer Intern",
            overview: "Developed on an internal web application that facilitates the testing of physical sound products.",
            details: [
                "Utilized Django framework to design backend solutions and implemented software engineering principles",
                "Improved the quality of services provided by the application and increased its functionality for users",
            ],
        },
    },];  

  const timelineTitle = "Companies I have worked at"


  return (
    <Box ref={ref} width={["100%", "90%", "80%", "70%"]} alignSelf={"center"} alignItems="center" margin="auto">
        <Flex flexDir={["column", "row"]} flex='1' display='flex'>
            <Timeline timelineData={timelineData} timelineTitle={timelineTitle} fontColor={fontColor}></Timeline>
        </Flex>
    </Box>
  );
}

export default forwardRef(Experience);
