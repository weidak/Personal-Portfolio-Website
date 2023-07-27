import { Stack, Box, Flex, Text, Container, List, ListIcon, Heading, ListItem } from "@chakra-ui/react";
import { BiRadioCircleMarked } from "react-icons/bi";

interface SkillSetProps {
  fontColor: string;
}

const SkillSet: React.FC<SkillSetProps> = ({ fontColor }) => {

  const skillsets = [
    {
      title: 'Programming Languages',
      skills: ['Java', 'Python', 'C/C++']
    },
    {
      title: 'Web-Development',
      skills: ['ReactJS/Typescript', 'VueJS, Firebase', 'HTML, CSS, JavaScript']
    },
    {
      title: 'Cloud (Training)',
      skills: ['Architecting on AWS', 'Developing on AWS']
    },
    {
      title: 'Data Engineering',
      skills: ['Apache Airflow Fundamentals', 'DAG Authoring for Apache Airflow']
    },
    {
      title: 'Others',
      skills: ['Docker', 'AI Singapore - AI4I Literacy in AI']
    },
  ]

  return (
    <Box as="section" id="skillsets" color={fontColor}>
      <Flex justify="center">
        <Stack align="center" width={["90%", "80%", "70%", "70%"]}>
          <Heading as="u" size="lg" mb="10">
            Skills
          </Heading>
          <Stack flexDir={['column', 'column', 'row', 'row']}>
          {skillsets.map((category, idx) => (
            <Container
              key={idx}
            >
              <Text as="u" fontSize={18}>
                {category.title}
              </Text>
              <List>
                {category.skills.map((skill, index) => (
                  <ListItem key={index} noOfLines={[1, 2]}>
                    <ListIcon as={BiRadioCircleMarked}/>
                    {skill}
                    </ListItem>
                ))}
              </List>
            </Container>
          ))}
          </Stack>
        </Stack>
      </Flex>
    </Box>
  );
}

export default SkillSet;