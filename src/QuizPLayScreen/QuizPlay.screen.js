import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../Utils/Colors";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import { useRoute } from "@react-navigation/native";

const QuizPlay = () => {
    const route = useRoute();
    const { quizData } = route.params;

    useEffect(() => {
        const data = quizData.results.map(item => {
            return item;
        });
        console.log(data);
    }, []);

    return (
        <GestureHandlerRootView style={{
            flexGrow: 1,
            backgroundColor: COLORS.primary,
            justifyContent: "center",
            alignItems: 'center'
        }}>
            <ScrollView style={{ flex: 1 }}>
                {quizData?.results?.map((question, index) => {
                    return (
                        <View key={index} style={{ marginBottom: 20 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: COLORS.white }}>
                                Question {index + 1}: {question.question} 
                            </Text>
                            {/* Add options here if needed */}
                        </View>
                    );
                })}
            </ScrollView>
        </GestureHandlerRootView>
    );
}

export default QuizPlay;