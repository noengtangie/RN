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
import {NAV_TYPES} from '../Navigation/navTypes';
import NavigationService from '../Service/navigationService';
import LinearGradient from 'react-native-linear-gradient';

// Add

import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class Home extends Component {
  constructor(prop) {
    super(prop);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View
          style={[
            styles.container,
            {
              flexDirection: 'column',
            },
          ]}>
          <TouchableOpacity
            style={styles.btnicon}
            onPress={() => NavigationService.navigate(NAV_TYPES.HOME)}>
            <Image
              style={styles.icon}
              source={require('./../Assets/Icon/elements/a3.png')}
            />
          </TouchableOpacity>
          <Text style={styles.textheader}>Template Order</Text>
          <LinearGradient colors={['#2c71ac', '#114898' ]} style={styles.blockFirst}>
            <View style={styles.left}>
              <Text style={styles.nameinput}>Name:</Text>
              <Text style={styles.nameinput}>Phone number:</Text>
              <Text style={styles.nameinput}>Address:</Text>
            </View>
            <View style={styles.rigth}>
              <TextInput style={styles.input} />
              <TextInput style={styles.input} />
              <TextInput style={styles.inputtxtArea} />
            </View>
          </LinearGradient>

          <View style={styles.blockBottom}>
            <Text style={styles.textPrice}>Price: 25$</Text>
            <LinearGradient colors={['#2c71ac', '#114898' ]} style={styles.button}>
            <TouchableOpacity style={{width:'100%',height:'100%',justifyContent:'center'}} onPress={() => alert('Successful Ordered')}>
              <Text style={styles.buttonText}>Comfirm to Buy</Text>
            </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blockTop: {
    flex: 1,
    // backgroundColor: "red"
    justifyContent: 'center',
    alignItems: 'center',
  },
  blockFirst: {
    backgroundColor: '#195ca3',
    margin: 20,
    borderRadius: 20,
    flexDirection: 'row',
    width: '90%',
    height: 300,
    paddingTop: 20,
  },
  blockBottom: {
    flex: 1,
    marginHorizontal: 20,
    // backgroundColor: "green"
    flexDirection: 'row',
  },
  left: {
    width: '30%',
  },
  rigth: {
    width: '100%',
  },
  nameinput: {
    fontSize: 16,
    height: 50,
    width: '100%',
    marginLeft: '5%',
    borderColor: 'gray',
    marginTop: 15,
    marginLeft: 10,
    color: '#fff',
  },
  input: {
    fontSize: 18,
    height: 40,
    width: '60%',
    marginLeft: '5%',
    borderColor: 'gray',
    backgroundColor: 'white',
    marginTop: 20,
    paddingHorizontal: 25,
  },
  inputtxtArea: {
    fontSize: 20,
    height: 100,
    width: '60%',
    marginLeft: '5%',
    backgroundColor: 'white',
    marginTop: 20,
    // textAlign:'center',
    paddingHorizontal: 25,
  },
  button: {
    height: 50,
    backgroundColor: '#195ca3',
    borderRadius: 30,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  icon: {
    width: 35,
    height: 35,
  },
  btnicon: {
    marginTop: 20,
    marginLeft: 20,
  },
  textheader: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#195ca3',
    marginTop: 30,
  },
  textPrice: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#195ca3',
    marginTop: 25,
    marginRight: 25,
    marginLeft: 10,
  },
});
