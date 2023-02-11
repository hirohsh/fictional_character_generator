import { Box, Flex, Heading } from '@chakra-ui/react';
import NextLink from 'next/link';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <Box px={2} bgColor="blackAlpha.800" w="100%" mt="10%">
      <Flex as="footer" py="10" justifyContent="space-between" alignItems="center"></Flex>
    </Box>
  );
};
