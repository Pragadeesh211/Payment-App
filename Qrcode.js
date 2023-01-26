import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Qrcode() {
  const navigation = useNavigation();

  const { height, width } = Dimensions.get('screen')

  const [hasPermission, sethasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("")
  var code = "https://mykaasu.com/customer/shopDetail/ck44VHRBbUxoM1ltVTdYQ3YzVWQ0QT09/skd_fast_food";
  var k="SKD Fast Food";

   //npx expo install expo-barcode-scanner
   const askForCameraPermission = () => {
    (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        sethasPermission(status === 'granted');
    })()
}

  //Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
    
  },[]);

  const handleQRcodeScanned = ({ type, data }) => {
    setScanned(true)
    setText(data);
    console.log(data)
  }

  // const Qr=()=>{
  //   setScanned(false)
  //   setText("")
  // }

  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera Permission</Text>
      </View>
    )
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to Camera</Text>
        <Button title='Allow Camera' onPress={askForCameraPermission()} />
      </View>
    )
  }
  console.log(text);

  if (scanned && text==code) {
    navigation.navigate("Pay",{k:k});
  
}

  

  const leftTop = {
    borderLeftWidth: 2,
    borderTopWidth: 2,
    borderColor: 'white'
  };
  const leftBottom = {
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderColor: 'white'
  };
  const rightTop = {
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderColor: 'white'
  };
  const rightBottom = {
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderColor: 'white'
  };

  return (
    <View style={{ flex: 1 , backgroundColor:'black'}}> 
      <BarCodeScanner
        onBarCodeScanned={scanned ?  undefined:handleQRcodeScanned }
        style={{ ...StyleSheet.absoluteFill }}
      />
      <View style={{ ...StyleSheet.absoluteFill, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ width: width / 2, height: width / 2 }}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 1, ...leftTop }} />
            <View style={{ flex: 1 }} />
            <View style={{ flex: 1, ...rightTop }} />
          </View>
          <View style={{ flex: 1 }} />
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 1, ...leftBottom }} />
            <View style={{ flex: 1 }} />
            <View style={{ flex: 1, ...rightBottom }} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  QRcodebox: {

    // borderRadius:20
  },
  maintext: {
    color: 'blue'
  }
});