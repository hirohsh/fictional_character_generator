import { Container, Image, Box, Flex, Heading } from '@chakra-ui/react';
import NextLink from 'next/link';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <Box px={2} bgColor="blackAlpha.800" w="100%" mb="5%">
      <Container maxW="60%">
        <Flex as="header" py="4" justifyContent="space-between" alignItems="center">
          <NextLink href="/" passHref>
            <Heading as="h1" fontSize="md" cursor="pointer" color="whiteAlpha.800">
              架空人物ジェネレーター
            </Heading>
          </NextLink>
          <Box as="a" href="https://twitter.com/49Hiiro" borderRadius="full">
            <Image src="/twitter.png" alt="ツイッターアイコン" boxSize="30px" objectFit="cover" />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
