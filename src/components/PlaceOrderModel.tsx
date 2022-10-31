import {Box, Button, Center, HStack, Modal, Text, VStack} from 'native-base';
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

const PlaceOrderModel = () => {
  const [showModal, setModal] = useState(false);

  const handlePress = () => {
    setModal(true);
  };

  return (
    <Center>
      <Buttone
        onPress={() => handlePress()}
        bg={Colors.black}
        color={Colors.white}
        mt={5}>
        SHOW TOTAL
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
            <Button
              flex={1}
              bg={Colors.main}
              h={45}
              _text={{
                color: Colors.white,
              }}
              onPress={() => setModal(false)}
              _pressed={{
                bg: Colors.main,
              }}>
                PLACE AN ORDER
              </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default PlaceOrderModel;
