import {Box, Center, Heading, Text} from 'native-base';
import React from 'react';
import Colors from '../assets/data/Colors';

interface Props {
  icon?: React.ReactNode;
  title?: string;
  subTitle?: string;
  text?: string;
  success?: boolean;
  danger?: boolean;
}

const OrderInfo = ({icon, title, subTitle, text, success, danger}: Props) => {
  return (
    <Center
      bg={Colors.white}
      w={200}
      py={2}
      rounded={10}
      shadow={4}
      mb={2}
      ml={5}
      mr={1}>
      <Center bg={Colors.main} w={60} h={60} rounded="full">
        {icon}
      </Center>
      <Heading
        bold
        fontSize={12}
        isTruncated
        mt={3}
        mb={2}
        color={Colors.black}>
        {title}
      </Heading>
      <Text fontSize={13} textAlign="center" italic color={Colors.black}>
        {subTitle}
      </Text>
      {/* Status */}
      {success && (
        <Center py={2} mt={2} rounded={5} w="full" bg={Colors.blue}>
          <Text fontSize={12} color={Colors.white}>
            Paid on Jan 12 2021
          </Text>
        </Center>
      )}
      {danger && (
        <Center py={2} mt={2} rounded={5} w="full" bg={Colors.red}>
          <Text fontSize={12} color={Colors.white}>
            Not Deliver
          </Text>
        </Center>
      )}
    </Center>
  );
};

export default OrderInfo;
