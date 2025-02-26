import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { ReactElement } from "react";
import { Dimensions, Image, Text, TouchableWithoutFeedback, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get('window')

export default function HomeScreen() {
    const babyName = 'Anjalie'
    const babyBirthday = new Date('01/30/2025');
    const gender = 'g';
    const genderBannerColor = gender == 'g' ? 'pink' : 'lightblue';
    const babyAge = '10 days';

    
    return (
        <View>
            <View>
                <SafeAreaView style={{ width, height: height/3, backgroundColor: '#ccc', position: 'relative' }}>
                    <Image  />
                    {/* Image Overlay */}
                    <View></View>
                </SafeAreaView>
                <View style={{ position: 'absolute', width, bottom: 0, borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
                    <View style={{ backgroundColor: genderBannerColor, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 15, paddingVertical: 5, borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
                        <View>
                            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>{ babyName }</Text>
                            <Text style={{ color: 'white', fontSize: 16, fontWeight: '300' }}>{ babyAge }</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableWithoutFeedback onPress={function () {
                                console.log('go to detailed view')
                            }}>
                                <View style={{ width: 30, height: 30, justifyContent: 'center', alignItems: 'center', marginRight: 5 }}>
                                    <Text style={{ color: 'white'}}>
                                        <Ionicons name="list" size={18}/>
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={function () {
                                console.log('go to analytics view')
                            }}>
                                <View style={{ width: 30, height: 30, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: 'white'}}>
                                        <Ionicons name="analytics" size={18}/>
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{  width, height: ((height/3) * 3), backgroundColor: genderBannerColor }}>
                <View style={{ backgroundColor: 'white', width, height: ((height/3) * 3), borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
                       <TrackerInfoPanel color="red">
                            <Image style={{ backgroundColor: 'red', width: 50, height: 50, marginRight: 5 }} />
                            <View>
                                <Text style={{ color: rgb(255,0,20) }}>Time</Text>
                                <Text>Amount</Text>
                                <Text>Times Fed Today and Total Amount Fed Today</Text>
                            </View>
                       </TrackerInfoPanel>
                       <TrackerInfoPanel color='blue' />     
                       <TrackerInfoPanel color='green' />     
                       <TrackerInfoPanel color='brown' />     
                       <TrackerInfoPanel color='lightgreen' isLast/>     
                </View>
            </View>
        </View>
    )
}

function TrackerInfoPanel ({ isLast, children, color }: {isLast?: boolean; children?: React.ReactNode | undefined; color: string; }) {
    return (
        <View style={{ width, height: 100, borderTopLeftRadius: 15, borderTopRightRadius: 15, justifyContent: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 15 }}>
                <View style={{flexDirection: 'row', alignItems: 'center' }}>
                    {children}
                </View>
                <View>
                    <Ionicons name='timer' size={50} style={{ color }} />
                </View>
            </View>
            {!isLast ?  <View style={{ backgroundColor: 'lightgray', width: (width*7)/8, height: 1, alignSelf: 'center', position: 'absolute', bottom: 2 }}></View>  : null }
        </View>
    )
}