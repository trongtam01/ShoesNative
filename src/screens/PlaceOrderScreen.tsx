import {Box, Heading, ScrollView, Text} from 'native-base';
import React from 'react';
import Colors from '../assets/data/Colors';
import OrderInfo from '../components/OrderInfo';
import Icon from 'react-native-vector-icons/FontAwesome';
import IIcon from 'react-native-vector-icons/FontAwesome5';
import OrderItem from '../components/OrderItem';
import PlaceOrderModel from '../components/PlaceOrderModel';

const PlaceOrderScreen = () => {
  return (
    <Box bg={Colors.subGreen} flex={1} safeArea pt={6}>
      <Box>
        <ScrollView horizontal={true} showsVerticalScrollIndicator={false}>
          <OrderInfo
            title="CUSTOMER"
            subTitle="Admin Doe"
            text="admin@example.com"
            icon={<Icon name="user" size={30} color={Colors.white} />}
          />
          <OrderInfo
            title="SHIPPING INFO"
            subTitle="Shipping: Tanzania"
            text="Pay Method: Paypal"
            icon={<IIcon name="shipping-fast" size={30} color={Colors.white} />}
          />
          <OrderInfo
            title="DELIVERY TO"
            subTitle="Address:"
            text="Arusha Tz, Ngarami Crater Crater, P.0 BOX 123"
            icon={<Icon name="location-arrow" size={30} color={Colors.white} />}
          />
        </ScrollView>
      </Box>
      {/* Order Items */}
      <Box px={6} flex={1} pb={3}> 
        <Heading bold fontSize={15} isTruncated my={5}>
            PRODUCTS 
        </Heading>
        <OrderItem />
        {/* Total */}
        <PlaceOrderModel />
      </Box>
    </Box>
  );
};

export default PlaceOrderScreen;
