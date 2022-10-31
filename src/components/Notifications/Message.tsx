import {Center, Text, View} from 'native-base';
import {string} from 'prop-types';
import React from 'react';

interface Props {
  bg?: string;
  color?: string;
  children?: React.ReactNode;
  size?: number | string;
  bold?: boolean;
}

const Message = ({bg, color, children, size, bold}: Props) => {
  return (
    <Center bg={bg} p={4} rounded={5}>
      <Text color={color} fontSize={size} bold={bold}>
        {children}
      </Text>
    </Center>
  );
};

export default Message;
