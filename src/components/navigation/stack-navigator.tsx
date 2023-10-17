import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen} from '../../screens/private/home-screen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Home'}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
