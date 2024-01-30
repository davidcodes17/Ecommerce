import { Box, Button, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { AddCircle } from "iconsax-react";
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ image, des, price, name, id, category, lines }) => {
  return (
    <Link to={"/product/"+id}>
      <Box
        width={250}
        as={motion.div}
        whileHover={{ scale: 0.9 }}
        mt={10}
        cursor={"pointer"}
        onClick={(e) => {}}
      >
        <Image
          src={image}
          width={"200px"}
          height={"200px"}
          objectFit={"contain"}
        />
        <Text
          fontWeight={800}
          fontSize={20}
          pt={3}
          className="clamped-text"
          style={{ WebkitLineClamp: lines }}
        >
          {name}
        </Text>
        {/* <Text fontWeight={800} fontSize={10} pt={3}>{des}</Text> */}
        <Text>{category}</Text>
        <Text fontSize={20} fontWeight={800}>
          Price : ${price}
        </Text>
        <Button
          leftIcon={<AddCircle />}
          color={"#fff"}
          bg={"#553318"}
          width={"100%"}
          my={2}
        >
          Add to Cart
        </Button>
      </Box>
    </Link>
  );
};

export default Card;
