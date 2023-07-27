import { Box, Button, Flex, Heading, Input } from "@chakra-ui/react";

interface CardProps {
  theme: any;
  formBackground: any;
}

const Card: React.FC<CardProps> = ({ theme, formBackground }) => {


    return (
        <Flex
          height={"100vh"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Flex
            direction={"column"}
            // background={t}
            p={12}
            rounded={6}
            position={"relative"}
          >
            <Heading
              mb={6}
              color={theme.fontColor}
            >
              Card 1
            </Heading>
    
            <Input
              placeholder="Email"
              variant={"outline"}
              mb={3}
              type="email" />
    
            <Input
              placeholder="Password"
              variant={"outline"}
              mb={3}
              type="password" />
    
            <Button colorScheme={"blue"}>
              Submit
            </Button>
          </Flex>
        </Flex>
        );
}

export default Card;