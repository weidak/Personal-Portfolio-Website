import { Stack, Box, Flex, Text, Container, Divider, Heading, ListItem, Icon, UnorderedList } from "@chakra-ui/react";
import { BsCodeSlash, BsGlobeAmericas, BsFillCloudFill, BsDatabaseFill } from "react-icons/bs"
import { MdMiscellaneousServices } from "react-icons/md"
import { forwardRef, ForwardRefRenderFunction } from "react";

interface SkillSetProps {
  theme: any;
}

const SkillSet: ForwardRefRenderFunction<HTMLDivElement, SkillSetProps> = ({ theme }, ref) => {

  const skillsets = [
    {
      title: 'Languages',
      logo: BsCodeSlash,
      color: 'red.400',
      skills: ['Java', 'Python', 'C/C++']
    },
    {
      title: 'Web Development',
      logo: BsGlobeAmericas,
      color: 'blue.400',
      skills: ['ReactJS/Typescript', 'VueJS, Firebase', 'Django']
    },
    {
      title: 'Cloud (Training)',
      logo: BsFillCloudFill,
      color: 'white.400',
      skills: ['Architecting on AWS', 'Developing on AWS']
    },
    {
      title: 'Data Engineering',
      logo: BsDatabaseFill,
      color: 'yellow.400',
      skills: ['Apache Airflow Fundamentals', 'DAG Authoring for Apache Airflow']
    },
    {
      title: 'Others',
      logo: MdMiscellaneousServices,
      color: 'green.400',
      skills: ['Docker', 'AI Singapore - AI4I Literacy in AI']
    },
  ]

  return (
    <Box as="section" id="skillsets" color={theme.fontColor} ref={ref} m={theme.containerMargins}>
      <Flex justify="center">
        <Stack align="center">
          <Heading as="u" size="lg" mb="10">
            What I can do
          </Heading>
          <Stack flexDir={['column', 'column', 'column', 'row']}>
          {skillsets.map((category, idx) => (
            <Container key={idx} mt="2vh">
              <Stack align={"center"}>
                <Icon boxSize="2em" as={category.logo} color={category.color}/>
                <Text fontSize={[19, 17]}>
                  {category.title}
                </Text>
                <Divider margin={"10px"}/>
              </Stack>
              <UnorderedList>
                {category.skills.map((skill, index) => (
                  <ListItem key={index}>
                    {skill}
                  </ListItem>
                ))}
              </UnorderedList>
            </Container>
          ))}
          </Stack>
        </Stack>
      </Flex>
    </Box>
  );
}

export default forwardRef(SkillSet);