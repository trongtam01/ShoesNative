import {Box, Text} from 'native-base';
import React, {useState} from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {TabBar, SceneMap, TabView} from 'react-native-tab-view';
import Colors from '../../assets/data/Colors';
import Orders from './Orders';
import Profile from './Profile';

const renderScene = SceneMap({
  first: Profile,
  second: Orders,
});

const Tabs = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);

  const [routes] = React.useState([
    {key: 'first', title: 'Profile'},
    {key: 'second', title: 'Order'},
  ]);

  const renderTabsBar = (props: any) => (
    <TabBar
      {...props}
      tabStyle={styles.tabStyle}
      indicatorStyle={{backgroundColor: Colors.black}}
      activeColor={Colors.main}
      inactiveColor={Colors.white}
      renderLabel={({route, color}) => (
        <Text style={{color, ...styles.text}}>{route.title}</Text>
      )}
    />
  );

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      renderTabBar={renderTabsBar}
    />
  );
};

const styles = StyleSheet.create({
  tabStyle: {
    backgroundColor: 'black',
  },
  text: {
    fontSize: 13,
    fontWeight: 'bold',
  },
});

export default Tabs;
