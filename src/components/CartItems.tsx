import {
  Box,
  Button,
  Center,
  HStack,
  Image,
  Pressable,
  Text,
  VStack,
} from 'native-base';
import React from 'react';
import {SwipeListView} from 'react-native-swipe-list-view';
import Colors from '../assets/data/Colors';
import ProductsData from '../assets/data/ProductsData';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface PropsItems {
  item?: Products;
}

const Swiper = () => (
  <SwipeListView
    rightOpenValue={-50}
    previewRowKey="0"
    previewOpenValue={-40}
    previewDuration={3000}
    data={ProductsData.slice(0, 2)}
    renderItem={renderItems}
    renderHiddenItem={renderHiddenItems}
    showsVerticalScrollIndicator={false}
  />
);

const renderItems = (data: PropsItems) => (
  <Pressable>
    <Box ml={6} mb={3}>
      <HStack
        alignItems="center"
        bg={Colors.white}
        shadow={1}
        rounded={10}
        overflow="hidden">
        <Center w="25%" bg={Colors.deepGray}>
          <Image
            source={{uri: data.item?.image}}
            alt={data.item?.name}
            w="full"
            h={24}
            resizeMode="contain"
          />
        </Center>
        <VStack w="60%" px="2" space={3}>
          <Text isTruncated color={Colors.black} bold fontSize={14}>
            {data.item?.name}
          </Text>
          <Text bold color={Colors.lightBlack}>
            ${data.item?.price}
          </Text>
        </VStack>
        <Center>
          <Button
            bg={Colors.main}
            _pressed={{
              bg: Colors.main,
            }}
            _text={{
              color: Colors.white,
            }}>
            5
          </Button>
        </Center>
      </HStack>
    </Box>
  </Pressable>
);

// Hidden
const renderHiddenItems = () => (
  <Pressable
    w={50}
    roundedTopRight={10}
    roundedBottomRight={10}
    h="88%"
    ml="auto"
    justifyContent="center"
    bg={Colors.red}>
    <Center alignItems="center">
      <Icon name="trash" size={24} color={Colors.white} solid />;
    </Center>
  </Pressable>
);

const CartItems = () => {
  return (
    <Box mr={6}>
      <Swiper />
    </Box>
  );
};

export default CartItems;
