import react from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/Screens/HomeScreen/Home.screen";
import QuizRecordScreen from "./src/Screens/QuizRecordScreen/QuizRecords.screen";
import QuizScoreScreen from "./src/Screens/QuizScoreScreen/QuizScore.screen";
import QuizScreen from "./src/Screens/QuizScreen/Quiz.screen";
import SettingsScreen from "./src/Screens/SettingsScreen/Settings.screen";
import QuizPLayScreen from "./src/QuizPLayScreen/QuizPlay.screen";

function App() {
  const Stack=createNativeStackNavigator();
  const MainNavigator=()=>{
    return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen
        name="Home"
        component={HomeScreen}
        />
       
        <Stack.Screen
        name="Quiz"
        component={QuizScreen}
         />

        <Stack.Screen
         name="QuizPlay"
         component={QuizPLayScreen}
         />
         {/* <Stack.Screen
        name="QuizScore"
        component={QuizScoreScreen}
        />
          <Stack.Screen
        name='QuizRecords'
        component={QuizRecordScreen}
        />

         <Stack.Screen
         name="Settings"
         component={SettingsScreen}
         
         /> */}

       
        

      </Stack.Navigator>
    )
  }
  return (
    <NavigationContainer>
      <MainNavigator/>
    </NavigationContainer>
  )
}

export default App;