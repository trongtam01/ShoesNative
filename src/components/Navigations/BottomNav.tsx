import React, {ReactNode} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Box, Center, Text, Pressable} from 'native-base';
import HomeScreen from '../../screens/HomeScreen';
import Colors from '../../assets/data/Colors';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProfileScreen from '../../screens/ProfileScreen';
import CartScreen from '../../screens/CartScreen';
import StackNav from './StackNav';

interface CustomTabProps {
  children?: ReactNode;
  onPress?: any;
}

const Tab = createBottomTabNavigator();
const CustomTab = ({children, onPress}: CustomTabProps) => (
  <Pressable
    onPress={onPress}
    h={70}
    w={70}
    rounded="full"
    bg={Colors.main}
    top={-30}
    shadow={2}>
    {children}
  </Pressable>
);

const BottomNav = () => {
  return (
    <Tab.Navigator
      backBehavior="history"
      initialRouteName="Main"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {...styles.tab},
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="Main"
        component={StackNav}
        options={{
          tabBarIcon: ({focused}) => (
            <Center>
              {focused ? (
                <Icon name="home" size={24} color={Colors.main} />
              ) : (
                <Icon name="home" size={24} color={Colors.black} />
              )}
            </Center>
          ),
        }}
      />
      {/* Cart */}
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarButton: props => <CustomTab {...props} />,
          tabBarIcon: ({focused}) => (
            <Center>
              {focused ? (
                <Icon name="shopping-cart" size={24} color={Colors.white} />
              ) : (
                <Icon name="shopping-cart" size={24} color={Colors.white} />
              )}
            </Center>
          ),
        }}
      />
      {/* Profile */}
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Center>
              {focused ? (
                <Icon name="user" size={24} color={Colors.main} />
              ) : (
                <Icon name="user" size={24} color={Colors.black} />
              )}
            </Center>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tab: {
    elevation: 0,
    backgroundColor: Colors.white,
    height: 60,
    // paddingTop: 5,
  },
});

export default BottomNav;
