import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';

export default class Setting extends Component {

  render() {
    return (
        <ScrollView
        contentInsetAdjustmentBehavior="automatic">
           
      <View style={styles.container}>
    {/*   <LinearGradient
          colors={['red', 'yellow', 'green' ]}
          style={styles.linearGradient}
        >
          <Text style={{color:'red'}}>Vertical Gradient</Text>
        </LinearGradient> */}
          <View style={styles.header}>
              <Text style={styles.cover}>Cover Picture</Text>
          </View>
          <Image style={styles.avatar} source={require('./../Assets/Images/computer-tech.png')}/>

        <View style={styles.containers, {flexDirection: "row", paddingTop: 50}}>
            <View style={{ flex: 0.3,  }}><Image style={styles.icon} source={require('./../Assets/Images/flower.png')}/></View>
            <View style={{ flex: 1 }} ><Text style={styles.simpleText}>Discount</Text></View>
            <View style={{ flex: 0.5,  }} ><Text style={styles.simpleText}>A</Text></View>
        </View>
        <View style={styles.containers, {flexDirection: "row", paddingTop: 15}}>
            <View style={{ flex: 0.3,  }}><Image style={styles.icon} source={require('./../Assets/Images/flower.png')}/></View>
            <View style={{ flex: 1 }} ><Text style={styles.simpleText}>Voucher</Text></View>
            <View style={{ flex: 0.5 }} ><Text style={styles.simpleText}>A</Text></View>
        </View>
        <View style={styles.containers, {flexDirection: "row", paddingTop: 15}}>
            <View style={{ flex: 0.3,  }}><Image style={styles.icon} source={require('./../Assets/Images/flower.png')}/></View>
            <View style={{ flex: 1 }} ><Text style={styles.simpleText}>Delivery</Text></View>
            <View style={{ flex: 0.5 }} ><Text style={styles.simpleText}>A</Text></View>
        </View>
        <View style={styles.containers, {flexDirection: "row", paddingTop: 15}}>
            <View style={{ flex: 0.3,  }}><Image style={styles.icon} source={require('./../Assets/Images/flower.png')}/></View>
            <View style={{ flex: 1 }} ><Text style={styles.simpleText}>Payment</Text></View>
            <View style={{ flex: 0.5 }} ><Text style={styles.simpleText}>A</Text></View>
        </View>
        <View style={styles.containers, {flexDirection: "row", paddingTop: 15}}>
            <View style={{ flex: 0.3,  }}><Image style={styles.icon} source={require('./../Assets/Images/flower.png')}/></View>
            <View style={{ flex: 1 }} ><Text style={styles.simpleText}>Shop Info</Text></View>
            <View style={{ flex: 0.5 }} ><Text style={styles.simpleText}>A</Text></View>
        </View>
        <View style={styles.containers, {flexDirection: "row", paddingTop: 15}}>
            <View style={{ flex: 0.3,  }}><Image style={styles.icon} source={require('./../Assets/Images/flower.png')}/></View>
            <View style={{ flex: 1 }} ><Text style={styles.simpleText}>Template</Text></View>
            <View style={{ flex: 0.5 }} ><Text style={styles.simpleText}>A</Text></View>
        </View>
        <View style={styles.containers, {flexDirection: "row", paddingTop: 15}}>
            <View style={{ flex: 0.3,  }}><Image style={styles.icon} source={require('./../Assets/Images/flower.png')}/></View>
            <View style={{ flex: 1}} ><Text style={styles.simpleText}>Logout</Text></View>
            <View style={{ flex: 0.5 }} ><Text style={styles.simpleText}>A</Text></View>
        </View>
        
   



      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

  linearGradient: {
    height: 200,
    width: 350,
  },
    container: {
        flex: 0.5,
    },
  
  simpleText: {
    fontSize: 20
  },
  header:{
    backgroundColor: "#4d73be",
    height:200,
    borderColor: 'gray',
    borderWidth: 1,
   
  },
  username:{
    color: "#20B2AA",
    fontSize:22,
    alignSelf:'center',
    marginLeft:10
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "#4d73ee",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:150
  },
  icon: {
    width: 25,
    height: 25,
    marginLeft: 20
  },
  cover: {
    textAlign: 'center',
    fontSize: 25,
    alignItems: 'center',
    paddingTop: 70,
    color: "white"
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    marginTop:10,
    textAlign: 'center'
  },

});

                 