import React,{Component} from 'react'
import {
    Text, StyleSheet, TouchableOpacity,ScrollView,ImageBackground, View, SafeAreaView, Image, TextInput, ImagePickerIOS} from 'react-native'
import {NAV_TYPES} from "../Navigation/navTypes";
import NavigationService from "../Service/navigationService";
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-crop-picker';
export default class Home extends Component{
    constructor(prop){
        super(prop)
        this.state = {
            imageOne:'',
            imageTwo:'',
            imageThree:'',
            imageFour:'',
            imageFive:'',
            imageSix:'',
            image8:'',
            image9:'',
            image10:'',
            image11:'',
            image12:'',
            image13:'',
            image14:'',
            image15:'',
            image16:'',
            image17:'',
            image18:'',
            image19:'',
        }
    }
    selectImages(key){
        ImagePicker.openPicker({
            cropping: true,
            includeBase64:true
        }).then(image => {
            console.log(image)
            const _data = "data:image/png;base64,"+image.data
            this.setState({
                [key]: _data
            })
        });
    }

    render(){
        const { imageOne,imageTwo,imageThree,imageFour,imageFive,imageSix,imageSeven,image8,image9,image10,image11,image12,image13,image14,image15,image16, image17, image18, image19 } = this.state;
        return(
          <SafeAreaView style={{flex: 1}}>
                <ScrollView>
            <View style={{alignItems: "center",width: "100%",}}>
             <Text  >Edite Template</Text>
            
            </View>
            <View style={styles.Box}>
                <TouchableOpacity style={styles.proBox} onPress={() => this.selectImages('imageTwo')}>
                {<Image  style={{width:'100%',height:'100%'}} source={imageTwo ? {uri:imageTwo}:require('./../Assets/Images/loo.jpg')} />}
                   
                   
                </TouchableOpacity>
                <TouchableOpacity style={styles.EditeBox}  onPress={() => this.selectImages('imageOne')}>

                {<Image  style={{width:'100%',height:'100%'}} source={imageOne ? {uri:imageOne}:require('./../Assets/Images/blank.jpg')} />}
                    
                  {/*   <IconM style={{fontSize:90}} name="image-plus"/>
                    */}
                </TouchableOpacity>
                <View style={styles.coverTitle}>
                    <Text style={{fontSize:18,color:'white',marginLeft:30}}>Title :</Text>
                    <TextInput
                       
                        style={styles.titl}
                        placeholder=""
                          
                    />
                </View>
               
            </View>
             {/* form */}
             <View style={styles.coverForm}>
             <View style={styles.form}>
                    <View  style={styles.input}>
                    <Text style={{fontSize:18,color:'white',marginLeft:15}}>Size :</Text>
                    <TextInput
                       
                        style={styles.title}
                        placeholder=""
                          
                    />
                    </View>
                    <View  style={styles.input}>
                    <Text style={{fontSize:18,color:'white',marginLeft:15}}>Org price :</Text>
                    <TextInput
                       
                        style={styles.title}
                        placeholder=""
                          
                    />
                    </View>
                    <View  style={styles.input}>
                    <Text style={{fontSize:18,color:'white',marginLeft:15}}>Price :</Text>
                    <TextInput
                       
                        style={styles.title}
                        placeholder=""
                          
                    />
                    </View>
                    <View style={styles.input}>
                    <Text style={{fontSize:18,color:'white',marginLeft:15}}>Stock :</Text>
                    <TextInput
                       
                        style={styles.title}
                        placeholder=""
                          
                    />
                    </View>
                </View>
             </View>
             {/* end form */}
             {/* product dedtail */}

             <View style={{width:'96%',borderBottomWidth:1,borderColor:'gray',marginLeft:8,marginTop:20,marginBottom:20}}>

             </View>
             <View style={{width:'100%',alignItems: 'center'}}>
             <View style={styles.productDetail}>
                 <Text style={{fontSize:20,color:'white'}}>Product Detail</Text>
             </View>
             </View>
             <View style={{alignItems: 'center',flexDirection:'row',width:'100%',height:200,/* backgroundColor:'red', */justifyContent:'space-between',paddingHorizontal:10}}>
                 <View style={styles.detailLeft}>
                 <TextInput placeholder="Detail"
                        style={{borderWidth:1,borderColor:'gray',height:'100%'}}
                    />
                    
                    
                 </View>
                 <View style={styles.detailRight}>
                 <TextInput placeholder="Dtail"
                        style={{borderWidth:1,borderColor:'gray',height:'100%'}}
                    />
                 </View>
                
             </View>
             {/* img */}
             <TouchableOpacity onPress={() => this.selectImages('imageThree')} style={styles.img}>
             {<Image  style={{width:'100%',height:'100%'}} source={imageThree ? {uri:imageThree}:require('./../Assets/Images/blank.jpg')} />}
            </TouchableOpacity>
            <View style={styles.subImg}>
            <TouchableOpacity onPress={() => this.selectImages('imageFour')} style={styles.subImg1}>
            {<Image  style={styles.logo} source={imageFour ? {uri:imageFour}:require('./../Assets/Images/blank.jpg')} />}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.selectImages('imageFive')} style={styles.subImg1}>
            {<Image  style={styles.logo} source={imageFive ? {uri:imageFive}:require('./../Assets/Images/blank.jpg')} />}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.selectImages('imageSix')} style={styles.subImg1}>
            {<Image  style={styles.logo} source={imageSix ? {uri:imageSix}:require('./../Assets/Images/blank.jpg')} />}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.selectImages('imageSeven')} style={styles.subImg1}>
            {<Image  style={styles.logo} source={imageSeven ? {uri:imageSeven}:require('./../Assets/Images/blank.jpg')} />}
      </TouchableOpacity>
            </View>
            {/* img2 */}
            <View style={{width:'96%',borderBottomWidth:1,borderColor:'gray',marginLeft:8,marginTop:20,marginBottom:20}}>
                </View>

                <View style={{width:'100%',alignItems: 'center'}}>
             <View style={styles.productDetail1}>
                 <Text style={{fontSize:20,color:'white'}}>Other</Text>
             </View>
             </View>
{/* pic1 */}
             <View style={styles.coverPic}>
                 <View style={styles.coverPicText}>
                     <TouchableOpacity style={styles.pic} onPress={() => this.selectImages('image8')}>
                     {<Image  style={{width:'100%',height:'100%'}} source={image8 ? {uri:image8}:require('./../Assets/Images/blank.jpg')} />}
                     </TouchableOpacity>
                     <View style={styles.text}>
                     <TextInput placeholder="Text"
                        style={{borderWidth:1,borderColor:'gray',height:'100%'}}
                    />
                     </View>
                 </View>
             </View>
{/* pic2 */}
<View style={styles.coverPic}>
                 <View style={styles.coverPicText}>
                 <TouchableOpacity style={styles.pic} onPress={() => this.selectImages('image9')}>
                     {<Image  style={{width:'100%',height:'100%'}} source={image9 ? {uri:image9}:require('./../Assets/Images/blank.jpg')} />}
                     </TouchableOpacity>
                     <View style={styles.text}>
                     <TextInput placeholder="Text"
                        style={{borderWidth:1,borderColor:'gray',height:'100%'}}
                    />
                     </View>
                 </View>
             </View>
             {/* pic3 */}
             <View style={styles.coverPic}>
                 <View style={styles.coverPicText}>
                 <TouchableOpacity style={styles.pic} onPress={() => this.selectImages('image10')}>
                     {<Image  style={{width:'100%',height:'100%'}} source={image10 ? {uri:image10}:require('./../Assets/Images/blank.jpg')} />}
                     </TouchableOpacity>
                     <View style={styles.text}>
                     <TextInput placeholder="Text"
                        style={{borderWidth:1,borderColor:'gray',height:'100%'}}
                    />
                     </View>
                 </View>
             </View>
{/* content 3 */}
<View style={{width:'96%',borderBottomWidth:1,borderColor:'gray',marginLeft:8,marginTop:20,marginBottom:20}}>
                </View>
{/* contentpic 1 */}
                <TouchableOpacity style={{width:'100%',height:300,padding:10}} onPress={() => this.selectImages('image11')}>
                {<Image  style={{width:'100%',height:'100%'}} source={image11? {uri:image11}:require('./../Assets/Images/blank.jpg')} />}
                </TouchableOpacity>
{/* contentpic 2 */}
<TouchableOpacity style={{width:'100%',height:300,padding:10}} onPress={() => this.selectImages('image12')}>
                {<Image  style={{width:'100%',height:'100%'}} source={image12? {uri:image12}:require('./../Assets/Images/blank.jpg')} />}
                </TouchableOpacity>
{/* content 3 */}
                <View style={{width:'100%',height:200,padding:10,flexDirection:'row',justifyContent:'space-between'}}>
                    <TouchableOpacity style={styles.LeftPic} onPress={() => this.selectImages('image13')}>
                    {<Image  style={{width:'100%',height:'100%'}} source={image13 ? {uri:image13}:require('./../Assets/Images/blank.jpg')} />}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.selectImages('image14')} style={styles.RightPic}>
                    {<Image  style={{width:'100%',height:'100%'}} source={image14 ? {uri:image14}:require('./../Assets/Images/blank.jpg')} />}
                    </TouchableOpacity>
                    

                </View>
                <View style={{width:'100%',height:200,padding:10,flexDirection:'row',justifyContent:'space-between'}}>
                <TouchableOpacity onPress={() => this.selectImages('image15')} style={styles.RightPic}>
                    {<Image  style={{width:'100%',height:'100%'}} source={image15 ? {uri:image15}:require('./../Assets/Images/blank.jpg')} />}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.selectImages('image16')} style={styles.RightPic}>
                    {<Image  style={{width:'100%',height:'100%'}} source={image16 ? {uri:image16}:require('./../Assets/Images/blank.jpg')} />}
                    </TouchableOpacity>
                    

                </View>
                {/*  */}
                <TouchableOpacity onPress={() => this.selectImages('image17')} style={{width:'100%',height:300,padding:10}}>
                {<Image  style={{width:'100%',height:'100%'}} source={image17 ? {uri:image17}:require('./../Assets/Images/blank.jpg')} />}

                </TouchableOpacity>
                {/*  */}

                <TouchableOpacity onPress={() => this.selectImages('image18')} style={{width:'100%',height:300,padding:10}}>
                {<Image  style={{width:'100%',height:'100%'}} source={image18? {uri:image18}:require('./../Assets/Images/blank.jpg')} />}

                </TouchableOpacity>

                <View style={{width:'96%',borderBottomWidth:1,borderColor:'gray',marginLeft:8,marginTop:20,marginBottom:20}}>
                    </View>
                {/* shop name */}
                <TouchableOpacity  style={styles.shopName}>
                    <TextInput placeholder="SHOP NAME"
                    style={{fontSize:25,textAlign:'center',paddingVertical:20}}
                    />
                </TouchableOpacity>
                <View style={styles.formCus}>
                    <View style={styles.formCover}>
                    <View style={styles.formInput}>
                            <IconM name="facebook-messenger" 
                            style={{fontSize:20,marginLeft:20}}
                            />
                            <TextInput
                            style={{width:'85%',backgroundColor:'white',paddingHorizontal:30}}
                            placeholder="Copy link messager" 
                            />
                        </View>
                        <View style={styles.formInput}>
                            <IconM name="map-marker-outline" 
                            style={{fontSize:20,marginLeft:20}}
                            />
                            <TextInput
                            style={{width:'85%',backgroundColor:'white',paddingHorizontal:30}}
                            placeholder="Address" 
                            />
                        </View>
                        <View style={styles.formInput}>
                            <IconM name="phone-hangup-outline" 
                            style={{fontSize:20,marginLeft:20}}
                            />
                            <TextInput
                            style={{width:'85%',backgroundColor:'white',paddingHorizontal:30}}
                            placeholder="Phone Number" 
                            />
                        </View>
                        <View style={styles.formInput}>
                            <IconM name="email-outline" 
                            style={{fontSize:20,marginLeft:20}}
                            />
                            <TextInput
                            style={{width:'85%',backgroundColor:'white',paddingHorizontal:30}}
                            placeholder="Email" 
                            />
                        </View>
                    </View>
                </View>
            <View style={{height:100}}></View>
            </ScrollView>
                <TouchableOpacity style={styles.btn}
                    onPress={() => NavigationService.navigate(NAV_TYPES.SAVE)}
                >
                    <Text style={{color: "white",fontSize:25}}>Save and Preview</Text>
                </TouchableOpacity>
        </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
  formCus:{
      marginTop:20,
      width:'100%',
      alignItems:'center',
  },
  formCover:{
      width:'96%',
  },
  formInput:{
      borderColor:'#4d73be',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      width:'100%',
      height: 40,
      backgroundColor:'#4d73be',
      borderWidth:1,
      marginBottom:5,
  },
  shopName:{
      width:'98%',
      height:72,
      margin:5,
      borderColor:'#4d73be',
      borderWidth:1,
     /*  backgroundColor:'red', */
  },
  LeftPic:{
      
      width: '48%',
      height:'100%'
  },
  RightPic:{
      backgroundColor: 'blue',
      width: '48%',
      height:'100%'
  },
  coverPic:{
      width:'100%',
     
      height: 120,
      justifyContent: 'center',
      alignItems: 'center',
      padding:5
  },
  coverPicText:{
      width:'98%',
      
      height:'98%',
      justifyContent:'space-between',
      flexDirection:'row',

  },
  pic:{
      width:'30%',
      height:'100%',
      
  },
  text:{
      width:'68%',
      height:'100%',
      
     
  },
  logo1: {
      width: '100%',
      height:200,
    },
    logo: {
      width:88,
      height:60,
    },
    subImg:{
        flexDirection:'row',
    },
    subImg1:{
        margin:5,
    },
  img:{
      width:'100%',
      height:250,
   /*    backgroundColor:'red', */
  },

  Box:{
      width:'100%',
      position:'relative',
      paddingHorizontal:5,
      alignItems:'center',
      marginTop: 20,

  },
  coverTitle:{
      marginTop:10,
      backgroundColor:'#4d73be',
      position: 'relative',
      width:'98%',
      height:40,
      padding:2,
      justifyContent: 'center',
      borderRadius:5
  },
  titl:{
      borderWidth:1,
      backgroundColor:'white',
      width:'70%',
      height:'100%',
      position:'absolute',
      borderColor:'white',
    
      right:2

  },
  proBox:{
      width:'98%',
      alignItems:'center',
      height:50,
      borderRadius:10,
      backgroundColor:'#4d73be',
     justifyContent:'center',
     marginBottom:15,


  },
  EditeBox:{
      width:'98%',
      height:300,
      borderRadius:20,
      backgroundColor:'#4d73be',
     alignItems:'center',
     justifyContent:'center',
   


  },
  btn:{
     
      backgroundColor:'#f9d978',
      paddingVertical:10,
      paddingHorizontal:70,
      width:'100%',
      position:'absolute',
      alignItems:'center',
      bottom:0,
  },
  coverForm:{
      width:'100%',
       alignItems:'center',
      justifyContent:'center'
  },
  form:{
      marginTop:10,
      backgroundColor:'#4d73be',
      position: 'relative',
      width:'96%',
      paddingVertical:10,
      paddingHorizontal:15,
      justifyContent: 'center',
      borderRadius:5
  },
  input:{
      height:35,
      justifyContent:'center',
      marginBottom:3,
  },
  title:{
      borderWidth:1,
      backgroundColor:'white',
      width:'71%',
      height:'100%',
      position:'absolute',
      borderColor:'white',
      right:2
  },
  productDetail:{
      backgroundColor:'#4d73be',
      width:'96%',
      borderRadius:5,
      height:40,
      alignItems:'center',
      justifyContent:'center',
      
  },
  productDetail1:{
      backgroundColor:'#4d73be',
      width:'96%',
      borderRadius:5,
      height:40,
      alignItems:'center',
      justifyContent:'center',
      marginBottom:30
      
  },
  detailLeft:{
      width: '47%',
      height:'80%',
      backgroundColor:'#F4F1F5',
      padding:10,
  },
  detailRight:{
      width: '47%',
      height:'80%',
      backgroundColor:'#F4F1F5',
      padding:10,
      
  },
})
 