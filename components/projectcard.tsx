import { Card, Stack, CardBody, Text, Image, Icon, Link, CardFooter, Flex, Button, Badge} from "@chakra-ui/react";
import { IconType } from "react-icons";
import { MdOutlineSchool, MdPersonOutline, MdLink, MdOutlineDoneAll } from "react-icons/md";

interface ProjectCardProps {
  theme: any,
  title: string,
  description: string,
  techStack: IconType[],
  image: string,
  url: string,
}

const ProjectCard: React.FC<ProjectCardProps> = ({ theme, title, description, techStack, image, url }) => {

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
      transform="transform 0.3s ease"
      _hover={{
        transform: "scale(1.02)",
      }}
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
        <Text fontWeight='350' color={descriptionColor} mr={['0px', '10px']} ml={['0px', '10px']} textAlign="justify" w='95%'>{description}</Text>
        {/* Card Footer Layer: Badge + Collaborators(?) */}
        <Flex mt='auto' justify='space-between' w='100%' align='center' justifyContent='right'>
            {techStack.map((logo, idx) => (
              <Icon key={idx} as={logo} color="gray.600" boxSize='1.3em'/>
            ))}
        </Flex>
      </Flex>
    );
}

export default ProjectCard;