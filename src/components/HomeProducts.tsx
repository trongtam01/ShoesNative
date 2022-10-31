import {
  Box,
  Flex,
  Heading,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'native-base';
import React from 'react';
import Colors from '../assets/data/Colors';
import products from '../assets/data/ProductsData';
import Rating from './Rating';

const HomeProducts = () => {
  console.log('products', products);

  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={false} >
      <Flex
        flexWrap="wrap"
        direction="row"
        justifyContent="space-between"
        px={6}>
        {products &&
          products.length > 0 &&
          products.map(product => (
            <Pressable 
              key={product._id}
              w="47%"
              bg={Colors.white}
              rounded="md"
              shadow={2}
              my={3}
              pb={2}
              pt={0.3}
              overflow="hidden"
              >
              <Image
                source={{uri: product.image}}
                alt={product.name}
                w="full"
                h={24}
                resizeMode="contain"
              />
              <Box px={4} pt={1}>
                <Heading size="sm" bold>
                  ${product.price}
                </Heading>
                <Text fontSize={10} mt={1} w="full" isTruncated>
                  {product.name}
                </Text>
                <Rating value={product.rating} />
              </Box>
            </Pressable> 
          ))}
      </Flex>
    </ScrollView>
  );
};

export default HomeProducts;
