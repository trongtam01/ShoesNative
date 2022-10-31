import {
  Box,
  FormControl,
  Heading,
  Select,
  Text,
  TextArea,
  View,
  VStack,
} from 'native-base';
import React, {useState} from 'react';
import Colors from '../assets/data/Colors';
import Message from './Notifications/Message';
import Rating from './Rating';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Buttone from './Buttone';

const Review = () => {
  const [ratings, setRatings] = useState('');

  const handlePress = () => {};

  return (
    <Box my={9}>
      <Heading bold fontSize={15} mb={2}>
        Review
      </Heading>
      {/* IF THERE IS NO REVIEW */}
      {/* <Message
        color={Colors.main}
        bg={Colors.deepestGray}
        bold
        children="No Review"
      /> */}
      {/* REVIEW */}
      <Box p={3} bg={Colors.deepestGray} mt={5} rounded={5}>
        <Heading fontSize={15} color={Colors.black}>
          User Doe
        </Heading>
        <Rating value={4} />
        <Text my={2} fontSize={11}>
          Jan 12 2022
        </Text>
        <Message
          color={Colors.black}
          bg={Colors.white}
          size={10}
          children=" Strict Mode is a config that you pass into NativeBase config. It takes 3 values - error, warn and off. By default, it is set to warn. Based on your chosen option, it checks for every prop in your project. "
        />
      </Box>
      {/* WRITE REVIEW */}
      {/* <Box mt={6}>
        <Heading fontSize={15} bold mb={4}>
          REVIEW THIS PRODUCT
        </Heading>
        <VStack space={6}>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: '12px',
                fontStyle: 'bold',
                color: Colors.black,
              }}>
              Rating
            </FormControl.Label>
            <Select
              borderWidth={0}
              rounded={5}
              py={4}
              bg={Colors.subGreen}
              placeholder="Choose Rate"
              _selectedItem={{
                bg: Colors.subGreen,
                endIcon: <Icon name="check" size={3} solid />,
              }}
              selectedValue={ratings}
              onValueChange={e => setRatings(e)}>
              <Select.Item label="1 - Poor" value="1" />
              <Select.Item label="2 - Fair" value="2" />
              <Select.Item label="3 - Good" value="3" />
            </Select>
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: '12px',
                fontStyle: 'bold',
                color: Colors.black,
              }}>
              Comment
            </FormControl.Label>
            <TextArea
              h={24}
              w="full"
              placeholder="This is product is good ..."
              borderWidth={0}
              bg={Colors.subGreen}
              py={4}
              _focus={{
                bg: Colors.subGreen,
              }}
            />
          </FormControl>
          <Buttone
            onPress={() => handlePress()}
            bg={Colors.main}
            color={Colors.white}>
            SUBMIT
          </Buttone>
          
          <Message
            color={Colors.white}
            bg={Colors.black}
            children="Please 'Login' to write a review"
          />
        </VStack>
      </Box> */}
    </Box>
  );
};

export default Review;
