import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {NAV_TYPES} from './navTypes';
import screenLogin from './../Container/LoginContainer';
import screenHome from '../Screens/screenHome';
import screenHomeDetail from '../Screens/screenHomeDetail';
import screenEditTemplete from '../Screens/editTemplete';
import screenRegister from '../Screens/screenRegister';
import screenConfirmRegister from '../Screens/screenConfirmRegister';
import screenVerifyLogin from '../Screens/screenVerifyLogin';
import screenSave from '../Screens/save';
import screenCard from '../Screens/Setting';
import screenBuynow from '../Screens/screenBuynow';
import screenLogo from '../Screens/screenStartUp';
import OrderContainer from '../Container/OrderContainer';
import ViewOrderContainer from '../Container/ViewOrderContainer';
import screenStore from '../Screens/Edite';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import NavigationService from './../Service/navigationService';

const IntroNavigator = createStackNavigator(
  {
    [NAV_TYPES.LOGIN]: {
      screen: screenLogin,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: NAV_TYPES.LOGIN,
  },
);

const OrderNavigator = createStackNavigator(
  {
    [NAV_TYPES.ORDER]: {
      screen: OrderContainer,
      navigationOptions: {
        headerShown: false,
      },
    },
    [NAV_TYPES.VIEW_ORDER]: {
      screen: ViewOrderContainer,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: NAV_TYPES.ORDER,
  },
);

const HomeNavigator = createStackNavigator(
  {
    [NAV_TYPES.HOME]: {
      screen: screenHome,
      navigationOptions: {
        headerShown: false,
      },
    },
    [NAV_TYPES.HOME_BUY]: {
      screen: screenHomeDetail,
      navigationOptions: {
        headerShown: false,
      },
    },
    [NAV_TYPES.HOME_BUY_NOW]: {
      screen: screenBuynow,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: NAV_TYPES.HOME,
  },
);

//Tab Navigation
const TabNavigation = createBottomTabNavigator(
  {
    //////////home///////////////////
    [NAV_TYPES.HOME_TAB]: {
      screen: HomeNavigator,
      navigationOptions: {
        tabBarLabel: ({focused}) => (
          <View style={{
            alignItems: 'center', 
            justifyContent:'center',
            backgroundColor: '#315fff',
            width:'100%',
            height:'100%',
            }}>
            <Image
              style={{
                width: 30,
                height: 38,
              }}
              source={require('./../Assets/Icon/elements/a2.png')}
            />
            {/*<Text style={{textAlign:'center',color:focused?'#4d73be':'black'}}>Home</Text>*/}
          </View>
        ),
      },
    },

    /////////////ដំណឹង///////////////
    [NAV_TYPES.ORDER_TAB]: {
      screen: OrderNavigator,
      navigationOptions: {
        tabBarLabel: ({focused}) => (
          <View style={{
            alignItems: 'center', 
            backgroundColor: '#315fff',
            justifyContent:'center',
            width:'100%',
            height:'100%',
            }}>
            <Image
              style={{
                width: 30,
                height: 38,
              }}
              source={require('./../Assets/Icon/elements/a6.png')}
            />
            {/*<Text style={{textAlign:'center',color:focused?'#4d73be':'black'}}>Home</Text>*/}
          </View>
        ),
      },
    },
    //////////////ហាង////////////////
    [NAV_TYPES.STORE_TAB]: {
      screen: screenStore,
      navigationOptions: {
        tabBarLabel: ({focused}) => (
          <View style={{
            alignItems: 'center', 
            backgroundColor: '#315fff',
            justifyContent:'center',
            width:'100%',
            height:'100%',}}
            >
            <Image
              style={{
                width: 23,
                height: 38,
              }}
              source={require('./../Assets/Icon/elements/a7.png')}
            />
            {/*<Text style={{textAlign:'center',color:focused?'#4d73be':'black'}}>Home</Text>*/}
          </View>
        ),
      },
    },
    ///////////////////កន្ត្រក////////////////////////
    [NAV_TYPES.CARD_TAB]: {
      screen: screenCard,
      navigationOptions: {
        tabBarLabel: ({focused}) => (
          <View
            style={{
              alignItems: 'center',
              justifyContent:'center',
              width:'100%',
              height:'100%',
              backgroundColor: '#315fff'
            }}>
            <Image
              style={{
                width: 35,
                height: 38,
              }}
              source={require('./../Assets/Icon/elements/a8.png')}
            />
            {/*<Text style={{textAlign:'center',color:focused?'#4d73be':'black'}}>Home</Text>*/}
          </View>
        ),
      },
    },
    /* acc */
  },
  {
    tabBarOptions: {
      showIcon: true,
      showLabel: true,
      labelStyle: {
        fontSize: 20, 
      },
      style: {
        height: Platform.OS === 'ios' ? 60 : 63,
        paddingBottom: Platform.OS === 'ios' ? 50 : 0,

      },
      activeColor: '#315fff',
      activeTabStyle: {backgroundColor: '#315fff'},
      
    },
  },
);
const CoreNavigation = createStackNavigator(
  {
    [NAV_TYPES.HOME]: {
      screen: TabNavigation,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: NAV_TYPES.HOME,
  },
);

const logoNavigation = createStackNavigator(
  {
    [NAV_TYPES.LOGO]: {
      screen: screenLogo,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: NAV_TYPES.LOGO,
  },
);

const registerNavigation = createStackNavigator(
  {
    [NAV_TYPES.REGISTER]: {
      screen: screenRegister,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: NAV_TYPES.REGISTER,
  },
);

const editTempleteNavigation = createStackNavigator(
  {
    [NAV_TYPES.EDITTEMPLETE]: {
      screen: screenEditTemplete,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: NAV_TYPES.EDITTEMPLETE,
  },
);

const confirmRegisterNavigation = createStackNavigator(
  {
    [NAV_TYPES.CONFIRMREGISTER]: {
      screen: screenConfirmRegister,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: NAV_TYPES.CONFIRMREGISTER,
  },
);

const verifyLoginNavigation = createStackNavigator(
  {
    [NAV_TYPES.VERIFYLOGIN]: {
      screen: screenVerifyLogin,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: NAV_TYPES.VERIFYLOGIN,
  },
);

const SaveNavigation = createStackNavigator(
  {
    [NAV_TYPES.SAVE]: {
      screen: screenSave,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: NAV_TYPES.SAVE,
  },
);

const MainNavigation = createStackNavigator(
  {
    [NAV_TYPES.CORE]: {
      screen: CoreNavigation,
      navigationOptions: {
        headerShown: false,
      },
    },
    [NAV_TYPES.INTRO]: {
      screen: IntroNavigator,
      navigationOptions: {
        headerShown: false,
      },
    },

    [NAV_TYPES.LOGO]: {
      screen: logoNavigation,
      navigationOptions: {
        headerShown: false,
      },
    },

    [NAV_TYPES.REGISTER]: {
      screen: registerNavigation,
      navigationOptions: {
        headerShown: false,
      },
    },

    [NAV_TYPES.CONFIRMREGISTER]: {
      screen: confirmRegisterNavigation,
      navigationOptions: {
        headerShown: false,
      },
    },

    [NAV_TYPES.VERIFYLOGIN]: {
      screen: verifyLoginNavigation,
      navigationOptions: {
        headerShown: false,
      },
    },

    [NAV_TYPES.EDITTEMPLETE]: {
      screen: editTempleteNavigation,
      navigationOptions: {
        headerShown: false,
      },
    },

    [NAV_TYPES.SAVE]: {
      screen: SaveNavigation,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: NAV_TYPES.LOGO,
  },
);
export default createAppContainer(MainNavigation);
