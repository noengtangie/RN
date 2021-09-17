import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Provider } from 'react-redux'
import store from './src/Store/index'
import Navigation from './src/Navigation/index'
import NavigationService from './src/Service/navigationService'

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
               <View style={{flex:1}}>
                 <Navigation
                  ref={navigatorRef =>
                   NavigationService.setTopLevelNavigator(navigatorRef)
                 }
                 />
               </View>
             </Provider>
  );
};

export default App;
