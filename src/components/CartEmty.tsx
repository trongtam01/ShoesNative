import {Box, Center, Text} from 'native-base';
import React from 'react';
import Colors from '../assets/data/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Buttone from './Buttone';

const CartEmty = () => {
  const handlePress = () => {};

  return (
    <Box flex={1} px={4}>
      <Center h="90%">
        <Center w={200} h={200} bg={Colors.white} rounded="full">
          <Icon name="shopping-basket" size={64} color={Colors.main} solid />;
        </Center>
        <Text color={Colors.main} bold mt={5}>
          CART IS EMPTY
        </Text>
      </Center>
      <Buttone
        onPress={() => handlePress()}
        bg={Colors.black}
        color={Colors.white}>
        START SHOPPING
      </Buttone>
    </Box>
  );
};

export default CartEmty;
