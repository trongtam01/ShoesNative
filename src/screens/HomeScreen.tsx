import {Box} from 'native-base';
import React from 'react';
import Colors from '../assets/data/Colors';
import HomeProducts from '../components/HomeProducts';
import HomeSearch from '../components/HomeSearch';

const HomeScreen = () => {
  return (
    <Box flex={1} bg={Colors.subGreen}>
      <HomeSearch />
      <HomeProducts />
    </Box>
  );
};

export default HomeScreen;
