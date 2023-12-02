import { Heading, Box, Image, Text, Stack } from "@chakra-ui/react";

interface IntroductionProps {
  theme: any;
}

const Introduction: React.FC<IntroductionProps> = ({ theme }) => {
  const hello = "Hello, I'm Weida";
  const caption = "An aspiring Software Engineer from the National University of Singapore.";
  const displayPic = "/hero/hero_avatar.png"

  return (
    <Box as="section" h="100vh" alignItems="center" display="flex" justifyContent="center" p={theme.containerMargins}>
      <Stack justify="center" align="center" flexDir={['column', 'column', 'row', 'row']} spacing={20}>
        <Box>
          <Heading color={theme.fontColor}>
            {hello}
          </Heading>
          <Text color={theme.fontColor}>
            {caption}
          </Text>
        </Box>
        <Box width={["90%", "70%", "50%", "30%"]}>
          <Image src={displayPic} alt="profile pic" />
        </Box>
      </Stack>
    </Box>
  );
};

export default Introduction;
