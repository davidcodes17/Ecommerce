import { Box, Flex, Input, Text } from '@chakra-ui/react'
import { AddCircle, MinusCirlce } from 'iconsax-react'
import React from 'react'

const NumberManager = () => {
  return (
    <Box>
        <Flex alignItems={'center'} gap={5}>
        <Text fontSize={25}>Quantity : </Text>
        <Flex alignItems={'center'} border={"1px solid #000"} px={1} borderRadius={40} width={"fit-content"}>
            <Box><AddCircle color='#000' variant='Bold' /></Box>
            <Input width={"60px"} fontSize={12} height={"30px"} border={0} />
            <Box><MinusCirlce color='#000' variant='Bold' /></Box>
        </Flex>
        </Flex>
    </Box>
  )
}

export default NumberManager