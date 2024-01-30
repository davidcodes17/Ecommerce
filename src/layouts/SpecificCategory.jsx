import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Card from "../components/Card";
import { useParams } from "react-router-dom";

const SpecificCategory = () => {
  const { category } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      fetch("https://fakestoreapi.com/products/category/" + category)
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          setData(json);
        });
    };
    fetchData();
  }, []);
  return (
    <Box p={5}>
      <Header />
      <Flex gap={5} py={5}>
        <Text>Products</Text>
        <Text>Categories</Text>
        <Text>{category}</Text>
      </Flex>
      <Grid gridTemplateColumns={"1fr 1fr 1fr 1fr"}>
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

export default SpecificCategory;
