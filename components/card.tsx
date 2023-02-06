import { Box, Button, Flex, Heading, Input } from "@chakra-ui/react";

export default function Card(formBackground: any) {


    return (
        <Flex
          height={"100vh"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Flex
            direction={"column"}
            background={formBackground}
            p={12}
            rounded={6}
            position={"relative"}
          >
            <Heading
              mb={6}
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
    
            <Button colorScheme={"teal"}>
              Submit
            </Button>
          </Flex>
        </Flex>
        );
}