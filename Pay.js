import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Modal, Pressable, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import { useState ,useRef} from 'react';

const { height, width } = Dimensions.get('screen');

export default function App({ route }) {

  const [show, setShow] = useState(false);

  const navigation = useNavigation();
  const { k } = route.params;

  const [amount, setAmount] = useState('');
  const [modal, setModal] = useState(false)

  const store = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjUO-E7cqZ-QNY8sqSvbS4cYhUP50ujlmvxw&usqp=CAU";

  const pay = () => {
    if (amount != null && amount !== undefined && amount !== "") {
      setModal(true)
    }
    else {
      setShow(true)
      setTimeout(() => {
        setShow(false)
      }, 5000);
    }
  }

  //Modal View


  var p = 1234;

  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");
  const [pin4, setPin4] = useState("");

  const pin1Ref = useRef(null);
  const pin2Ref = useRef(null);
  const pin3Ref = useRef(null);
  const pin4Ref = useRef(null);

  var l = 1;
  var m = 2;
  var n = 3;
  var o = 4;

  const submit = () => {
    if ((pin1 == l && pin2 == m && pin3 == n && pin4 == o) && (pin1 != null && pin2 != null && pin3 != null && pin4 != null) &&
      (pin1 !== undefined && pin2 !== undefined && pin3 !== undefined && pin4 !== undefined) &&
      (pin1 !== "" && pin2 !== "" && pin3 !== "" && pin4 !== "")) {
      navigation.navigate("Bill", { k: k, amount: amount })
    }
    else {
      setVisible(true)
      setTimeout(() => {
        setVisible(false)
      }, 5000);
    }
  }

  const [visible, setVisible] = useState(false);


  return (
    <View style={{
      flex: 1,
    }}>
      <Modal
        transparent={false}
        visible={modal}
        animationType="fade"
      >
        <View style={{
          height: height / 1.3,
        }}>
          <TouchableOpacity onPress={()=>setModal(false)}>
            <View style={{
              alignItems:'flex-end',
              marginRight:20
            }}>
              <Text style={{
                fontSize:30,
                fontWeight:'bold'
              }}>
                X
              </Text>
            </View>
          </TouchableOpacity>
          <View style={{
            alignItems: 'center',
            marginTop: 60
          }}>
            <Text style={{
              fontSize: 25,
              fontWeight: '400'
            }}>
              Enter your pin
            </Text>
          </View>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 60
          }}>
            <TextInput
              ref={pin1Ref}
              maxLength={1}
              keyboardType='number-pad'
              onChangeText={(pin1) => {
                setPin1(pin1);
                if (pin1 !== null) {
                  pin2Ref.current.focus();
                }
                if (pin1 === "") {
                  pin1Ref.current.focus();
                }
              }}
              style={{
                height: height / 16,
                width: width / 8,
                backgroundColor: 'w hite',
                borderWidth: 2,
                paddingLeft: 20,
              }}
            />
            <TextInput
              ref={pin2Ref}
              maxLength={1}
              keyboardType='number-pad'
              onChangeText={(pin2) => {
                setPin2(pin2)
                if (pin2 !== null) {
                  pin3Ref.current.focus();
                }
                if (pin2 === "") {
                  pin1Ref.current.focus();
                }
              }}
              style={{
                height: height / 16,
                width: width / 8,
                backgroundColor: 'white',
                marginLeft: 20,
                borderWidth: 2,
                paddingLeft: 20,
              }}
            />
            <TextInput
              ref={pin3Ref}
              maxLength={1}
              keyboardType='number-pad'
              onChangeText={(pin3) => {
                setPin3(pin3)
                if (pin3 !== null) {
                  pin4Ref.current.focus();
                }
                if (pin3 === "") {
                  pin2Ref.current.focus();
                }
              }}
              style={{
                height: height / 16,
                width: width / 8,
                backgroundColor: 'white',
                marginLeft: 20,
                borderWidth: 2,
                paddingLeft: 20,
              }}
            />
            <TextInput
              ref={pin4Ref}
              maxLength={1}
              keyboardType='number-pad'
              onChangeText={(pin4) => {
                setPin4(pin4)
                if (pin4 === "") {
                  pin3Ref.current.focus();
                }
              }}
              style={{
                height: height / 16,
                width: width / 8,
                backgroundColor: 'white',
                marginLeft: 20,
                borderWidth: 2,
                paddingLeft: 20,
              }}
            />
          </View>
          <View style={{
            alignItems: 'center',
            marginTop: 30
          }}>
            {visible ? <Text style={{ fontSize: 20, fontWeight: '400', color: 'red' }}>*Please Enter the Pin*</Text> : null}
          </View>
        </View>
        <View style={{
          height: height,
          alignItems: 'center',
          // backgroundColor: 'pink',
        }}>
          <TouchableOpacity onPress={submit}>
            <View style={{
              height: height / 18,
              width: width / 1.5,
              backgroundColor: 'orangered',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius:20,
            }}>

              <Text style={{
                fontSize: 25,
                fontWeight: 'bold',
                color: 'white'
              }}>
                SUBMIT
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
      <View style={{
        height: height / 8,
        width: width / 1.5,
        marginLeft: 60,
        alignItems: 'center',
        marginTop: 150,
      }}>
        <Image source={{ uri: store }}
          style={{
            height: height / 12,
            width: width / 5.5,
            borderRadius: 70,
            borderWidth: 1,
            borderColor: 'silver'
          }}
        />
      </View>
      <View>
        <View style={{
          alignItems: 'center',
          marginTop: 20
        }}>
          <Text style={{
            fontSize: 22,
            fontWeight: '600'
          }}>
            Paying : {k}
          </Text>
          <Text style={{
            fontSize: 20,
            fontWeight: '300'
          }}>
            +91 6369010664
          </Text>
          <Text style={{
            fontSize: 20,
            fontWeight: '300'
          }}>
            Banking name : {k}
          </Text>
        </View>
      </View>
      <View style={{
        alignItems: 'center',
      }}>
        <View style={{
          marginTop: 70,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row'
        }}>
          <Text style={{
            fontSize: 25,
            fontWeight: '400',
            height: height / 19,
            width: width / 14,
            alignItems: 'center',
            paddingLeft: 10,
            paddingTop: 10,
            borderBottomWidth: 0.5
          }}>
            ₹
          </Text>
          <TextInput
            onChangeText={(text) => setAmount(text.replace(/[^0-9]/g, ''))}
            // placeholder='0'
            keyboardType='numeric'
            value={amount}
            maxLength={6}
            // textAlign="center"
            style={{
              height: height / 19,
              width: width / 4,
              fontSize: 25,
              fontWeight: '400',
              alignItems: 'center',
              // justifyContent: 'center',
              borderBottomWidth: 0.5

            }}
          />
        </View>
        <View style={{
          marginTop: 20
        }}>
          <TextInput
            placeholder='Add a Note'
            maxLength={15}
            style={{
              height: height / 18,
              width: width / 3.5,
              backgroundColor: 'gainsboro',
              paddingLeft: 20,
              fontSize: 16,
              fontWeight: 'bold',
              borderRadius: 10
            }}
          />
        </View>
        <View>
          {show ? <Text style={{ fontSize: 18, fontWeight: '400', color: 'red' }}>*Please Enter the Amount*</Text> : null}
        </View>
        <View style={{
          marginTop: 100,
          height: height,
          // backgroundColor: 'gainsboro',
        }}>
          <TouchableOpacity onPress={pay}>
            <View style={{
              alignItems: 'center',
              backgroundColor: 'orangered',
              justifyContent: 'center',
              width: width / 2.5,
              height: height / 20,
              borderRadius: 15
            }}>
              <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold', paddingBottom: 5 }}>Pay</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
