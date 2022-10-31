import {
  View,
  Text,
  Box,
  Image,
  Heading,
  VStack,
  Input,
  Button,
  Pressable,
} from 'native-base';
import React from 'react';
import Colors from '../assets/data/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = () => {
  return (
    <Box flex={1} bg={Colors.black}>
      <Image
        flex={1}
        alt="Logo"
        source={require('../assets/images/cover.jpg')}
        resizeMode="cover"
        size="lg"
        w="full"
      />
      <Box
        w="full"
        h="full"
        position="absolute"
        top="0"
        px="6"
        justifyContent="center">
        <Heading>LOGIN</Heading>
        <VStack space={8} pt="6">
          {/* Email */}
          <Input
            InputLeftElement={
              <Icon name="rocket" size={20} color={Colors.main} />
            }
            pl={2}
            variant="underline"
            placeholder="Email"
            w="70%"
            type="text"
            color={Colors.main}
            borderBottomColor={Colors.underline}
          />
          {/* Passoword */}
          <Input
            InputLeftElement={<Icon name="eye" size={20} color={Colors.main} />}
            pl={2}
            type="password"
            variant="underline"
            placeholder="******"
            w="70%"
            color={Colors.main}
            borderBottomColor={Colors.underline}
          />
        </VStack>
        <Button
          _pressed={{bg: Colors.main}}
          _text={{
            color: Colors.white,
          }}
          my={30}
          w="40%"
          rounded={50}
          bg={Colors.main}>
          LOGIN
        </Button>
        <Pressable mt={4}>
          <Text color={Colors.deepestGray}>SIGN UP</Text>
        </Pressable>
      </Box>
    </Box>
  );
};

export default LoginScreen;
