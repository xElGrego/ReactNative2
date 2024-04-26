import React, { FC } from "react";
import { Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../types/ListRoute";
import { SafeAreaView } from "react-native-safe-area-context";


export const SignUpPage: FC = (props) => {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1 flex justify-around my-4">
                <Text className="text-black font-bold text-3xl text-center">
                    Signup
                </Text>
            </View>
        </SafeAreaView>
    );
}