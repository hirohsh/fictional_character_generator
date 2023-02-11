import { useState } from 'react';

import { Result } from 'src/components/Result';
import { useDataContext } from 'src/components/Context';
import { Flex, Stack, Wrap, WrapItem, HStack, Center } from '@chakra-ui/react';
import styles from 'src/styles/Home.module.css';

export default function ResultPage() {
  const { data } = useDataContext();
  return (
    <Center w="100%">
      <Result data={data} />
    </Center>
  );
}
