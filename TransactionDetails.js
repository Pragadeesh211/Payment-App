import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { FontAwesome5,MaterialIcons } from '@expo/vector-icons';


export default function TransactionDetails() {
    const {params:{shopname,Paid,Outstanding,transid}}=useRoute();
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../Screens/assets/bg2.png")} resizeMode="cover" style={{
        flex: 1
      }}>
        <View
        style={{
            marginTop:80,
            alignItems:"center",
        }}>
            <FontAwesome5 name="store" size={30} color="white" />
            <Text style={{
                fontSize:20,
                color:"white",
                fontWeight:"500"
            }}>{shopname}</Text>
            
        </View>
        <Text style={{
            marginTop:30,
            marginLeft:20,
            color:"white",
            fontWeight:"500",
            fontSize:15,
            
        }}>Transaction Details</Text>
        <View style={{
            marginTop:30,
            borderBottomWidth:0.5,
            borderTopWidth:0.5
        }}>
            <Text style={{
                
            }}></Text>
            <Text style={{
                marginBottom:15,
                fontSize:15,
                marginLeft:10,
                fontWeight:"300",
                
            }}>Banking Name   : Mr.Praga 
             <MaterialIcons name="verified" size={15} color="green" style={{
                marginTop:10
            }} />
            </Text>
        </View>
        <View style={{
            borderBottomWidth:0.5,
        }}>
            <Text style={{
                
            }}></Text>
            <Text style={{
                marginBottom:15,
                fontSize:15,
                marginLeft:10,
                fontWeight:"300"
            }}>Transaction ID   : PRNG000ACRAF23DB3C4</Text>
        </View>
        <View style={{
            borderBottomWidth:0.5,
        }}>
            <Text style={{
                
            }}></Text>
            <Text style={{
                marginBottom:15,
                fontSize:15,
                marginLeft:10,
                fontWeight:"300"
            }}>Date                     : 22 Dec 2022</Text>
        </View>
        <View style={{
            borderBottomWidth:0.5,
        }}>
            <Text style={{
                
            }}></Text>
            <Text style={{
                marginBottom:15,
                fontSize:15,
                marginLeft:10,
                fontWeight:"300"
            }}>Paid                     : {Paid}</Text>
        </View>
        <View style={{
            borderBottomWidth:0.5,
        }}>
            <Text style={{
                
            }}></Text>
            <Text style={{
                marginBottom:15,
                fontSize:15,
                marginLeft:10,
                fontWeight:"300"
            }}>Outstanding       : {Outstanding}</Text>
        </View>
        <View style={{
            borderBottomWidth:0.5,
        }}>
            <Text style={{
                
            }}></Text>
            <Text style={{
                marginBottom:15,
                fontSize:15,
                marginLeft:10,
                fontWeight:"300"
            }}>Time                    : 10:30 AM</Text>
        </View>

        
      </ImageBackground>
      {/* <Text>Scan Qrcode</Text>  */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
