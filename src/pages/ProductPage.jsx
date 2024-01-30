import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../layouts/Header";
import NumberManager from "../components/NumberManager";
import { Truck } from "iconsax-react";
import Extras from "../layouts/Extras";

const ProductPage = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      fetch("https://fakestoreapi.com/products/" + id)
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
      <Flex mt={20} gap={40}>
        <Image src={data.image} width={300} height={400} />
        <Box>
          <Text fontSize={40} width={600} fontWeight={800}>
            {data.title}
          </Text>
          <Flex alignItems={'center'} gap={20} py={3}>
            <Text fontSize={25}>Price : ${data.price}</Text>
            <NumberManager />
          </Flex>
          <Text width={600}>{data.description}</Text>
          <Text fontSize={20}>Category : {data.category}</Text>
          <Flex gap={5} pt={3} alignItems={"center"}>
            <Truck size={40} />
            <Text fontSize={20}>Free Delivery!</Text>
          </Flex>
        </Box>
      </Flex>
      <Extras cat={data.category} />
    </Box>
  );
};

export default ProductPage;
