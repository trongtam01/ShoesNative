import {
  Box,
  Center,
  FormControl,
  Input,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import React, {HTMLInputTypeAttribute} from 'react';
import Colors from '../assets/data/Colors';
import Buttone from '../components/Buttone';

interface InputProps {
  label: string;
  type: any;
}

const ShippingInputs = [
  {
    label: 'ENTER CITY',
    type: 'text',
  },
  {
    label: 'ENTER COUNTRY',
    type: 'text',
  },
  {
    label: 'ENTER POSTAL CODE',
    type: 'text',
  },
  {
    label: 'ENTER ADDRESS',
    type: 'text',
  },
];

const ShippingScreen = () => {
  const handlePresss = () => {};

  return (
    <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
      {/* Header */}
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>
          DELIVERY ADDRESS
        </Text>
      </Center>
      {/* Inputs */}
      <Box h="full" bg={Colors.white} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {ShippingInputs.map((i: InputProps, index) => (
              <FormControl key={index}>
                <FormControl.Label
                  _text={{
                    fontSize: '12px',
                    fontWeight: 'bold',
                  }}>
                  {i.label}
                </FormControl.Label>
                <Input
                  borderWidth={0.2}
                  borderColor={Colors.main}
                  bg={Colors.subGreen}
                  py={4}
                  type={i.type}
                  color={Colors.main}
                  _focus={{
                    bg: Colors.subGreen,
                    borderWidth: 1,
                    borderColor: Colors.main,
                  }}
                />
              </FormControl>
            ))}
            <Buttone
              onPress={() => handlePresss()}
              bg={Colors.main}
              color={Colors.white}
              mt={5}
              >
              CONTINUE
            </Buttone>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
};

export default ShippingScreen;
