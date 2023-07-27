import { Heading, Box, Image, Text, Stack } from "@chakra-ui/react";

interface IntroductionProps {
  fontColor: string;
}

const Introduction: React.FC<IntroductionProps> = ({ fontColor }) => {
  const hello = "Hello, I'm Weida";
  const caption = "A final year Computer Engineering student at the National University of Singapore.";
  const displayPic = "https://i.imgur.com/gKJSU0D.png";

  return (
    <Box as="section" h="calc(80vh)" alignItems="center" margin="auto">
      <Stack justify="center" align="center" flexDir={['column', 'column', 'row', 'row']} spacing={20}>
        <Box>
          <Heading color={fontColor}>
            {hello}
          </Heading>
          <Text color={fontColor}>
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
