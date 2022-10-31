import React from 'react';
import {
  Box,
  Center,
  FormControl,
  HStack,
  Image,
  Input,
  ScrollView,
  Spacer,
  Text,
  VStack,
} from 'native-base';
import Colors from '../assets/data/Colors';
import Buttone from '../components/Buttone';
import Icon from 'react-native-vector-icons/FontAwesome';

interface PaymentProps {
  image?: any;
  alt?: string;
  icon?: any;
}

const paymentMethods = [
  {
    image: require(`../assets/images/paypal.png`),
    alt: 'paypal',
    icon: 'check',
  },
  {
    image: require(`../assets/images/discover.jpg`),
    alt: 'discover',
    icon: 'no-check',
  },
  {
    image: require(`../assets/images/ggpay.jpg`),
    alt: 'google pay',
    icon: 'no-check',
  },
];

const PaymentScreen = () => {
  const handlePresss = () => {};
  return (
    <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
      {/* Header */}
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>
          PAYMENT METHOD
        </Text>
      </Center>
      {/* Selection */}
      <Box h="full" bg={Colors.subGreen} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {paymentMethods.map((i: PaymentProps, index) => (
              <HStack
                key={index}
                alignItems="center"
                justifyContent="space-between"
                bg={Colors.white}
                px={3}
                py={1}
                rounded={10}>
                <Box>
                  <Image
                    source={i.image}
                    alt={i.alt}
                    resizeMode="contain"
                    w={60}
                    h={50}
                  />
                </Box>
                {i.icon === 'check' ? (
                  <Icon name="check" size={30} color={Colors.main} />
                ) : (
                  <Icon name="circle-thin" size={30} color={Colors.main} />
                )}
              </HStack>
            ))}
            <Buttone
              onPress={() => handlePresss()}
              bg={Colors.main}
              color={Colors.white}
              mt={5}>
              CONTINUE
            </Buttone>
            <Text italic textAlign="center">
              Payment method is <Text bold>Paypal</Text> by default
            </Text>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
};

export default PaymentScreen;
