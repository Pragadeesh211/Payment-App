import { StatusBar } from 'expo-status-bar';
import { Button, Dimensions, Image, ImageBackground, Keyboard, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { FA5Style } from '@expo/vector-icons/build/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

export default function Login() {

    const navigation=useNavigation();
  const[info,setInfo] = useState(false);
  const[info1,setInfo1] =useState(false);
  const[info2,setInfo2] = useState(false);
  const[info3,setInfo3] =useState(false);

  const[phoneNUmber,setPhoneNumber] = useState("");
 const image =  require("./assets/bg2.png");

 const dummyPhoneNumber ="1234567890"

  const verify =()=>{

    setInfo(false)
    setInfo1(false)
    setInfo2(false)
    setInfo3(false)

    if(phoneNUmber == ""){
      setInfo(true);

    } else if(phoneNUmber != dummyPhoneNumber)
    {

      setInfo1(true);
    }
    if(pin1 === "" && pin2 === "" && pin3 ==="" && pin4===""){
      setInfo2(true);

    } else if(pin1 !== "1" || pin2 !== "2" || pin3 !=="3" || pin4 !=="4")
    {

      setInfo3(true);
    }
    
  };

  const { height, width } = Dimensions.get('screen');
 

    const refinput1 = useRef(null);
    const refinput2 = useRef(null);
    const refinput3 = useRef(null);
    const refinput4 = useRef(null);
    
    const [pin1, setPin1] = useState("");
    const [pin2, setpin2] = useState("");
    const [pin3, setpin3] = useState("");
    const [pin4, setpin4] = useState("");
   
   

  return (
    <View style={{height:height}}> 

    <Pressable onPress={Keyboard.dismiss} style={{
      flex: 1,
      backgroundColor: '#fff8dc',
      alignItems: 'center',
      justifyContent: 'center'
    }}>

      <ImageBackground source={image} resizeMode="cover" style={{flex :1,justifyContent: "center"}}>
      {/* <StatusBar style="auto" /> */}
      <View style={{
        
        height: height,
        width: width,
        marginTop: 10,
        alignItems: "center"
      }}>
        {/* <View>
        <Image source={require('./assets/login2.png')}
               style={{height:height/2,width :width, resizeMode: "center",marginTop:-70}} />
               <MaterialCommunityIcons name="qrcode-edit" size={100} color="white"
                style={{ resizeMode: "center",paddingTop:150}} />
        </View> */}
        <View style={{
          marginTop:180, flexDirection: "column",
          height: height/3, width:width-60, alignItems: "center",
          borderColor:"silver"
        }}>
          

          <View style={{height: height/15,marginBottom:30}}>
            <Text style={{ fontSize: 30,textShadowColor :"#585858", textShadowOffset:{width: 1, height: 1},
            textShadowRadius:15,fontWeight: 'bold',color:"white"}}>Login</Text>
          </View>

          <View style={{flexDirection:"row"}}>

              <View style={{ backgroundColor: "white", height:height/15,width :width/6, justifyContent: "center", borderColor:"silver",
           paddingTop:12 ,flexDirection:"row",justifyContent:"space-around"
            ,borderTopLeftRadius:10,borderBottomLeftRadius:10,borderColor:"red",
            borderTopWidth:1,borderBottomWidth:1,borderLeftWidth:1}}>

            <Image source={require('./assets/flag.png')}
                style={{height:height/50,width :width-385, resizeMode: "cover",padding:15,paddingTop:15,
                marginLeft:5}} />
                 <Text style={{paddingTop:5,fontSize:15,marginRight:3}}> +91</Text> 
              </View>
             

            <TextInput placeholder='  Enter Phone Number' keyboardType='decimal-pad' maxLength={10} 

            onChangeText={(Number)=>{setPhoneNumber(Number)}} autoFocus={true}
              style={{ backgroundColor: "white",height:height/15,width :width-130, borderColor:"red",
              letterSpacing:.5,borderBottomRightRadius:10,borderTopRightRadius:10,padding:12,
              borderTopWidth:1,borderBottomWidth:1,borderRightWidth:1,fontSize:15}}></TextInput>
           
          </View>
          <View style={{marginTop:5}}>
           {info? <Text style={{fontWeight:"300",color:"grey"}}> *Please Enter Phone Number!*</Text> : <Text></Text>} 
           {info1? <Text style={{fontWeight:"300",color:"grey"}}> *Incorrect Phone Number!*</Text> : <Text></Text>} 
          </View>
          
          <View  style={{flexDirection:"row"}}>
                <Text style={{ fontWeight: "400", letterSpacing: .5,marginTop:10,fontSize:18,alignItems:"center"
              }}> Enter PIN</Text>
                <MaterialIcons name="lock" size={20} color="black" style={{
                    paddingTop:13
                }} />
            </View>

            <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    marginTop: 10,
                    width:width-160
                }}>
                    <TextInput
                        ref={refinput1}
                        maxLength={1}
                        keyboardType='decimal-pad'
                        disabled
                        onChangeText={(pin1) => {
                            setPin1(pin1);
                            if (pin1 !== null) {
                                refinput2.current.focus();
                               
                            }
                            if (pin1 === "") {
                                refinput1.current.focus();
                               
                            }
                        }}
                        style={{
                            backgroundColor: "white", height: height/18, borderColor: "silver", borderWidth: .5, width:width-365,
                            fontSize:18, paddingLeft:15,
                        }}
                    ></TextInput>
                <TextInput
                        ref={refinput2}
                        maxLength={1}
                        keyboardType='number-pad'
                        onChangeText={(pin2) => {
                            setpin2(pin2);
                            if (pin2 !== null) {
                                refinput3.current.focus();
                            }
                            if (pin2 === "") {
                                refinput1.current.focus();
                            }
                        }}
                        style={{
                          backgroundColor: "white", height: height/18, borderColor: "silver", borderWidth: .5, width:width-365,
                          fontSize:18, paddingLeft:15,
                      }}
                    ></TextInput>

                <TextInput ref={refinput3} maxLength={1}  onChangeText={(pin3) => { setpin3(pin3);
                   if(pin3 !== null){ refinput4.current.focus();}
                   if(pin3 === ""){ refinput2.current.focus();}
                   
                }} keyboardType='number-pad'
                style={{
                  backgroundColor: "white", height: height/18, borderColor: "silver", borderWidth: .5, width:width-365,
                  fontSize:18, paddingLeft:15,
              }}/>

                <TextInput ref={refinput4} maxLength={1} onChangeText={(pin4) => { setpin4(pin4);
                    if(pin4 !== null) {refinput4.current.focus();}
                    if(pin4 == "") { refinput3.current.focus(); }
                    // !Number && refinput3.current.focus();
                }} keyboardType='number-pad'
                style={{
                  backgroundColor: "white", height: height/18, borderColor: "silver", borderWidth: .5, width:width-365,
                  fontSize:18, paddingLeft:15,
              }}/>
            </View>
            <View style={{marginTop:5}}>
           {info2? <Text style={{fontWeight:"300",color:"grey"}}> *Please Enter PIN!*</Text> : <Text></Text>} 
           {info3? <Text style={{fontWeight:"300",color:"grey"}}> *Incorrect PIN!*</Text> : <Text></Text>} 
          </View>
          
          
           <View >
             <TouchableOpacity style ={{ width:width-100, height:height/16,
          backgroundColor:"orangered",padding:10,marginTop:80,alignItems:"center",
          borderRadius:30}}  onPress={()=>{navigation.navigate("Homepage")}}>
            <Text style={{fontSize:21, fontWeight:"500", color:"white"}}>Log in</Text> 
            </TouchableOpacity>           
          </View>
          
         
        </View>
       
      </View>
      </ImageBackground>
  
     
      </Pressable>
      </View>
    
  );
}