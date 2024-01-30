import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "../layouts/Header";
import Hero from "../layouts/Hero";
import Categories from "../layouts/Categories";

const Home = () => {
  return (
    <Box>
      <Box>
        <Box className="bg" p={5}>
          <Header color={"#fff"} />
          <Hero />
        </Box>
      </Box>
      <Box p={5}>
        <Categories />
      </Box>
    </Box>
  );
};

export default Home;
