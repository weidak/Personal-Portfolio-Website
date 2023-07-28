import { Card, Stack, CardBody, Text, Image, Icon, Link, CardFooter, Flex} from "@chakra-ui/react";

interface ProjectCardProps {
  theme: any,
  title: string,
  description: string,
  icon: React.ElementType,
  image: string,
  url: string,
}

const ProjectCard: React.FC<ProjectCardProps> = ({ theme, title, description, icon, image, url }) => {

    const backgroundColor = "gray.200"

    return (
      <Card variant={"elevated"} background={backgroundColor} m="1vh" width="300px">
        <Image src={image} boxSize="300px" objectFit={"cover"}/>
        <Stack>
        <CardBody>
          <Text as="b">
            {title}
          </Text>
          <Text>
            {description}
          </Text>
        </CardBody>
        <CardFooter>
          <Flex justify={"center"}>
            <Icon as={icon}/>
            <Link target="_blank" href={url}>Github</Link>
          </Flex>
        </CardFooter>
        </Stack>
      </Card>
    );
}

export default ProjectCard;