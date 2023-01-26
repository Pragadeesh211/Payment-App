import { View, Text, TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";
import { useNavigation } from '@react-navigation/native';


export default function Bill({ route }) {
    const navigation = useNavigation();

    const { height, width } = Dimensions.get('screen');
    const { k, amount } = route.params;
    return (
        <View style={{
            flex: 1,
        }}>
            <View style={{
                height: height / 1.2,
                // backgroundColor: 'lightblue',
            }}>
                <View style={{
                    height: height / 4,
                    alignItems: 'center',
                    marginTop: 50,
                }}>
                    <View>
                        <Text style={{
                            fontSize: 40,
                            fontWeight: 'bold'
                        }}>
                            Thank You!
                        </Text>
                    </View>
                    <View style={{
                        height: height / 9,
                        width: width / 4,
                        marginTop: 30,
                        alignItems: 'center',
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        borderRadius: 50,
                        borderWidth: 2,
                        borderColor: 'green',
                    }}>
                        <Text style={{
                            fontSize: 50,
                            color: 'green',
                            fontWeight: 'bold'
                        }}>
                            ✓
                        </Text>
                    </View>
                </View>
                <View style={{
                    height: height / 3,
                    backgroundColor: 'snow',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 50,
                    margin: 20,
                }}>
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Text style={{
                            fontSize: 30,
                            fontWeight: '500',
                            textAlign: 'center'
                        }}>
                            {k}
                        </Text>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: 20,
                        }}>
                            <View style={{
                                height: height / 36,
                                width: width / 18,
                                alignItems: 'center',
                                backgroundColor: 'green',
                                justifyContent: 'center',
                                borderRadius: 50,
                                borderWidth: 2,
                                borderColor: 'green',
                            }}>
                                <Text style={{
                                    fontSize: 10,
                                    color: 'white',
                                    fontWeight: 'bold'
                                }}>
                                    ✓
                                </Text>
                            </View>
                            <Text style={{
                                fontSize: 30,
                                fontWeight: '400',
                                marginLeft: 10
                            }}>
                                ₹
                            </Text>
                            <Text style={{
                                fontSize: 30,
                                fontWeight: '400'
                            }}>
                                {amount}
                            </Text>
                        </View>
                        <View style={{
                            marginTop: 20,
                        }}>
                            <Text style={{
                                fontSize: 20,
                                fontWeight: '400'
                            }}>
                                UPI Transaction ID
                            </Text>
                            <Text style={{
                                fontSize: 20,
                                fontWeight: '400'
                            }}>
                                235448630011
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{
                height: height,
                alignItems: 'center',
            }}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <View style={{
                        height: height / 18,
                        width: width /1.5,
                        backgroundColor: 'orangered',
                        marginTop: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 20,
                    }}>
                        <Text style={{
                            fontSize: 25,
                            fontWeight: 'bold',
                            color: 'white'
                        }}>
                            DONE
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}