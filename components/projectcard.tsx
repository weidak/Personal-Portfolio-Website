import { Text, Image, Icon, Link, Flex, Button, Stack} from "@chakra-ui/react";
import { IconType } from "react-icons";
import { MdLink } from "react-icons/md";
import IconContainer from "./iconcontainer";
import { useState } from "react";

interface ProjectCardProps {
  theme: any,
  title: string,
  description: string,
  techStack: string[],
  image: string,
  url: string,
}

const ProjectCard: React.FC<ProjectCardProps> = ({ theme, title, description, techStack, image, url }) => {

    const backgroundColor = "gray.100"
    const iconColor = "blue.500"
    const iconBox = "gray.200"
    const titleColor = "gray.900"
    const descriptionColor = "gray.800"

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const cardStyle: React.CSSProperties = {
      transition: 'transform 0.3s ease',
      cursor: '',
      transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    }

    return (
      // Outer Card
      <Flex 
      borderRadius="10px"
      bg={backgroundColor}
      p="5px"
      h="395px"
      w={{ base: "300px" }}
      boxShadow="dark-lg"
      // transform="transform 0.3s ease"
      // _hover={{
      //   transform: "scale(1.02)",
      // }}
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
        {/* Inner Card */}
        <Flex 
        alignItems='center'
        direction='column'
        boxShadow="dark-lg"
        p="10px"
        borderRadius="10px"
        as="a"
        href={url}
        target="_blank"
        >
          <Flex w='100%' mb='10px' p='5px'>
            {/* Card Header Layer: Title + Link */}
            <Text fontWeight='600' fontSize='lg' my='auto' color={titleColor} me='auto'>{title}</Text>
            {techStack.map((logo, idx) => (
                <IconContainer key={idx} logo={logo}/>
              ))}
          </Flex>
          {/* Image Layer */}
          <Image src={image} borderRadius='10px' objectFit="cover" h='168px' w='295px' mb='10px'/>
          {/* Description Layer */}
          <Text as='a' fontWeight='350' noOfLines={6} color={descriptionColor} textAlign="justify">{description}</Text>
        </Flex>
      </Flex>
    );
}

export default ProjectCard;