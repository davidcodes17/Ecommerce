import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../components/Logo";
import Nav from "../components/Nav";
import ButtonNav from "../components/ButtonNav";

const Header = ({ color }) => {
  return (
    <Flex
      justifyContent={"space-between"}
      bg={"#BF673E"}
      left={5}
      right={5}
      px={10}
      py={5}
      zIndex={99}
      borderRadius={40}
      boxShadow={"0px 0px 10px #ddd"}
      position={"fixed"}
      alignItems={"center"}
    >
      <Logo />
      <Nav color={"#fff"} />
      {/* <ButtonNav /> */}
    </Flex>
  );
};

export default Header;
