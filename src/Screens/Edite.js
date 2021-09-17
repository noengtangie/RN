import React,{Component} from 'react'
import {
    Text, StyleSheet,ScrollView,ImageBackground, TouchableOpacity, View, SafeAreaView, Image, TextInput
} from 'react-native'
import {NAV_TYPES} from "../Navigation/navTypes";
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import IconF from 'react-native-vector-icons/FontAwesome';
import NavigationService from "../Service/navigationService";
const image = { uri: "https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo.png" };
export default class Home extends Component{
    
    constructor(prop){
        super(prop)
        this.state = {
           
        }
    }
    render(){
        
        return(
            
            <SafeAreaView style={{flex: 1,}}>
                <View style={{alignItems: "center",width: "100%",}}>
                 <Text  >Edite</Text>
                </View>
                <View style={styles.Box}>
                    <View style={styles.EditeBox}>
                        <IconM style={{fontSize:90,marginBottom:160}} name="image-plus"/>
                        <TouchableOpacity style={styles.btn} onPress={() => NavigationService.navigate(NAV_TYPES.EDITTEMPLETE)}>
                       
                            <Text style={{color: "white",fontSize:25}}>Edite Now</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    Box:{
        width:'100%',

        height:600,
        position:'relative',
        padding:20,
        alignItems:'center',
        marginTop: 30,

    },
    EditeBox:{
        width:'90%',
        height:'95%',
        borderRadius:20,
        backgroundColor:'#4d73be',
        position:'absolute',
       alignItems:'center',
       justifyContent:'flex-end'


    },
    btn:{
       
        backgroundColor:'#f9d978',
        paddingVertical:10,
        paddingHorizontal:70,
        borderRadius:15,
        marginBottom:20
    },
   
  
});