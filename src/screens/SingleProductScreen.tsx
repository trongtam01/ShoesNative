import {Box, Heading, HStack, Image, ScrollView, Spacer, Text} from 'native-base';
import React, {useState} from 'react';
import Colors from '../assets/data/Colors';
import Rating from '../components/Rating';
import NumericInput from 'react-native-numeric-input';
import Buttone from '../components/Buttone';
import Review from '../components/Review';

const SingleProductScreen = () => {
  const [value, setValue] = useState(0);

  const handlePress = () => {

  }

  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          source={require('../assets/images/4.jpg')}
          alt="Image"
          w="full"
          height={300}
          resizeMode="contain"
        />
        <Heading bold fontSize={15} mb={2} lineHeight={22}>
          New Adidas shoe
        </Heading>
        <Rating value={4} />
        <HStack space={2} alignItems="center" my={5}>
          <NumericInput
            value={value}
            onChange={value => console.log(value)}
            totalWidth={140}
            totalHeight={30}
            iconSize={25}
            step={1}
            maxValue={15}
            minValue={0}
            borderColor={Colors.deepGray}
            rounded
            textColor={Colors.black}
            rightButtonBackgroundColor={Colors.main}
            leftButtonBackgroundColor={Colors.main}
          />
          <Spacer />
          <Heading bold color={Colors.white} fontSize={19}>
            $400
          </Heading>
        </HStack>
        <Text lineHeight={24} fontSize={12}>
          Strict Mode is a config that you pass into NativeBase config. It takes 3 values - error, warn and off. By default, it is set to warn. Based on your chosen option, it checks for every prop in your project. It checks if you have used proper token values from the theme and if you are only passing string values to the props. If not, then it throws an error or warning, or does nothing.
        </Text>
        <Buttone onPress={() => handlePress()} bg={Colors.main} color={Colors.white} mt={12}>
          ADD TO CART
        </Buttone>
        {/* Reviews */}
        <Review/>
      </ScrollView>
    </Box>
  );
};

export default SingleProductScreen;
