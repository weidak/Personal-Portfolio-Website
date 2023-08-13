import { Flex, Text, Box, Icon, UnorderedList, ListItem} from "@chakra-ui/react";
import { useEffect, useState } from "react"; 
import { IconType } from "react-icons";

interface TimelineRowProps {
    logo: IconType;
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
        <Flex alignItems='flex-start' justifyContent='start' mb='5px' flex='1'>
            <Flex direction='column'>
                <Icon
                    as={logo}
                    color={color}
                    h={'40px'}
                    w={'35px'}
                    pe='6px'
                    zIndex='1'
                    position='relative'
                    right={documentDir === 'rtl' ? '-13px' : undefined}
                    left={documentDir === 'rtl' ? undefined : '-13px'}
                />
                {/* This is the divider that needs to stretch to 100% of the remaining vertical space. */}
                <Box w='2px' bg='orange.400' flexGrow='1' height={ index === arrLength - 1 ? 0 : '100%'}/>
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
                            <ListItem key={idx}>{content}</ListItem>
                        ))}
                    </UnorderedList>
                </Box>
            </Flex>
        </Flex>
    );
}

export default TimelineRow;