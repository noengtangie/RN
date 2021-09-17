import React,{Component} from 'react'
import {
    Text, StyleSheet, TouchableOpacity, View, SafeAreaView, Image, TextInput, ImageBackground, Dimensions
} from 'react-native'
import {NAV_TYPES} from "../Navigation/navTypes";
import NavigationService from "../Service/navigationService";

import IconEntypo from 'react-native-vector-icons/Entypo';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconE from 'react-native-vector-icons/EvilIcons';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import Swiper from "react-native-web-swiper";
import { ScrollView } from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';
import { scrollInterpolator, animatedStyles } from './../Utils/animations';
import LinearGradient from 'react-native-linear-gradient';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

const DATA = [];

  DATA.push(require('./../Assets/Images/Website-Templat.jpg'))
  DATA.push(require('./../Assets/Images/Website-Templat.jpg'))
  DATA.push(require('./../Assets/Images/Website-Templat.jpg'))
  DATA.push(require('./../Assets/Images/Website-Templat.jpg'))


const image = { uri: "https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo.png" };

export default class Home extends Component{
  state = {
    index: 0
  }

  constructor(props) {
    super(props);
    this._renderItem = this._renderItem.bind(this)
  }

  _renderItem({ item }) {
    return (
      <TouchableOpacity style={styles.itemContainer} onPress={() => NavigationService.navigate(NAV_TYPES.HOME_BUY_NOW)}>
        {/* <Text style={styles.itemLabel}>{`Item ${item}`}</Text> */}
        <Image
                style={styles.itemLabel}
                source={item}
              />
      </TouchableOpacity>
    );
  }
    render(){
        return(
            <SafeAreaView style={styles.container}>
            <LinearGradient colors={['#2c71ac', '#114898' ]} style={styles.myBody}>
              <Image
                style={styles.logo}
                source={require('./../Assets/Images/Logo.png')}
              />
            </LinearGradient>
            <View style={styles.slide}>
              <Carousel
                ref={(c) => this.carousel = c}
                data={DATA}
                renderItem={this._renderItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                containerCustomStyle={styles.carouselContainer}
                inactiveSlideShift={0}
                onSnapToItem={(index) => this.setState({ index })}
                scrollInterpolator={scrollInterpolator}
                slideInterpolatedStyle={animatedStyles}
                useScrollView={true}          
              />
            </View>
            
              
              <LinearGradient colors={['#2c71ac', '#114898' ]} style={styles.button}>
                <TouchableOpacity   style={{width:'100%',height:'100%',justifyContent:'center'}}  onPress={() => NavigationService.navigate(NAV_TYPES.HOME_BUY)} >
                  <Text style={styles.buttonText} >
                    ORDER NOW
                  </Text>
              
                </TouchableOpacity>
              </LinearGradient>
        
           </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center'
    },
    myBody:{
      width:'100%',
      height:140,
      backgroundColor:'#195ca3',
      alignItems:'center'
    },
    logo:{
      width:'45%',
      height:42,
      marginTop:25
    },
    slide:{
      width:'100%',
      height:450,
      position:'absolute',
      top:90,
    },
    // backgroundStyle:{
    //     height: 400,
    //     width: '60%',
    //     textAlign: 'center',
    //     backgroundColor: 'black',
    //     borderRadius: 25,
    //     justifyContent:'flex-end',
    //     alignItems:'center'

    //   },
      button: {
        height: 50,
        width: '50%',
        backgroundColor:'#195ca3',
        borderColor:'#f5bf51',
        borderWidth:1,
        justifyContent:'center',
        borderRadius:30,
        bottom:0,
        marginBottom:20,
        marginTop:450
      },
      buttonText: {
        textAlign:'center',
        color:'#fff',
        fontSize: 22,
        fontWeight:'bold'
      },
      itemContainer: {
        width: ITEM_WIDTH,
        height: 500,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal:20,
      },
      itemLabel: {
        width:'100%',
        height:'90%',
        borderRadius:20,
        marginBottom:'20%'
      },
});
















