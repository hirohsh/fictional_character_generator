const { useRadio, useRadioGroup, HStack, Box } = require('@chakra-ui/react');

const RadioCard = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: 'blue.400',
          color: 'white',
          borderColor: 'blue.400',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        px={3}
        py={1}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export const Radio = (props) => {
  const options = props.options;

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: props.name,
    defaultValue: props.defaultValue,
    onChange: props.onChange,
  });

  const group = getRootProps();

  return (
    <HStack {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        );
      })}
    </HStack>
  );
};
