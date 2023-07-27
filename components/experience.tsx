import { Card, CardHeader, Flex, Text, CardBody, useColorModeValue, Box, Icon, VStack } from "@chakra-ui/react";
import { AddIcon, ChatIcon, DownloadIcon, CheckIcon } from "@chakra-ui/icons";

interface TimelineRowProps {
  logo: React.ElementType;
  title: string;
  date: string;
  color: string;
  index: number;
  arrLength: number;
}

const TimelineRow: React.FC<TimelineRowProps> = ({ logo, title, date, color, index, arrLength }) => {
	const textColor = useColorModeValue('gray.700', 'white.300');
	const bgIconColor = useColorModeValue('white.300', 'gray.700');

	return (
		<Flex alignItems='flex-start' justifyContent='start' mb='5px'>
			<Flex direction='column'>
				<Icon
					as={logo}
					bg={bgIconColor}
					color={color}
					h={'30px'}
					w={'26px'}
					pe='6px'
					zIndex='1'
					position='relative'
					right={document.documentElement.dir === 'rtl' ? '-8px' : ''}
					left={document.documentElement.dir === 'rtl' ? '' : '-8px'}
				/>
				<Box w='2px' bg='gray.400' h={index === arrLength - 1 ? '0' : '10vh'} />
			</Flex>
			<Flex direction='column' justifyContent='flex-start'>
				<Text fontSize='sm' color={textColor} fontWeight='bold'>
					{title}
				</Text>
				<Text fontSize='sm' color='gray.400' fontWeight='normal'>
					{date}
				</Text>
			</Flex>
		</Flex>
	);
}

export default function Experience() {
  const textColor = useColorModeValue("gray.700", "white.300");
  const bg = useColorModeValue("gray.50", "gray.700");

  const timelineData = [
    {
      logo: AddIcon,
      title: "$2400, Design changes",
      date: "22 DEC 7:20 PM",
      color: "brand.300",
    },
    {
      logo: ChatIcon,
      title: "New order #4219423",
      date: "21 DEC 11:21 PM",
      color: "blue.300",
    },
    {
      logo: DownloadIcon,
      title: "Server Payments for April",
      date: "21 DEC 9:28 PM",
      color: "orange.300",
    },
    {
      logo: CheckIcon,
      title: "New card added for order #3210145",
      date: "20 DEC 3:52 PM",
      color: "red.300",
    },
  ];

  return (
    <Box maxWidth={["100%", "90%", "70%", "70%"]} alignSelf={"center"}>
        <Card p="1rem" maxHeight="100%" bg="gray.500">
        <CardHeader pt="0px" p="28px 0px 35px 21px">
            <Flex direction="column">
            <Text fontSize="lg" color={textColor} fontWeight="bold" pb=".5rem">
                Orders overview
            </Text>
            <Text fontSize="sm" color="gray.400" fontWeight="normal">
                <Text fontWeight="bold" as="span" color="brand.300">
                +30%
                </Text>{" "}
                this month.
            </Text>
            </Flex>
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
                />
            ))}
            </Flex>
        </CardBody>
        </Card>
    </Box>
  );
}
