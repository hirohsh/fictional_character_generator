import { useState } from 'react';
import { Radio } from 'src/components/Select/Radio';
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  StackDivider,
  Box,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Text,
} from '@chakra-ui/react';
import styles from './Select.module.css';

export const SelectComp = (props) => {
  const [sexOpt, setSexOpt] = useState('ランダム');
  const [ageRange, setAgeRange] = useState('ランダム');
  const [personalityOpt, setPersonalityOpt] = useState('ランダム');
  const [jobOpt, setJobOpt] = useState('ランダム');
  const [hobbyOpt, setHobbyOpt] = useState('ランダム');
  const [foodOpt, setFoodOpt] = useState('ランダム');
  const [regidenceOpt, setRegidenceOpt] = useState('ランダム');
  const [times, setTtimes] = useState(1);

  const timesHandler = (value) => setTtimes(value);

  const submitHandler = () => {
    const charOpt = {
      sexOpt,
      ageRange,
      personalityOpt,
      jobOpt,
      hobbyOpt,
      foodOpt,
      regidenceOpt,
      times,
    };
    props.getCharacter(charOpt);
  };
  return (
    <Card maxW="800px" w="inherit" bg="blackAlpha.50" mb="7">
      <CardHeader>
        <Heading as="h1" size="lg" mb="3">
          設定
        </Heading>
        <Text>最大1000件まで作成可能です。</Text>
        <Text>不要なデータは「無し」を選択してください。</Text>
        <Text>作成後「JSONファイル作成」ボタンより、データをまとめてJSONファイルでダウンロード可能です。</Text>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading as="h2" size="md" mb="3">
              性別
            </Heading>
            <Radio
              options={['ランダム', '男性', '女性', '無し']}
              name="sexOpt"
              defaultValue="ランダム"
              onChange={setSexOpt}
            />
          </Box>
          <Box>
            <Heading as="h2" size="md" mb="3">
              年齢
            </Heading>
            <Radio
              options={['ランダム', '子供', '大人', '高齢', '無し']}
              name="ageRange"
              defaultValue="ランダム"
              onChange={setAgeRange}
            />
          </Box>
          <Box>
            <Heading as="h2" size="md" mb="3">
              性格
            </Heading>
            <Radio
              options={['ランダム', '無し']}
              name="personalityOpt"
              defaultValue="ランダム"
              onChange={setPersonalityOpt}
            />
          </Box>
          <Box>
            <Heading as="h2" size="md" mb="3">
              職業
            </Heading>
            <Radio options={['ランダム', '無し']} name="jobOpt" defaultValue="ランダム" onChange={setJobOpt} />
          </Box>
          <Box>
            <Heading as="h2" size="md" mb="3">
              趣味
            </Heading>
            <Radio options={['ランダム', '無し']} name="hobbyOpt" defaultValue="ランダム" onChange={setHobbyOpt} />
          </Box>
          <Box>
            <Heading as="h2" size="md" mb="3">
              好物
            </Heading>
            <Radio options={['ランダム', '無し']} name="foodOpt" defaultValue="ランダム" onChange={setFoodOpt} />
          </Box>
          <Box>
            <Heading as="h2" size="md" mb="3">
              居住地
            </Heading>
            <Radio
              options={['ランダム', '無し']}
              name="regidenceOpt"
              defaultValue="ランダム"
              onChange={setRegidenceOpt}
            />
          </Box>
          <Box>
            <Heading as="h2" size="md" mb="3">
              データ数
            </Heading>
            <NumberInput value={times} onChange={timesHandler} min={1} max={1000}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Box>
          <Button colorScheme="blue" variant="outline" onClick={submitHandler}>
            作成
          </Button>
        </Stack>
      </CardBody>
    </Card>
  );
};
