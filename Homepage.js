import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, ScrollView, FlatList, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const { width, height } = Dimensions.get("screen");
  const navigation=useNavigation();
  const Data = [
    {
      "key": 1,
      "shopname": "Praga Stores",
      "Paid": "₹1000",
      "Outstanding": "₹500"
    },
    {
      "key": 2,

      "shopname": "Deva Stores",
      "Paid": "₹1000",
      "Outstanding": "₹500"
    },
    {
      "key": 3,
      "shopname": "Vairam Sweets",
      "Paid": "₹1000",
      "Outstanding": "₹500"
    },
    {
      "key": 3,
      "shopname": "Praveen Stores",
      "Paid": "₹1000",
      "Outstanding": "₹500"
    },
    {
      "key": 3,
      "shopname": "Anjali Sweets",
      "Paid": "₹1000",
      "Outstanding": "₹500"
    },
    {
      "key": 3,
      "shopname": "Mathi Sweets",
      "Paid": "₹1000",
      "Outstanding": "₹500"
    },
    {
      "key": 3,
      "shopname": "Regil Sweets",
      "Paid": "₹1000",
      "Outstanding": "₹500"
    },
    {
      "key": 3,
      "shopname": "Chandru Sweets",
      "Paid": "₹1000",
      "Outstanding": "₹500"
    },
    {
      "key": 3,
      "shopname": "Malar Sweets",
      "Paid": "₹1000",
      "Outstanding": "₹500"
    },
    {
      "key": 3,
      "shopname": "Govind Sweets",
      "Paid": "₹1000",
      "Outstanding": "₹500"
    },
    {
      "key": 3,
      "shopname": "Jeeva Sweets",
      "Paid": "₹1000",
      "Outstanding": "₹500"
    },
    {
      "key": 3,
      "shopname": "Magesh Sweets",
      "Paid": "₹1000",
      "Outstanding": "₹500"
    },
    {
      "key": 3,
      "shopname": "Gopi Sweets",
      "Paid": "₹1000",
      "Outstanding": "₹500"
    },];


  return (
    <View style={styles.container}>
      <ImageBackground source={require("../Screens/assets/bg2.png")} resizeMode="cover" style={{
        flex: 1,
        // justifyContent: "center"
      }}>
        <ScrollView
        showsVerticalScrollIndicator={false}>
          <View style={{
            bottom:40
          }}>
            <View style={{
               marginLeft: 9,
               marginTop: 90,
               height: height / 7,
               width: width / 1.05,
            }}>
              
        <View style={{
          flexDirection: "row",

        }}>
          <View style={{
            marginLeft: 12,
            marginTop: 20,
            padding:15,
            width: width / 3.3,
            borderRadius: 15,
            borderColor:"silver",
            borderWidth:0.5,
            backgroundColor:"white"

            // backgroundColor: "#fff"

          }}>
            <Text style={{
              fontSize: 16,
              textAlign:"left",
              fontWeight:"300",
              letterSpacing:0.5,
              // color:"#fff"
            }}>Total</Text>

            <Text style={{
               fontSize: 18,
               textAlign: "left",
               fontWeight:"bold",
               color: "#ff4122"
            }}>₹2000</Text>
          </View>
          <View style={{
            marginLeft: 30,
            marginTop: 20,
            padding:15,
            width: width / 2,
            borderRadius: 15,
            borderColor:"silver",
            borderWidth:0.5,
            backgroundColor:"white"

          }}>
            <Text style={{
              marginTop: 5,
              // marginLeft:40,
              fontSize: 16,
              textAlign: "left",
              letterSpacing:0.5,
              fontWeight:"300"
            }}>Total Transaction</Text>
            <Text style={{
              fontSize: 18,
              textAlign: "left",
              fontWeight:"bold",
              color: "#ff4122"
            }}>12</Text>
          </View>

        </View>
        </View>
        <View style={{
          marginTop: 20,
        }}>
          <Text style={{
            marginLeft: 30,
            padding:1,
            fontSize: 25,
            fontWeight: "400"
          }}>Shops</Text>
          </View>
          <View>

            {Data.map((item, index) =>{
return (
  <TouchableOpacity onPress={()=>{navigation.navigate("TransactionHistory",{shopname:item.shopname,Paid:item.Paid,Outstanding:item.Outstanding})}}>
              <View style={{
                marginLeft:9,
                marginTop: 10,
                padding:15,
                width: width / 1.05,
                borderRadius: 10,
                borderColor:"silver",
                borderWidth:0.5,
                backgroundColor: "#f5f5f5",
                justifyContent: "center"
              }}
              key={index}>
                <Text style={{
                  
                  color: "black",
                  fontWeight:"300",
                  fontSize:18 ,
                  marginLeft:5
                }}><FontAwesome5 name="store" size={18} color="#ff4122" /> {item.shopname}</Text>
                <View style={{
                  flexDirection: "row"
                }}><View style={{
                  flexDirection: "row"
                }}>
                    <Text style={{
                      marginLeft: 5,
                      marginTop:10,
                      color: "black",
                      fontWeight: "300",
                      fontSize: 14
                    }}>Paid: </Text>
                    <Text style={{
                      marginTop:10,
                      color: "black",
                      fontWeight: "300",
                      fontSize: 14,
                      color: "green"
                    }}>{item.Paid}</Text>
                  </View>
                  <Text style={{
                      marginLeft: 70,
                      marginTop:10,
                      color: "black",
                      fontWeight: "300",
                      fontSize: 14
                    }}>Outstanding: </Text>
                    <Text style={{
                      marginTop:10,
                      color: "black",
                      fontWeight: "300",
                      fontSize: 14,
                      color: "red"
                    }}>{item.Outstanding}</Text>
                </View>

              </View>
              </TouchableOpacity>
            )})
            }
            </View>
            </View>
        </ScrollView>
        </ImageBackground>
        </View>
        );
}

        const styles = StyleSheet.create({
          container: {
          flex: 1,

    // alignItems: 'center',
    // justifyContent: 'center',
    //#ff4122
  },
});
