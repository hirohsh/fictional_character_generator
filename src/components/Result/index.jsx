import {
  Box,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Heading,
  Stack,
  StackDivider,
  Text,
  Tag,
  Wrap,
  WrapItem,
  Image,
  Center,
  Button,
  Divider,
  ButtonGroup,
  Flex,
  IconButton,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowRightIcon, ArrowLeftIcon } from '@chakra-ui/icons';
import styles from './Result.module.css';

export const Result = ({ data }) => {
  const [dataUrl, setDataUrl] = useState('');
  const [index, setIndex] = useState(0);
  const clickNextHandler = () => {
    setIndex((pre) => {
      if (pre + 1 >= data.length) {
        return 0;
      } else {
        return pre + 1;
      }
    });
  };
  const clickPrevHandler = () => {
    setIndex((pre) => {
      if (pre - 1 < 0) {
        return data.length - 1;
      } else {
        return pre - 1;
      }
    });
  };
  useEffect(() => {
    const newData = [...data];
    for (const item of newData) {
      for (const key of Object.keys(item)) {
        if (item[key] === null) delete item[key];
      }
    }
    const jsonText = JSON.stringify(newData);
    const blob = new Blob([jsonText], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    setDataUrl(url);
  }, [data]);

  return (
    <Card maxW="xl" w="inherit" bg="blackAlpha.50">
      <CardHeader p="5">
        <Center>
          <Heading as="h1" size="lg">
            {data.length > 1 ? `プロフィール ${index + 1}` : 'プロフィール'}
          </Heading>
        </Center>
      </CardHeader>

      <CardBody pt="1">
        <Flex justify={data.length > 1 ? 'space-between' : 'center'} align="center" mb="5">
          {data.length > 1 ? (
            <IconButton
              onClick={clickPrevHandler}
              borderRadius="full"
              colorScheme="blue"
              variant="outline"
              aria-label="previous page button"
              icon={<ArrowLeftIcon />}
            />
          ) : null}
          {data[index].sex &&
            (data[index].sex === '男性' ? (
              <Image src="/man.png" alt="" boxSize="150px" borderRadius="full" border="1px" borderColor="gray.400" />
            ) : (
              <Image src="/woman.png" alt="" boxSize="150px" borderRadius="full" border="1px" borderColor="gray.400" />
            ))}
          {!data[index].sex ? (
            <Image src="/unknown.png" alt="" boxSize="150px" borderRadius="full" border="1px" borderColor="gray.400" />
          ) : null}
          {data.length > 1 ? (
            <IconButton
              onClick={clickNextHandler}
              borderRadius="full"
              colorScheme="blue"
              variant="outline"
              aria-label="next page button"
              icon={<ArrowRightIcon />}
            />
          ) : null}
        </Flex>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Flex align="center">
              <Heading as="h2" size="md" mr="3">
                名前：
              </Heading>
              <Text fontSize="xl">{data[index].name}</Text>
            </Flex>
          </Box>
          {data[index].sex && (
            <Box>
              <Flex align="center">
                <Heading as="h2" size="md" mr="3">
                  性別：
                </Heading>
                <Text fontSize="xl">{data[index].sex}</Text>
              </Flex>
            </Box>
          )}
          {data[index].age && (
            <Box>
              <Flex align="center">
                <Heading as="h2" size="md" mr="3">
                  年齢：
                </Heading>
                <Text fontSize="xl">{data[index].age}才</Text>
              </Flex>
            </Box>
          )}
          {data[index].personality && (
            <Box>
              <Flex align="center">
                <Heading as="h2" size="md" mr="3">
                  性格：
                </Heading>
                <Text fontSize="xl">{data[index].personality}</Text>
              </Flex>
            </Box>
          )}
          {data[index].job && (
            <Box>
              <Flex align="center">
                <Heading as="h2" size="md" mr="3">
                  職業：
                </Heading>
                <Text fontSize="xl">{data[index].job.job}</Text>
              </Flex>
            </Box>
          )}
          {data[index].job && (
            <Box>
              <Flex align="center">
                <Heading as="h2" size="md" mr="3">
                  年収：
                </Heading>
                <Text fontSize="xl">{data[index].job.annualIncome}万</Text>
              </Flex>
            </Box>
          )}
          {data[index].residence && (
            <Box>
              <Flex align="center">
                <Heading as="h2" size="md" mr="3">
                  居住地：
                </Heading>
                <Text fontSize="xl">{data[index].residence}</Text>
              </Flex>
            </Box>
          )}
          {data[index].hobbies && (
            <Box>
              <Heading as="h2" size="md" mb="3" mr="3">
                趣味：
              </Heading>
              <Wrap>
                {data[index].hobbies.map((hobby) => {
                  return (
                    <WrapItem>
                      <Tag size="md" variant="solid" colorScheme="yellow" key={hobby}>
                        {hobby}
                      </Tag>
                    </WrapItem>
                  );
                })}
              </Wrap>
            </Box>
          )}
          {data[index].someFood && (
            <Box>
              <Heading as="h2" size="md" mb="3">
                好物：
              </Heading>
              <Wrap>
                {data[index].someFood.map((food) => {
                  return (
                    <WrapItem>
                      <Tag size="md" variant="solid" colorScheme="pink" key={food}>
                        {food}
                      </Tag>
                    </WrapItem>
                  );
                })}
              </Wrap>
            </Box>
          )}
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Center w="100%">
          <ButtonGroup gap="4">
            <NextLink href="/">
              <Button as="span" colorScheme="blue" variant="outline">
                戻る
              </Button>
            </NextLink>
            <Button as="a" colorScheme="blue" variant="outline" href={dataUrl} download="testData.json">
              JSONファイル作成
            </Button>
          </ButtonGroup>
        </Center>
      </CardFooter>
    </Card>
  );
};
