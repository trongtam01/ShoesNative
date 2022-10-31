import {Box, FormControl, Input, ScrollView, Text, VStack} from 'native-base';
import React from 'react';
import Colors from '../../assets/data/Colors';
import uuid from 'react-native-uuid';
import Buttone from '../Buttone';

interface PropsInput {
  id?: number[] | string;
  label: string;
  type: any;
}

const Inputs = [
  {
    id: uuid.v4(),
    label: 'USERNAME',
    type: 'text',
  },
  {
    id: uuid.v4(),
    label: 'EMAIL',
    type: 'text',
  },
  {
    id: uuid.v4(),
    label: 'NEW PASSWORD',
    type: 'password',
  },
  {
    id: uuid.v4(),
    label: 'CONFIRM PASSWORD',
    type: 'password',
  },
];

const Profile = () => {
  const handlePresss = () => {};

  return (
    <Box h="full" bg={Colors.white} px={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={10} mt={5} pb={10}>
          {Inputs.map((input: PropsInput, index) => (
            <FormControl key={index}>
              <FormControl.Label
                _text={{
                  fontSize: '12px',
                  fontWeight: 'bold',
                }}>
                {input.label}
              </FormControl.Label>
              <Input
                borderWidth={0.5}
                bg={Colors.subGreen}
                borderColor={Colors.main}
                py={3}
                type={input.type}
                color={Colors.main}
                fontSize={20}
                _focus={{
                  bg: Colors.subGreen,
                  borderColor: Colors.main,
                  borderWidth: 1,
                }}
              />
            </FormControl>
          ))}
          <Buttone
            onPress={() => handlePresss()}
            bg={Colors.main}
            color={Colors.white}>
            UPDATA PROFILE
          </Buttone>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default Profile;
