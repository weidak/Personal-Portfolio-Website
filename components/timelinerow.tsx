import { Flex, Text, useColorModeValue, Box, Icon} from "@chakra-ui/react";
import { useEffect, useState } from "react"; 

interface TimelineRowProps {
    logo: React.ElementType;
    title: string;
    date: string;
    color: string;
    index: number;
    arrLength: number;
    description: string;
  }
  
  const TimelineRow: React.FC<TimelineRowProps> = ({ logo, title, date, color, index, arrLength, description }) => {
      const fontColor = "gray.50";

      const [documentDir, setDocumentDir] = useState('ltr');

      useEffect(() => {
        if (typeof window !== 'undefined') {
            setDocumentDir(document.documentElement.dir);
        }
      }, [])
  
      return (
          <Flex alignItems='flex-start' justifyContent='start' mb='5px'>
              <Flex direction='column'>
                  <Icon
                      as={logo}
                      color={color}
                      h={'40px'}
                      w={'35px'}
                      pe='6px'
                      zIndex='1'
                      position='relative'
                      right={documentDir === 'rtl' ? '-13px' : ''}
                      left={documentDir === 'rtl' ? '' : '-13px'}
                  />
                  <Box w='2px' bg='orange.400' h={index === arrLength - 1 ? '0' : 'calc(10vh)'} />
              </Flex>
              <Flex direction='column' justifyContent='flex-start'>
                  <Text fontSize='sm' color={fontColor} fontWeight='bold'>
                    {title}
                  </Text>
                  <Text fontSize='sm' color='gray.400' fontWeight='normal'>
                    {date}
                  </Text>
                  <Text>
                    {description}
                  </Text>
              </Flex>
          </Flex>
      );
  }

  export default TimelineRow;