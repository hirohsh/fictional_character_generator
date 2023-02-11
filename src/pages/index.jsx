import { useRouter } from 'next/router';
import { useDataContext } from 'src/components/Context';
import { SelectComp } from 'src/components/Select';
import axios from 'axios';
import { Container, Center, Box } from '@chakra-ui/react';
import styles from 'src/styles/Home.module.css';

export default function Home() {
  const router = useRouter();
  const { setData } = useDataContext();

  const getCharacter = async (obj) => {
    const { data } = await axios.post('/api/create', obj);
    setData(data);
    router.push('/result');
  };

  return (
    <Container maxW="60%">
      <Center w="100%">
        <SelectComp getCharacter={getCharacter} />
      </Center>
    </Container>
  );
}
