import { Box, Flex, Text } from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import React from "react";
import { Link } from "react-router-dom";
import { LogoutCurve, User } from "iconsax-react";

const Nav = ({ color }) => {
  return (
    <Flex gap={5} fontSize={12} alignItems={"center"}>
      <Box>
        <AiOutlineShoppingCart color="#fff" size={20} />
      </Box>
      <Text
        display={{ lg: "block", md: "block", sm: "none", base: "none" }}
        color={"#fff"}
      >
        areegbedavid
      </Text>
      <Text
        display={{ lg: "block", md: "block", sm: "none", base: "none" }}
        color={color}
        as={Link}
        to={"/"}
      >
        Logout
      </Text>

      <Box display={{ lg: "none", md: "none", sm: "block", base: "block" }}>
        <Link>
          <User color="#fff" />{" "}
        </Link>
      </Box>
      <Box display={{ lg: "none", md: "none", sm: "block", base: "block" }}>
        <Link>
          <LogoutCurve color="#fff" />
        </Link>
      </Box>
    </Flex>
  );
};

export default Nav;
