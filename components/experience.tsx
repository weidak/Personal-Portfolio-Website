import { Card, CardHeader, Flex, Text, CardBody, useColorModeValue, Box, Icon, VStack, Stack } from "@chakra-ui/react";
import { AddIcon, ChatIcon, DownloadIcon, CheckIcon } from "@chakra-ui/icons";
import { LiaUniversitySolid, LiaBookSolid } from "react-icons/lia"
import { SiAutodesk } from "react-icons/si"
import { BsPersonWorkspace } from "react-icons/bs"
import TimelineRow from "./timelinerow";

interface TimelineProps {
    fontColor: string,
    timelineTitle: string,
    timelineData: {
        logo: any, 
        title: string,
        date: string,
        color: string
        description: string,
    }[],
}

const Timeline: React.FC<TimelineProps> = ({ timelineData, timelineTitle, fontColor}) => {
    return (
        <Box color={fontColor} maxWidth="70%" minWidth="50%" p="10">
            <Card p="1rem" maxHeight="100%" background="0" color={fontColor} border={"10px"} variant="unstyled">
                <CardHeader pt="0px" p="28px 0px 35px 21px">
                    <Text fontSize="2em" fontWeight="bold" pb=".5rem">
                        {timelineTitle}
                    </Text>
                </CardHeader>
                <CardBody ps="26px" pe="0px" mb="31px" position="relative">
                    <Flex direction="column">
                    {timelineData.map((row, index, arr) => (
                        <TimelineRow
                        key={index}
                        logo={row.logo}
                        title={row.title}
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

export default function Experience() {
  const fontColor = "gray.50"

  const timelineData = [
    {
      logo: SiAutodesk,
      title: "Autodesk",
      date: "Aug 2022 - Dec 2022",
      color: "brand.300",
      description: "Internship - Data Engineer/QA"
    },
    {
      logo: BsPersonWorkspace,
      title: "Creative Technology Ltd",
      date: "May 2022 - Jul 2022",
      color: "blue.300",
      description: "Internship - Web Developer"
    },
  ];

  const timelineTitle = "Work Experiences"

  const eduTimelineData = [
    {
      logo: LiaUniversitySolid,
      title: "National University of Singapore",
      date: "Aug 2020 - Jun 2024",
      color: "teal.200",
      description: "Bachelor of Engineering (Computer Engineering): 2nd Upper Class Honours" 
    },
    {
      logo: LiaBookSolid,
      title: "St Andrew's Junior College",
      date: "Jan 2016 - Dec 2017",
      color: "yellow.300",
      description: "GCE 'A'-Levels: 87.5 Rank Points"
    },
  ];

  const eduTimelineTitle = "Education"

  return (
    <Box maxWidth={["100%", "90%", "80%", "80%"]} alignSelf={"center"}>
        <Flex flexDir={["column", "row"]}>
            <Timeline timelineData={eduTimelineData} timelineTitle={eduTimelineTitle} fontColor={fontColor}></Timeline>
            <Timeline timelineData={timelineData} timelineTitle={timelineTitle} fontColor={fontColor}></Timeline>
        </Flex>
    </Box>
  );
}
