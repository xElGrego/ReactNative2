import React, { FC } from "react";
import { Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../types/ListRoute";
import { SafeAreaView } from "react-native-safe-area-context";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Welcome">;

export const WelcomePage: FC<HomeScreenProps> = (props) => {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1 flex justify-around my-4">
                <Text className="text-black font-bold text-3xl text-center">
                    Comencemos
                </Text>
                <View className="flex-row justify-center">
                    <Image source={require("../../../assets/Welcome.png")} style={{ width: 250, height: 250 }} />
                </View>
                <View className="flex-2 justify-center text-center">
                    <TouchableOpacity className="py-2 bg-yellow-400 mx-9 rounded-xl">
                        <Text className="font-bold text-center text-black-700">Ingresar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="py-2 bg-black mx-9 mt-2 rounded-xl"
                        onPress={() => props.navigation.goBack()}
                    >
                        <Text className="font-bold text-center text-black-700 text-yellow-400">Regresar</Text>
                    </TouchableOpacity>
                </View>
                <View className="flex-row justify-center">
                    <Text className="font-semibold">Already have an account </Text>
                    <TouchableOpacity

                        onPress={() => props.navigation.navigate("Login")}
                    >
                        <Text className=" font-semibold text-yellow-400">Log In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}