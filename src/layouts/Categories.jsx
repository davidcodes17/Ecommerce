import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Cate from "../components/Cate";

const Categories = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          setData(json);
        });
    };
    fetchData();
  }, []);
  return (
    <Box pt={{ lg: 50, md: 50, sm: 50, base: 50 }}>
      <Heading>Categories</Heading>
      <Grid
        gridTemplateColumns={{
          lg: "1fr 1fr 1fr 1fr 1fr",
          md: "1fr 1fr 1fr 1fr",
          sm: "1fr 1fr",
          base: "1fr 1fr",
        }}
        justifyContent={"center"}
        gap={{ lg: 10, md: 10, sm: 5, base: 2 }}
        py={5}
      >
        <Cate text={"all"} />
        <Cate text={"men's clothing"} />
        <Cate text={"jewelery"} />
        <Cate text={"electronics"} />
        <Cate text={"women's clothing"} />
      </Grid>
      <Grid
        gridTemplateColumns={{
          lg: "1fr 1fr 1fr 1fr",
          md: "1fr 1fr 1fr 1fr",
          sm: "1fr 1fr",
          base: "1fr 1fr",
        }}
      >
        {data.map((d, key) => {
          return (
            <Card
              name={d.title}
              id={d.id}
              des={d.description}
              category={d.category}
              lines={1}
              price={d.price}
              image={d.image}
              key={key}
            />
          );
        })}
      </Grid>
    </Box>
  );
};

export default Categories;
