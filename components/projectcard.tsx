import { Card, Stack, CardBody, Text, Image, Icon, Link, CardFooter, Flex, Button, Badge} from "@chakra-ui/react";
import { MdOutlineSchool, MdPersonOutline, MdLink, MdOutlineDoneAll } from "react-icons/md";

interface ProjectCardProps {
  theme: any,
  title: string,
  description: string,
  icon: React.ElementType,
  image: string,
  url: string,
  isPersonal: boolean,
}

const ProjectCard: React.FC<ProjectCardProps> = ({ theme, title, description, icon, image, url, isPersonal }) => {

    const backgroundColor = "gray.100"
    const iconColor = "blue.500"
    const iconBox = "gray.200"
    const titleColor = "gray.900"
    const descriptionColor = "gray.800"

    return (
      // Outer Card
      <Flex 
      borderRadius="10px"
      bg={backgroundColor}
      p="5px"
      h="395px"
      w={{ base: "300px", md:"345px"}}
      boxShadow="dark-lg"
      >
        {/* Inner Card */}
        <Flex 
        alignItems='center'
        direction='column'
        boxShadow="dark-lg"
        p="10px"
        w={{ base: "300px", md:"345px"}}
        borderRadius="10px"
        >
        <Flex w='100%' mb='18px' >
          {/* Card Header Layer: Icon + Title + Link */}
          <Flex w='38px' h='38px' ml={['0px', '9px']} align='center' justify='center' borderRadius='10px' me='12px' bg={iconBox}>
            <Icon w='24px' h='24px' as={ MdOutlineDoneAll } color={iconColor} />
          </Flex>
          <Text fontWeight='600' fontSize='lg' my='auto' color={titleColor} me='auto'>{title}</Text>
          <Link href={url} target='_blank'>
          <Button w='38px' h='38px' borderRadius='50%'>
            <Icon as={MdLink}/>
          </Button>
          </Link>
        </Flex>
        {/* Image Layer */}
        <Image src={image} borderRadius='10px' objectFit="cover" h='168px' w='295px' mb='10px'/>
        {/* Description Layer */}
        <Text fontWeight='350' color={descriptionColor} ml={['0px', '18px']} textAlign="start" w='100%'>{description}</Text>
        {/* Card Footer Layer: Badge + Collaborators(?) */}
        <Flex mt='auto' justify='space-between' w='100%' align='center' justifyContent='right'>
          <Badge 
          borderRadius='9px' 
          size='md' 
          colorScheme={ isPersonal ? 'green' : 'yellow' } 
          color={ isPersonal ? 'green.400' : 'yellow.400' } 
          textAlign='center'
          display='flex'
          justifyContent='center'
          alignItems='center'>{ isPersonal ? <Text>Personal</Text> : <Text>Subject</Text> }</Badge>
        </Flex>
        </Flex>
      </Flex>
    );
    // return (
    //   <Card variant={"elevated"} background={backgroundColor} m="1vh" width="300px">
    //     <Image src={image} boxSize="300px" objectFit={"cover"}/>
    //     <Stack>
    //     <CardBody>
    //       <Text as="b">
    //         {title}
    //       </Text>
    //       <Text>
    //         {description}
    //       </Text>
    //     </CardBody>
    //     <CardFooter>
    //       <Flex justify={"center"}>
    //         <Icon as={icon}/>
    //         <Link target="_blank" href={url}>Github</Link>
    //       </Flex>
    //     </CardFooter>
    //     </Stack>
    //   </Card>
    // );
}

export default ProjectCard;