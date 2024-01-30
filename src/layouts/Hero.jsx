import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Hero = () => {
  return (
    <Box>
      <Flex justifyContent={"center"}>
        <Box mt={150}>
          <Heading textAlign={"center"} fontWeight={800} fontSize={{lg : 50,md : 40, sm : "30px",base : "30px"}}>
            Welcome to DCSTORE, <br /> Where Style Meets <br /> Expression!{" "}
          </Heading>
          <Flex justifyContent={"center"}>
            <Text py={3} fontSize={{lg : 15, md : 15, sm : 12, base : 10}} width={{lg : "400px", md : "400px", sm : "300px", base : "200px"}} textAlign={"center"}>
              Elevate your wardrobe with our curated collection of
              fashion-forward clothing that speaks to your unique personality.
            </Text>
          </Flex>
          <Flex justifyContent={'center'}>
            <Button p={5} fontSize={12} borderRadius={0} border={"2px solid #BF673E"} color={"#BF673E"} bg={"#fff"} _hover={"none"}>Explore Categories</Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
