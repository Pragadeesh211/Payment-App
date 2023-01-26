import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Homepage from "../Screens/Homepage";
import Settings from "../Screens/Settings";
import Qrcode from "../Screens/Qrcode";
import { View,Dimensions,Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';



export default function Tabs(){
    const {width,height}=Dimensions.get("screen");
    const Tab=createBottomTabNavigator();
    return(
        <Tab.Navigator 
        screenOptions={{
            headerShown:false,
            tabBarShowLabel:true,
            tabBarStyle:{backgroundColor:"white"},
            tabBarActiveTintColor:"#ff4122",
            
        }}>
            <Tab.Screen name="Homepage" component={Homepage} options={{
                
                tabBarIcon: ({ focused }) => (
                    <View style={{
                      position: 'absolute',
                      top: 5,
                      

                    }}>
                      <Ionicons
                        name="home"
                        size={25}
                        color={focused ? 'red' : 'black'}
                      ></Ionicons>
                    </View>
                  )
            }}/>
             <Tab.Screen name={"Qrcode"} component={Qrcode} 
             
             options={{
              tabBarStyle:{display:"none"},
              
          tabBarIcon: ({focused}) => (

            
              <View style={{
                width: width/5.5,
                height: height/12,
                backgroundColor:  '#ff4122',
                borderRadius: 30,
                borderWidth:0.5,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: Platform.OS == "android" ? 40 : 20
              }}>
                 <Ionicons
                        name="qr-code"
                        size={35}
                        color="white"
                      ></Ionicons>
                      
                
              </View>
            
          )
        }}></Tab.Screen>
            <Tab.Screen name="Settings" component={Settings}
            options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{
                      position: 'absolute',
                      top: 5
                    }}>
                      <Ionicons
                        name="settings"
                        size={25}
                        color={focused ? 'red' : 'black'}
                      ></Ionicons>
                    </View>
                  )
            }}/>
            
        </Tab.Navigator>
    );
}
