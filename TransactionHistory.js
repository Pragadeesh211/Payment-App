import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, ScrollView, TextInput, BackHandler, Dimensions, View, Pressable, Button, Image, ImageBackground } from 'react-native';
// import { historydetails } from './components/History.json';
import { Entypo, FontAwesome5 } from '@expo/vector-icons'; 
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';



export default function TransactionHistory() {
  const navigation=useNavigation();
  const {params:{shopname,Paid,Outstanding}}=useRoute();

  const deviceHeight = Dimensions.get('window').height;
  const deviceWidth = Dimensions.get('window').width;

  console.log("deviceHeight" + deviceHeight + "deviceWidth" + deviceWidth);

  // const Deliver = () => {
  //   settab(true)
  // }
  const [jsondata, setJsonData] = useState([]);
  const historydetails=[
    {
        "id": 1,
        "shopid": "E110001",
        "date": "22 Dec 2022",
        "name": "Indian Bank ",
        "transid": "PRNG000ACRAF23DB3C4",
        "amount" : " ₹ 100000"
    },
    {
        "id": 1,
        "shopid": "E110001",
        "date": "22 Dec 2022",
        "name": "Axis Bank ",
        "transid": "PRNG000ACRAF23DB3C4",
        "amount" : "₹ -1250"
    },
    {
        "id": 1,
        "shopid": "E110001",
        "date": "22 Dec 2022",
        "name": "Axis Bank ",
        "transid": "PRNG000ACRAF23DB3C4",
        "amount" : "₹ 100"
    },
    {
        "id": 1,
        "shopid": "E110001",
        "date": "22 Dec 2022",
        "name": "Axis Bank ",
        "transid": "PRNG000ACRAF23DB3C4",
        "amount" : "₹ -52000"
    },
    {
        "id": 1,
        "shopid": "E110001",
        "date": "22 Dec 2022",
        "name": "ICICI Bank ",
        "transid": "PRNG000ACRAF23DB3C4",
        "amount" : "₹ 52100"
    }, {
        "id": 1,
        "shopid": "E110001",
        "date": "22 Dec 2022",
        "name": "SBI Bank ",
        "transid": "PRNG000ACRAF23DB3C4",
        "amount" : "₹ -1500"
    },
    {
        "id": 1,
        "shopid": "E110001",
        "date": "22 Dec 2022",
        "name": "Indian Bank ",
        "transid": "PRNG000ACRAF23DB3C4",
        "amount" : "₹ 7100"
    }, {
        "id": 1,
        "shopid": "E110001",
        "date": "22 Dec 2022",
        "name": "Indian Bank ",
        "transid": "PRNG000ACRAF23DB3C4",
        "amount" : "₹ -100"
    }, {
        "id": 1,
        "shopid": "E110001",
        "date": "22 Dec 2022",
        "name": "Indian Bank ",
        "transid": "PRNG000ACRAF23DB3C4",
        "amount" : "₹ 100000"
    },
    {
        "id": 1,
        "shopid": "E110001",
        "date": "22 Dec 2022",
        "name": "Axis Bank ",
        "transid": "PRNG000ACRAF23DB3C4",
        "amount" : "₹ -1250"
    },
    {
        "id": 1,
        "shopid": "E110001",
        "date": "22 Dec 2022",
        "name": "Axis Bank ",
        "transid": "PRNG000ACRAF23DB3C4",
        "amount" : "₹ 100"
    },
    {
        "id": 1,
        "shopid": "E110001",
        "date": "22 Dec 2022",
        "name": "Axis Bank ",
        "transid": "PRNG000ACRAF23DB3C4",
        "amount" : "₹ -52000"
    },
    {
        "id": 1,
        "shopid": "E110001",
        "date": "22 Dec 2022",
        "name": "ICICI Bank ",
        "transid": "PRNG000ACRAF23DB3C4",
        "amount" : "₹ 52100"
    }, {
        "id": 1,
        "shopid": "E110001",
        "date": "22 Dec 2022",
        "name": "SBI Bank ",
        "transid": "PRNG000ACRAF23DB3C4",
        "amount" : "₹ -1500"
    },
    {
        "id": 1,
        "shopid": "E110001",
        "date": "22 Dec 2022",
        "name": "Indian Bank ",
        "transid": "PRNG000ACRAF23DB3C4",
        "amount" : "₹ 7100"
    }, {
        "id": 1,
        "shopid": "E110001",
        "date": "22 Dec 2022",
        "name": "Indian Bank ",
        "transid": "PRNG000ACRAF23DB3C4",
        "amount" : "₹ -100"
    }
  ]

  useEffect(() => {

    setJsonData(historydetails)


  }, [])

  return (


    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* <StatusBar  animated={true} 
       style ={{color:"#61dafb"}}
          /> */}

      <View style={{ height: '100%', width: '100%' }}>
        <ImageBackground source={require('./assets/bg2.png')} resizeMode="cover" style={{ flex: 1, justifyContent: "center" }}>

          <View style={{

            height: '15%',
            width: '98%',
            marginTop: -25,
            marginLeft: 5,


          }}>
            <View style={{
              height: '95%',
              width: '98%',
              marginTop: 10,
              marginLeft: 3.5,

            }}>
              <FontAwesome5 name="store" size={18} color="white"  style={{marginTop:40,marginLeft:10}}/>
              <Text
                style={{
                  fontSize: 20, fontWeight: "400", color: "white", marginHorizontal: 40,
                  letterSpacing: .25,marginTop:-25
                }}>{shopname}</Text>

              <Image source={require('./assets/give-money.png')}
                style={{ height: '63%', width: "20%", marginVertical: -35, marginHorizontal: 300, resizeMode: "cover" }} />

              <Text style={{
                fontSize: 20, fontWeight: "400", color: "white",
                marginVertical: 1, marginHorizontal: 18,  letterSpacing: .5,
            //     textShadowColor :"#585858", textShadowOffset:{width: 1, height: 1},
            // textShadowRadius:1,
              }}>₹  5,380</Text>

            </View>
          </View>

          <View style={{

            height: '80%',
            width: '100%',
            marginTop: 1
          }}>

            <View style={{
              backgroundColor: "#ff6347",
              height: 40,
              width: '98%',
              marginLeft: 5,
              borderTopWidth: 1,
              //  borderLeftWidth:.5,
              //  borderRightWidth:.5,
               borderBottomWidth:1

            }}><Text style={{
              fontSize: 17, fontWeight: "500", color: "#f8f8ff",
              marginVertical:5, marginHorizontal: 5, letterSpacing: .5,
              
            }}> Transaction History</Text>

            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
              {
                jsondata.map((details) => {

                  return (
                    <TouchableOpacity onPress={()=>{navigation.navigate("TransactionDetails",{shopname:shopname,Paid:Paid,Outstanding:Outstanding})}}>
                    <View style={{
                       backgroundColor: "#f5f5f5",
                      height: 70,
                      width: '97%',
                      marginTop: 5,
                      marginLeft: 7,
                      borderColor: "silver",
                      borderWidth: 1,
                      borderRadius: 10

                    }}>

                       
                      <View style={{ marginTop: 5, flexDirection: "row",
                     }}>

                        {/* <Text style={{
                        alignItems: "center",
                        fontWeight: "400",
                        fontSize: 15

                      }}> {(details.date)} </Text> */}

                        {/* <Image source={require('./assets/pay.png')}
                          style={{ height: '190%', width: "11%", resizeMode: "center" , marginLeft:10,marginTop:-5}} /> */}

                       <Entypo name="swap" size={25} color="#ff0000"  
                       style={{ marginTop:10,marginLeft:15}} />
                        <Text style={{
                          alignItems: "center",
                          fontWeight: "400",
                          fontSize: 13,
                          marginRight:50,
                          paddingTop:10,
                          letterSpacing:.75,
                          marginLeft:40

                        }}>{(details.transid)}</Text>

                        <Text style={{
                          fontWeight: "400",
                          fontSize: 13,
                          marginTop:10

                        }}>{(details.amount)} </Text>

                      </View>
                      <Text style={{
                          alignItems: "center",
                          fontWeight: "300",
                          fontSize: 12,
                          marginLeft:80,
                          marginTop:-2                      

                        }}>{(details.date)}</Text>

                     
                    </View>
                    </TouchableOpacity>
                  )
                }
                )
              }
            </ScrollView>
          </View>
        </ImageBackground>
      </View>

    </View>

  )
}