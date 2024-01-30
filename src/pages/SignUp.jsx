import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { LoginCurve } from "iconsax-react";
import React, { useState } from "react";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [dis, setDis] = useState("none");
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const submit = () => {
    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      body: JSON.stringify({
        username: "mor_2314",
        password: "83r5^_",
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };
  return (
    <Box>
      <Flex justifyContent={{lg : "space-between", md : "space-between", sm : "center", base : "center"}}>
        <Image
          display={{lg : "block", md : "block", sm : "none", base : "none"}}
          width={"50vw"}
          height={"100vh"}
          src="/bg.jpg"
          objectFit={"cover"}
        />
        <Box py={{lg : "40px", md : "6%", sm : "10%", base : "20%"}} px={{lg : 40}}>
          <Logo />
          <Text fontSize={40}>Welcome User</Text>
          <Text>Create a New Account</Text>
          <Box pt={5}>
            <FormLabel fontSize={12}>Username</FormLabel>
            <Input
              width={300}
              type="email"
              value={form.username}
              border={"0"}
              onChange={(e)=>{
                setForm({...form, username : e.target.value})
              }}
              borderBottom={"2px solid #000"}
              borderRadius={0}
              fontSize={12}
              placeholder="johndoe"
            />
          </Box>
          <Box pt={5}>
            <FormLabel fontSize={12}>Email Address</FormLabel>
            <Input
              width={300}
              type="email"
              value={form.email}
              border={"0"}
              onChange={(e)=>{
                setForm({...form, email : e.target.value})
              }}
              borderBottom={"2px solid #000"}
              borderRadius={0}
              fontSize={12}
              placeholder="johndoe@gmail.com"
            />
          </Box>
          <Box py={5}>
            <FormLabel fontSize={12}>Password</FormLabel>
            <Input
              width={300}
              type="password"
              border={"0"}
              value={form.password}
              onChange={(e)=>{
                setForm({...form, password : e.target.value})
              }}
              borderBottom={"2px solid #000"}
              borderRadius={0}
              fontSize={12}
              placeholder="******************"
            />
          </Box>
            <Button
              bg={"#BF673E"}
              _hover={"none"}
              onClick={() => {
                setDis("block");
                submit();
              }}
              color={"#fff"}
              rightIcon={<Spinner display={dis} />}
              borderRadius={0}
              fontSize={12}
              width={"100%"}
            >
              Sign Up
            </Button>
          <Link to={"/"}>
            <Text fontSize={12} textAlign={"center"} py={2}>
              Already have an account? Login
            </Text>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default SignUp;
