import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Button } from '@chakra-ui/react';

function Navbar() {
  return (
    <Box bg="teal.500" p={4}>
      <Flex as="nav" justify="space-between" align="center">
        <Box>
          <Link to="/">
            <Button colorScheme="teal" variant="ghost">Home</Button>
          </Link>
          <Link to="/about">
            <Button colorScheme="teal" variant="ghost">About</Button>
          </Link>
          <Link to="/blog">
            <Button colorScheme="teal" variant="ghost">Blog</Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
}

export default Navbar;
