import react, {useState,useEffect} from "react";
import {Text, View} from "react-native";
import { COLORS } from "../../Utils/Colors";
import { GestureHandlerRootView, TouchableOpacity } from "react-native-gesture-handler";
import { fetchQuizData } from "../../Utils/api";

const Quiz=(props)=>{
  const [quiz,setQuiz]=useState("")
 
  const startQuiz=async()=>{
  try {
    const quizData=await fetchQuizData();
    props.navigation.navigate("QuizPlay", {quizData})
  }
  catch (error) {
    console.error("Fetching quiz data error:", error)
  
   } 
 } 





    return (
        <GestureHandlerRootView style={{
            backgroundColor:COLORS.primary,
            flex:1,
            justifyContent:"space-evenly"
            
        }}>
         <TouchableOpacity   onPress={()=>startQuiz('easy')} style={{
             backgroundColor: "purple",
             borderRadius: 20,
             paddingBottom: 5,
             justifyContent:'center',
             alignItems:'center',
             width:'50%',
             height: 70,
             alignSelf:"center",
             marginVertical: 30
         }}>
          <Text style={{
            fontSize: 25,
            fontWeight:'bold',
            alignSelf:"center",
            alignItems:"center",
            justifyContent:"center",
            color: "white",
            paddingTop: 10
          }}>Start Now</Text>
         </TouchableOpacity>
       
       
        </GestureHandlerRootView>
    )
}

export default Quiz;