import { Button, Flex } from '@chakra-ui/react'
import React from 'react'

const ButtonNav = () => {
  return (
    <Flex gap={5}>
        <Button bg={"#BD6034"} color={"#fff"} height={"30px"} borderRadius={40} fontSize={12}>Login</Button>
        <Button bg={"#553318"} color={"#fff"} height={"30px"} borderRadius={40} fontSize={12}>Sign Up</Button>
    </Flex>
  )
}

export default ButtonNav