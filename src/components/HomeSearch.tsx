import {Box, HStack, Input, Pressable, Text, View} from 'native-base';
import React from 'react';
import Colors from '../assets/data/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';

const HomeSearch = () => {
  return (
    <HStack
      space={3}
      w="full"
      px={6}
      bg={Colors.main}
      py={4}
      alignItems="center"
      safeAreaTop>
      <Input
        placeholder="Nike, Puma, Adidas ..."
        w="85%"
        bg={Colors.white}
        type="text"
        h={12}
        borderWidth={0}
        _focus={{
          bg: Colors.white,
        }}
        variant="filled"
      />
      <Pressable ml={3}>
        <Icon name="shopping-bag" size={24} color={Colors.white} />
        <Box
          px={1}
          rounded="full"
          position="absolute"
          top={-13}
          left={2}
          bg={Colors.red}
          _text={{
            color: Colors.white,
            fontSize: '11px',
          }}></Box>
      </Pressable>
    </HStack>
  );
};

export default HomeSearch;
