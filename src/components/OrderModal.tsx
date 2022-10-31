import {
  Box,
  Button,
  Center,
  HStack,
  Image,
  Modal,
  Pressable,
  Text,
  VStack,
} from 'native-base';
import React, {useState} from 'react';
import Colors from '../assets/data/Colors';
import Buttone from './Buttone';

interface OrderProps {
  title?: string;
  price?: number;
  color?: string;
}

const OrdersInfo = [
  {
    title: 'Products',
    price: 125.77,
    color: 'black',
  },
  {
    title: 'Shipping',
    price: 34.0,
    color: 'black',
  },
  {
    title: 'Tax',
    price: 23.34,
    color: 'black',
  },
  {
    title: 'Total Amout',
    price: 3458.0,
    color: 'main',
  },
];

const OrderModal = () => {
  const [showModal, setModal] = useState(false);

  const handlePress = () => {
    setModal(true);
  };

  return (
    <Center>
      <Buttone
        onPress={() => handlePress()}
        bg={Colors.main}
        color={Colors.white}
        mt={5}>
        SHOW PAYMENT & TOTAL
      </Buttone>
      <Modal isOpen={showModal} onClose={() => setModal(false)} size="lg">
        <Modal.Content maxWidth={350}>
          <Modal.CloseButton />
          <Modal.Header>Order</Modal.Header>
          <Modal.Body>
            <VStack space={7}>
              {OrdersInfo.map((i: OrderProps, index) => (
                <HStack
                  key={index}
                  alignItems="center"
                  justifyContent="space-between">
                  <Text fontWeight="medium">{i.title}</Text>
                  <Text
                    color={i.color === 'main' ? Colors.main : Colors.black}
                    bold>
                    {i.price}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Pressable
              w="full"
              justifyContent="center"
              bg={Colors.paypal}
              h={45}
              rounded={3}
              overflow="hidden"
              onPress={() => setModal(false)}>
              <Image
                source={require('../assets/images/paypal.png')}
                alt="paypal"
                resizeMode="contain"
                w="full"
                h={34}
              />
            </Pressable>
            <Button
              w="full"
              mt={2}
              bg={Colors.black}
              h={45}
              _text={{
                color: Colors.white,
              }}
              onPress={() => setModal(false)}
              _pressed={{
                bg: Colors.black,
              }}>
              PLACE AN ORDER
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default OrderModal;
