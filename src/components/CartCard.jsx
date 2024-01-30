import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import NumberManager from "./NumberManager";
import { Trash } from "iconsax-react";

const CartCard = ({image,name,category,price}) => {
  return (
    <Box my={3}>
      <Flex alignItems={"center"} justifyContent={"space-between"} gap={100}>
        <Flex alignItems={"center"} gap={20}>
          <Image
            src={image}
            width={200}
            height={200}
            objectFit={"contain"}
          />
          <Box>
            <Text fontSize={20} width={300} fontWeight={800}>
              {name}
            </Text>
            <Text py={2}>Category  : {category}</Text>
            <Text>Price : ${price}</Text>
            <NumberManager />
          </Box>
        </Flex>
        <Box cursor={'pointer'}>
          <Trash size={30} variant="Bold" />
        </Box>
      </Flex>
    </Box>
  );
};

export default CartCard;
