import React,{Component} from 'react'
import {
    Text, StyleSheet, TouchableOpacity, View, SafeAreaView, Image, TextInput
} from 'react-native'
import { color } from 'react-native-reanimated';
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
                <LinearGradient colors={['#2c71ac', '#114898' ]} style={[styles.container, {
                    // Try setting `flexDirection` to `"row"`.
                    flexDirection: "column"
                }]}>
                    <View style={styles.blockTop} >
                    <Image
                        style={styles.logo}
                        source={require('./../Assets/Images/Logo-2.png')}
                    />
                    <Text 
                    style={{color:'#fff',fontSize:18}}
                    >SMS Verify Code</Text>
                    <View
                    style={{flexDirection:'row'}}
                    >
                      <TextInput
                          style={styles.input}
                          keyboardType="numeric"
                      />
                        <TextInput
                          style={styles.input}
                          keyboardType="numeric"
                      />
                        <TextInput
                          style={styles.input}
                          keyboardType="numeric"
                      />
                        <TextInput
                          style={styles.input}
                          keyboardType="numeric"
                      />
                        <TextInput
                          style={styles.input}
                          keyboardType="numeric"
                      />
                        <TextInput
                          style={styles.input}
                          keyboardType="numeric"
                      />
                    </View>
                    
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => NavigationService.navigate(NAV_TYPES.CORE)}
                    >
                        <Text
                        style={styles.buttonText}
                        >
                        LOGIN
                        </Text>
                    </TouchableOpacity>
                  </View>
                  </LinearGradient>
                </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
  body:{
      backgroundColor:'red',
  },
  container: {
    flex: 1,
    backgroundColor:'#195ca3',
  },
  blockTop: { 
    flex: 1, 
    // backgroundColor: "red" 
    alignItems:'center'
  },
  logo: {
    width: '30%',
    height: 120,
    marginTop:60,
    marginBottom:'5%'
    // resizeMode: 'contain'
  },
  input: {
    height: 40,
    // backgroundColor:'red',
    width: 40,
    borderWidth:1,
    borderColor:'#d9e3f9',
    borderRadius:5,
    paddingHorizontal:13,
    paddingVertical:10,
    marginTop:15,
    backgroundColor:'#fff',
    marginHorizontal:5,
    color:'#000000',
    fontSize:20
  },
  button: {
    height: 40,
    backgroundColor:'#fff',
    width: '70%',
    justifyContent:'center',
    borderRadius:5,
    marginTop:20
  },
  buttonText: {
    textAlign:'center',
    color:'#315fff',
    fontSize:18
  },
});