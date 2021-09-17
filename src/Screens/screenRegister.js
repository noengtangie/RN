import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
  TextInput,
} from 'react-native';

import {color} from 'react-native-reanimated';
import {NAV_TYPES} from './../Navigation/navTypes';
import NavigationService from './../Service/navigationService';
import LinearGradient from 'react-native-linear-gradient';
export default class Home extends Component {
  constructor(prop) {
    super(prop);
    this.state = {};
  }
  componentDidMount() {
    console.log('this.props***', this.props);
    var dataArray = ['Smey', '30', 'Male'];
    var dataObje = {
      name: 'Smey',
      age: '30',
      gender: 'Male',
    };
    console.log(dataArray[1]);
    console.log(dataObje.age);
  }
  render() {
    return (
      <SafeAreaView style={(styles.body, {flex: 1})}>
        <LinearGradient colors={['#2c71ac', '#114898' ]}
          style={[
            styles.container,
            {
              // Try setting `flexDirection` to `"row"`.
              flexDirection: 'column',
            },
          ]}>
          <View style={styles.blockTop}>
            <Image
              style={styles.logo}
              source={require('./../Assets/Images/Logo-2.png')}
            />
            <View style={styles.box}>
              <Image
                style={styles.icon}
                source={require('./../Assets/Icon/elements/a5.png')}
              />
              <TextInput
                style={styles.input}
                placeholder="Shop Name"
                placeholderTextColor='#eeeeee'
              />
            </View>
            <View style={styles.box}>
              <Image
                style={styles.icon}
                source={require('./../Assets/Icon/elements/a4.png')}
              />
              <TextInput
                style={styles.input}
                placeholder="Phone number"
                keyboardType="numeric"
                placeholderTextColor='#eeeeee'
              />
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                NavigationService.navigate(NAV_TYPES.CONFIRMREGISTER)
              }>
              <Text style={styles.buttonText}>REGISTER</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.TextLogin}
              onPress={() => NavigationService.navigate(NAV_TYPES.INTRO)}>
              <Text style={styles.Text}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  body: {
    backgroundColor: 'red',
  },
  container: {
    flex: 1,
    // backgroundColor: '#195ca3',
  },
  blockTop: {
    flex: 1,
    // backgroundColor: "red"
    alignItems: 'center',
  },
  logo: {
    width: '30%',
    height: 120,
    marginTop: 60,
    marginBottom: '5%',
    // resizeMode: 'contain'
  },
  input: {
    height: 40,
    width: '90%',
    paddingHorizontal: 10,
    marginTop: 3,
    color: '#fff',
    fontSize: 18,
  },
  box: {
    height: 45,
    // backgroundColor:'red',
    width: '70%',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    flexDirection: 'row',
    marginTop: 10,
  },
  icon: {
    width: 21,
    height: 24,
    marginTop: 10,
    marginLeft: 10,
  },
  button: {
    height: 40,
    backgroundColor: '#fff',
    width: '70%',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: '#315fff',
    fontSize: 18,
  },
  Text: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    textDecorationLine: 'underline',
    marginLeft: '70%',
    marginTop: 30,
  },
});
