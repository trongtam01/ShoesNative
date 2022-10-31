import {HStack, Text} from 'native-base';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Colors from '../assets/data/Colors';

interface Props {
  value?: number;
  text?: string;
}

const Rating = ({value, text}: Props) => {
  const size = 8;
  const color = Colors.orange;

  return (
    <HStack space={0.4} mt={1} alignItems="center">
      {value && (
        <>
          <Icon
            name={
              value >= 1 ? 'star' : value >= 0.5 ? 'star-half-alt' : 'star-o'
            }
            size={size}
            color={color}
            solid 
          />
          <Icon
            name={
              value >= 2 ? 'star' : value >= 1.5 ? 'star-half-alt' : 'star-o'
            }
            size={size}
            color={color}
            solid 
          />
          <Icon
            name={
              value >= 3 ? 'star' : value >= 2.5 ? 'star-half-alt' : 'star-o'
            }
            size={size}
            color={color}
            solid 
          />
          <Icon
            name={
              value >= 4 ? 'star' : value >= 3.5 ? 'star-half-alt' : 'star-o'
            }
            size={size}
            color={color}
            solid 
          />
          <Icon
            name={
              value >= 5 ? 'star' : value >= 4.5 ? 'star-half-alt' : 'star-o'
            }
            size={size}
            color={color}
            solid 
          />
        </>
      )}
      {text && (
        <Text fontSize={12} ml={2}>
          {text}
        </Text>
      )}
    </HStack>
  );
};

export default Rating;
