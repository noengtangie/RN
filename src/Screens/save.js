import React,{Component} from 'react'
import {
    Text, StyleSheet, TouchableOpacity, View, SafeAreaView, Image, TextInput,ScrollView, Dimensions
} from 'react-native'
import {NAV_TYPES} from "../Navigation/navTypes";
import NavigationService from "../Service/navigationService";
import { WebView } from 'react-native-webview';
const win = Dimensions.get('window');
export default class Home extends Component{
   
    render(){
        return(
            <SafeAreaView style={{flex:1}} >
            {/* <ScrollView style={styles.scrollView}> */}
            {/* <Image style={{width:'100%', resizeMode: 'contain', marginVertical: -1800}} source={require('./../Assets/Images/ViewTheWholdTemplate.jpg')} /> */}
              <WebView style={{width:win.width,height:win.height, marginBottom:-80}} source={{ uri: 'https://linkshare.amatak.net' }} />
           
            {/* </ScrollView> */}
            <View>
                <TouchableOpacity style={styles.copy}>
                 <Text style={{fontSize:25,color:'white',}}>Copy Link</Text>
                </TouchableOpacity>   
            </View>
            
          </SafeAreaView> 
        )
    }
}
const styles = StyleSheet.create({
    scrollView: {
        // height: '100%'
        },
      
        
      button: {
          height: 50,
          width: '100%',
          backgroundColor:'#0000fe',
          justifyContent:'center',
        
       
          
        },
        buttonText: {
          textAlign:'center',
          color:'#fff',
          fontSize: 22
        },
        copy:{
            position:'absolute',
            backgroundColor:'#f9d978',
            bottom:0,
            width:'100%',
            height:50,
            alignItems: 'center',
            justifyContent: 'center',
        },
});