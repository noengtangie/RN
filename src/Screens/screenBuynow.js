import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  Dimensions,
} from 'react-native';
import {NAV_TYPES} from '../Navigation/navTypes';
import NavigationService from '../Service/navigationService';
import {WebView} from 'react-native-webview';
import LinearGradient from 'react-native-linear-gradient';

const win = Dimensions.get('window');
export default class Home extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <LinearGradient colors={['#2c71ac', '#114898' ]} style={styles.header}>
          <TouchableOpacity
            style={styles.btnicon}
            onPress={() => NavigationService.navigate(NAV_TYPES.HOME)}>
            <Image
              style={styles.icon}
              source={require('./../Assets/Icon/elements/a1.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => NavigationService.navigate(NAV_TYPES.HOME_BUY)}>
            <Text style={styles.buttonText}>ORDER TEMPLATE NOW</Text>
          </TouchableOpacity>
        </LinearGradient>
        <ScrollView style={styles.scrollView}>
          {/* <WebView style={{width:win.width,height:win.height, marginBottom:-80}} source={{ uri: 'https://linkshare.amatak.net' }} /> */}
          <Image
            style={{
              width: '100%',
              resizeMode: 'contain',
              marginVertical: -1800,
            }}
            source={require('./../Assets/Images/ViewTheWholdTemplate.jpg')}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    height: 50,
    width: '70%',
    backgroundColor: '#bf1e2e',
    justifyContent: 'center',
    marginLeft: '10%',
    borderRadius: 25,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  header: {
    width: '100%',
    height: 80,
    backgroundColor: '#195ca3',
    flexDirection: 'row',
    paddingTop: 15,
  },
  icon: {
    width: 35,
    height: 36,
    marginLeft: 15,
    marginTop: 7,
  },
  // btnicon:{
  //   width:50,
  //   height:50
  // }
});
