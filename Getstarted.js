import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View,Dimensions,FlatList,Image,Animated,useWindowDimensions, Button, Pressable, ScrollView } from 'react-native';

export default function Getstarted() {
  const navigation=useNavigation();
  const {width,height}=Dimensions.get("screen");
  
  

  const scrollX=React.useRef(new Animated.Value(0)).current;

  const Data=[
  {
    "key":1,
    "image":require("./assets/account2.png"),
    "txt":"To manage accounts",
    "Description":"To maintain history of Transaction for your account"
  },
{
  "key":2,
  "image":require("./assets/account.png"),
  "txt":"Save the outstanding history",
  "Description":"To maintain outstanding history of Transaction for your account"
},
{
  "key":3,
  "image":require("./assets/account3.png"),
  "txt":"To save our accounts",
  "Description":"To maintain and save our history of Transaction for your account"
},];

// const Foot=()=>{
//   return(
    
//     <View style={{flexDirection:"row", height:0}}>
//       {Data.map((_,i)=>{
//         <View 
//         key={i}
//         style={{
//           height:2.5,
//           width:10,
//           backgroundColor:"white",
          
//           borderRadius:2
//         }}/>
//       })}

//      </View>

//     // </View>
//   );
// }
const Indicator=({scrollX})=>{
  return (
    <View style={{
      position:"relative",
      
      
      flexDirection:"row"
    }}>
      {Data.map((_, idx) => {
        const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];

        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.8, 1.7, 0.8],
          extrapolate: 'clamp',
        });
        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: ['#ccc', '#fff', '#ccc'],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
          key={idx.toString()}
          style={{
            height:height/100,
            width:width/30,
            borderRadius:5,
            borderWidth:0.5,
            backgroundColor:backgroundColor,
            margin:10,
            transform:[{
              scale
            }]
            
          }}
          />
        );
      })}
    </View>
  );
}

  return (
    <View style={styles.container}>
      <View style={{
        height:"100%",
        // borderRadius:30,

        backgroundColor:"#e32f45",
        // width:deviceWidth-0,

      }}>
        
        
       <ScrollView
       showsHorizontalScrollIndicator={false}
       horizontal
       pagingEnabled
       scrollEventThrottle={32}
       onScroll={Animated.event([{nativeEvent:{ contentOffset: {x: scrollX } }}],{
        useNativeDriver: false})}>
       {Data.map((item, index) =>{
          return(
            <View style={{
              width,
              alignItems:"center",
              justifyContent:"center"
            }} key={index}>
              <Image source={item.image} 
             
              style={{
                height:height/2,
                width:width/1.1,
                resizeMode:"contain",
                borderRadius:40
              }}></Image>
              <Indicator scrollX={scrollX}/>
              <Text style={{
                color:"white",
                fontWeight:"bold",
                fontSize:20
              }}>{item.txt}</Text>
              <Text style={{
                color:"white",
                fontWeight:"400",
                fontSize:12
              }}>{item.Description}</Text>
            </View>
          )})
        }

        </ScrollView>
        <Pressable style={{
        backgroundColor:"white",
        height:height/15.7,
        width:width/1.1,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        borderWidth:1,
        borderColor:"silver",
        marginBottom:10,
        marginLeft:17
      }} 
      onPress={() => { navigation.navigate("Login") }} ><Text style={{
        color:"black",
        fontWeight:"bold",
        fontSize:20,
        // marginBottom:10,
        textShadowColor:"585858",
        textShadowOffset:{width:0,height:0},
        // textShadowRadius:5
        }}>GET STARTED</Text></Pressable>

      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

          
