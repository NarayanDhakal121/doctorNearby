import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="#738CE2AD" padding="35px">
      <Text fontWeight="bold" fontSize="30px">
        About us:
      </Text>
      <Flex flexDirection="column" gap="5" margin="20px">
        <Text fontWeight="bold">Email: ReactIntern@testDesign.org</Text>
        <Text fontWeight="bold">Contact: +977-9812345678</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
