import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CartCard from "../components/CartCard";
import Checkout from "../layouts/Checkout";
import Header from "../layouts/Header";

const Cart = () => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [prod, setAllProd] = useState([]);

  useEffect(() => {
    const fetchSingleCartDetails = (id) => {
      fetch("https://fakestoreapi.com/products/"+id)
        .then((res) => res.json())
        .then((json) => {
          // console.log(json);
          setCart([...cart, json]);
        });
    };
    fetchSingleCartDetails(1);
    const fetchAllCart = ()=>{
        fetch('https://fakestoreapi.com/carts')
        .then(res=>res.json())
        .then(json=>{
            console.log(json);
            setData(json);
            json.products && json.products.map((pro)=>{
              console.log(pro)
              fetchSingleCartDetails(pro.productId);
            })
            })
    }
    fetchAllCart();
  },[]);

  // console.log(cart)
  return (
    <Box>
      <Box p={5}>
        <Header />
        <Flex justifyContent={"space-between"} py={10}>
          <Box>
            {
               data && data.map((d,i)=>(
                    <CartCard key={i} image={cart.image} category={cart.category} name={cart.title} price={cart.price} />
                ))
            }
          </Box>
          <Box>
            <Checkout />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Cart;
