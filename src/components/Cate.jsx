import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const Cate = ({ text }) => {
  return (
    <Link to={"/products/" + text}>
      <Box>
        <Text
          px={4}
          py={2}
          textAlign={"center"}
          className="cate"
          bg={"none"}
          fontSize={{lg : 15, md : 15, sm : 12, base : 10}}
          color={"#BF673E"}
          border={"2px solid #BF673E"}
          borderRadius={40}
        >
          {text}
        </Text>
      </Box>
    </Link>
  );
};

export default Cate;
