import react, { useEffect } from "react";
import {View, Text} from "react-native";
import { COLORS } from "../../Utils/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";




const Home=(props)=>{
    useEffect(()=>{
        const timer=setTimeout(()=>{
            props.navigation.navigate("Quiz");
        }, 3000)
    })
    const handlePress=()=>{
props.navigation.navigate("Quiz") }
    return (
         <GestureHandlerRootView style={{
            backgroundColor:COLORS.primary,
            flex:1}}>
               
        <View style={{
            width:'100%',
            height: 370,
            justifyContent:'center',
            alignItems: 'center',
            borderBottomRightRadius: 100,
            backgroundColor:COLORS.secondary
            
        }}>
            <Text style={{
                fontSize: 70, fontWeight: 'bold', color: 'purple'
            }}>QUIZ 👨‍🎓</Text>
             
        </View>
        <Text style={{
                    color:'white',
                    fontSize: 40,
                    fontWeight:'bold',
                    marginTop: 100,
                    alignSelf: 'center',
                    marginRight: 70
                    
                }}>Let's Play</Text>
                
                <Text style={{
                    color:'green',
                    fontSize: 20,
                    fontWeight: 'bold',
                    alignSelf: 'center',
                    marginRight: 85
                }}>PLay Now & Win </Text>
            {/* <TouchableOpacity 
               onPress={handlePress}
              style={{
                backgroundColor: "purple",
                borderRadius: 20,
                paddingBottom: 5,
                justifyContent:'center',
                alignItems:'center',
                width:'50%',
                height: 70,
                marginLeft: 55,
                marginVertical: 30

              }}
            
            
            >
              <Text style={{
               color: 'white',
               fontSize: 15,
               fontWeight: 'bold',
               alignSelf:'center',
               marginTop: 10,
               justifyContent:'center',
               alignItems:'center',
               alignSelf:'center'
               

              }}>Play Now</Text>
            </TouchableOpacity> */}
         
        </GestureHandlerRootView>

    )
}
export default Home;