import { Flex, Text, Box, Icon, UnorderedList, ListItem, Image, Center } from "@chakra-ui/react";
import { useEffect, useState } from "react"; 
import { IconType } from "react-icons";

interface TimelineRowProps {
    logo: string;
    company: string;
    date: string;
    color: string;
    index: number;
    arrLength: number;
    description: {
        role: string;
        overview: string;
        details: string[];
    };
}
  
const TimelineRow: React.FC<TimelineRowProps> = ({ logo, company, date, color, index, arrLength, description }) => {
    const fontColor = "gray.50";

    const [documentDir, setDocumentDir] = useState('ltr');

    useEffect(() => {
    if (typeof window !== 'undefined') {
        setDocumentDir(document.documentElement.dir);
    }
    }, [])

    return (
        <Flex alignItems='flex-start' justifyContent='start' mb='5vh' direction={['column', 'row']}>
            <Flex m="8px" mr="25px">
                <Center w={'70px'} overflow="hidden" rounded={"lg"} boxShadow={"xl"}>
                    <Image
                        src={logo}
                        color={color}
                        h={'100%'}
                        w={'100%'}
                    />
                </Center>
            </Flex>
            <Flex direction='column' justifyContent='flex-start'>
                <Text fontSize='lg' color={fontColor} fontWeight='bold'>
                    {company}
                </Text>
                <Text fontSize='sm' color='gray.400' fontWeight='normal'>
                    {date}
                </Text>
                <Text as="i">
                    {description.role}
                </Text>
                <Box p="1vh">
                    <Text textAlign={"justify"}>
                        {description.overview}
                    </Text>
                    <UnorderedList>
                        {description.details.map((content, idx) => (
                            <ListItem key={idx} textAlign={"justify"}>{content}</ListItem>
                        ))}
                    </UnorderedList>
                </Box>
            </Flex>
        </Flex>
    );
}

export default TimelineRow;