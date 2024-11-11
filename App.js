// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './store';
import BicycleList from './components/BicycleList';
import BicycleDetail from './components/BicycleDetail';
import BicycleHome from './components/BicycleHome';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="BicycleHome">
          <Stack.Screen name="BicycleHome" component={BicycleHome} options={{ headerShown: false }} />
          <Stack.Screen name="BicycleList" component={BicycleList} options={{ headerShown: false }} />
          <Stack.Screen name="BicycleDetail" component={BicycleDetail} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
