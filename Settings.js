import { Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const { height, width } = Dimensions.get('screen');
const App = () => {
  const navigation=useNavigation();

  const image =  require("./assets/bg2.png");
  
  return (
    <View style={styles.headcontainer}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="orangered"
        translucent
      />
      
       <ImageBackground source={image} resizeMode="cover" style={{justifyContent: "center"}}>
     
      <View style={{marginTop:100,height:height/6,alignItems:"center"}}>
      <Ionicons name="ios-settings" size={50} color="white"  />
          <Text style ={styles.TextHead}>Settings</Text>
              
     </View>
      <View style={styles.buttoncontainerhead}>
      <View>
        <TouchableOpacity style={ styles.buttoncontainer}  onPress={()=>{navigation.navigate("Account")}}>
          <View style={{paddingRight:10}}>
        <AntDesign name="arrowright" size={24} color="white" />
        </View> 
          <Text style={styles.Textoptions}>Account Details</Text>
          <MaterialIcons name="account-circle" size={24} color="white" style={{paddingLeft:10}}/>
          
        </TouchableOpacity>
        <TouchableOpacity style={ styles.buttoncontainer}  >
        <View style={{paddingRight:10}}>
        <AntDesign name="arrowright" size={24} color="white"   /> 
        </View>
          <Text style={styles.Textoptions}>Change Password</Text>
          <MaterialCommunityIcons name="form-textbox-password" size={24} color="white" style={{paddingLeft:10}} />
        </TouchableOpacity>
        <TouchableOpacity style={ styles.buttoncontainerlogout}  onPress={()=>{navigation.navigate("Login")}}>
          <Text style={styles.Textlogout}>Logout</Text>
        </TouchableOpacity>
      </View>
      </View>
      </ImageBackground>
    
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  headcontainer: {
  //  bottom:45

//justifyContent:"center"
    

  },
  buttoncontainerhead:{
    marginTop:65,
   // backgroundColor:"black",
    height:height-300,
    width:width/10,
    marginLeft:10,
   // borderWidth:.5,
    borderColor:"grey",
    borderRadius:20
    
   
    
  
  },
  buttoncontainer: {
    width: width-20 ,
    height: height / 15,
    backgroundColor: "orangered",
    justifyContent:"center",
    marginTop: 15,
    alignItems: "center",
    borderRadius: 15,
    flexDirection:"row-reverse",
    justifyContent:"space-between",
    
  },
  buttoncontainerlogout:{
    width: width - 20,
    height: height / 16,
    borderColor:"red",
    borderWidth:.5,
    justifyContent:"center",
    marginTop: height/30,
    alignItems: "center",
    borderRadius: 10,
    

  },
  Textlogout:{
    fontSize: 21, 
    fontWeight: "500", 
    color: "black" 
  },
  Textoptions:{
    fontSize: 21, 
    fontWeight: "500", 
    color: "white",
    marginRight:100
  
   
    
  },
  TextHead:{
    fontSize: 22, 
    fontWeight: "600", 
    color: "white",
    letterSpacing:.5

  }

})
