import React,{Component} from 'react'
import {
    Text, StyleSheet, TouchableOpacity, View, SafeAreaView, Image, TextInput
} from 'react-native'
import {NAV_TYPES} from "./../Navigation/navTypes";
import NavigationService from "./../Service/navigationService";
import LinearGradient from 'react-native-linear-gradient';
export default class Home extends Component{
    constructor(prop){
        super(prop)
        this.state = {
           
        }
    }
    componentDidMount(){
      console.log('this.props***', this.props);
      var dataArray = ["Smey", "30", "Male"]
      var dataObje = {
        name: "Smey",
        age: "30",
        gender: "Male"
      }
      console.log(dataArray[1]);
      console.log(dataObje.age);
    }
    render(){
        return(
            <SafeAreaView style={styles.body,{flex: 1,}}>
                
                    <TouchableOpacity style={[styles.container]}
                    onPress={() => NavigationService.navigate(NAV_TYPES.REGISTER)}
                >
                    <LinearGradient colors={['#2c71ac', '#114898' ]} style={styles.header}>
                        <Image
                            style={styles.logo}
                            source={require('./../Assets/Images/Logo-2.png')}
                        />
                    </LinearGradient>
                </TouchableOpacity>
                
                
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
  body:{
      backgroundColor:'#587fd0',
  },
  container: {
    flex: 1,
    backgroundColor:'#195ca3',
  },
  logo:{
      width:'35%',
      height:'25%'
  },
  header:{
      
    justifyContent:'center',
    alignItems:'center',
      width:'100%',
      height:'100%'
  }
});