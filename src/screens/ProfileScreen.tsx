import {Box, Center, Heading, Image, Text} from 'native-base';
import React from 'react';
import Colors from '../assets/data/Colors';
import Tabs from '../components/Profile/Tabs';

const ProfileScreen = () => {
  return (
    <>
      <Center bg={Colors.main} pt={10} pb={6}>
        <Image
          source={{
            uri: 'https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg',
          }}
          alt="profile"
          w={24}
          h={24}
          resizeMode="cover"
          rounded="full"
        />
        <Heading bold fontSize={15} isTruncated my={2} color={Colors.white} >
            Admin Doe
        </Heading>
        <Text italic fontSize={10} color={Colors.white}>
          Joined Dec 12 2022
        </Text>
      </Center>
      {/* TABS */}
      <Tabs />
    </>
  );
};

export default ProfileScreen;
