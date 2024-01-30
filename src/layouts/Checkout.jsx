import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Checkout = () => {
  return (
    <Box width={"100%"}>
      <Heading>Detailed Summary</Heading>
      <Flex justifyContent={'space-between'} py={2}>
        <Text>SubTotal</Text>
        <Text>$1,78999</Text>
      </Flex>
      <Flex justifyContent={'space-between'} py={2}>
        <Text>Shipping Fee</Text>
        <Text>$1,78999</Text>
      </Flex>
      <Flex justifyContent={'space-between'} py={2}>
        <Text>Taxes</Text>
        <Text>$1,78999</Text>
      </Flex>
      <Box></Box>
      <Flex justifyContent={'space-between'} py={2}>
        <Text>Total</Text>
        <Text>$1,78999</Text>
      </Flex>
        <Flex justifyContent={'space-between'} py={5}>
            <Button borderRadius={10}>Checkout Now!</Button>
            <Button borderRadius={10}>Pay Now!</Button>
        </Flex>
    </Box>
  );
};

export default Checkout;
