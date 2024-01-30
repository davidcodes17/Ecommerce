import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Cate from "../components/Cate";

const Extras = ({cat}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      fetch("https://fakestoreapi.com/products/category/"+cat)
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
      <Heading>Related Products</Heading>
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

export default Extras;
