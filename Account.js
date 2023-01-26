import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity,
     ImageBackground, TextInput, } from 'react-native';
import { Dimensions } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useState } from 'react';
import Toast from 'react-native-root-toast';


const { height, width } = Dimensions.get('screen');


export default function Home1() {
    const [isEditable,setisEditable]=useState(false)
    const[name,setname]=useState("");
    const [pin,setpin]=useState("");
    const[a1,seta1]=useState("");
    const[Add,setAdd]=useState(false)
    const route=useRoute();
    
    
   const  modclick=()=>{
    setisEditable(true)

   }
   const modclick1=()=>{
    
   
      
    if((pin.length==6) &&(name!="")&&(a1!="")){   
       
      setisEditable(false)
      const toast = Toast.show('Updated Successfully', {
        duration: Toast.durations.LONG,
        });
        setTimeout(function hideToast() {
          Toast.hide(toast);
        }, 5000);
      
   
    }


   
    
   }
    return (
    <View style={styles.container}>
        <ImageBackground source={require("../component/assets/bg2.png")}>
       
      <Image source={require('../assets/check1.png')} style={{
          height: height / 8.9,
          width: width / 4,
          margin: 5,
          marginLeft: 130,
          marginTop:50,
           
        }}></Image>

      <Text style={{ textAlign: 'center', }}>637XXXXXXX</Text>

      <View style={{ margin: 20,marginTop:30 }} >
        <Text style={{ marginLeft: 2,  }}>Name  </Text>
       
         <TextInput 
        underlineColorAndroid="transparent"
        editable={isEditable}
        onChangeText={(text)=>setname(text)}
        style={{ borderColor: 'silver', height: 40, width: 330, borderWidth: 0.6,  marginTop: 9, fontSize: 18, borderRadius:10,
        backgroundColor:isEditable?'white':null}}
        />
        
       <Text style={{ marginLeft: 2, }}>Pincode   </Text>
        <TextInput 
         underlineColorAndroid="transparent"
         editable={isEditable}
        
        style={{ borderColor: 'silver', height: 40, width: 330, borderWidth: 0.6,  marginTop: 9, fontSize: 18, borderRadius:10,keyboardType:"numeric",
        backgroundColor:isEditable?'white':null}}
        maxLength={6}
        value={pin}
        keyboardType='numeric'
        onChangeText={(text)=>{
                setpin(text.replace(/[^0-9]/g,''))
               

        }}
      
        /> 
        <Text style={{ marginLeft:2,  }}>Address   </Text>

        <TextInput 
         underlineColorAndroid="transparent"
         editable={isEditable}
         onChangeText={(text)=>seta1(text)}
         style={{ borderColor: 'silver', height: 80, width: 330, borderWidth: 0.5, marginTop: 9, fontSize: 18,borderRadius:10, 
         backgroundColor:isEditable?'white':null}}/> 
      
       
      </View>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity style={{borderColor:'silver',backgroundColor:"#ff4122",height:40,width:60,borderWidth:1,marginLeft:50,borderRadius:10}}
         onPress={modclick}>
            <Text style={{margin:11,color:'white'}}>Edit</Text>
        </TouchableOpacity>
     <TouchableOpacity style={{borderColor:'silver',backgroundColor:"#ff4122",height:40,width:60,borderWidth:1,marginLeft:140,borderRadius:10}}
    onPress={modclick1}>
    <Text style={{margin:11,color:'white'}}>Save</Text>
    </TouchableOpacity>
      </View>
      </ImageBackground>

      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

  },
});
