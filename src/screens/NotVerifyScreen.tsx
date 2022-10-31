import {Box, Button, Center, Image, VStack} from 'native-base';
import React from 'react';
import {Text} from 'react-native';
import Colors from '../assets/data/Colors';
import Buttone from '../components/Buttone';

const NoVerifyScreen = () => {
  const handlePress = () => {};

  return (
    <Box flex={1} bg={Colors.main} safeAreaTop>
      <Center w="full" h={250}>
        <Image
          alt="logo"
          size="lg"
          source={require('../assets/images/favicon.png')}
        />
      </Center>
      <VStack space={6} px={5} alignItems="center">
        <Buttone
          bg={Colors.black}
          color={Colors.white}
          onPress={() => handlePress()}>
          REGISTER
        </Buttone>
        <Buttone
          bg={Colors.black}
          color={Colors.white}
          onPress={() => handlePress()}>
          LOGIN
        </Buttone>
      </VStack>
    </Box>
  );
};

export default NoVerifyScreen;
