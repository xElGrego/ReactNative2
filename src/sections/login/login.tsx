import React, { FC } from "react";
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../types/ListRoute";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon } from "react-native-heroicons/solid";


export const LoginPage: FC = (props: any) => {
    return (
        <View className="flex-1 bg-white">
            <SafeAreaView className="flex">
                <View className="flex-row justify-start">
                    <TouchableOpacity
                        onPress={() => props.navigation.goBack()}
                        className="bg-yellow-400 p-2 rounded-tr-2xl ml-4"
                    >
                        <ArrowLeftIcon size="18" color="black" />
                    </TouchableOpacity>
                </View>
                <View className="flex-row justify-center">
                    <Image source={require("../../../assets/Login.png")} style={{ width: 200, height: 200 }} />
                </View>
            </SafeAreaView>
            <View className="flex-1 bg-purple-300 px-8 pt-8" style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>
                <View className="form space-y-2">
                    <View>
                        <Text className="text-xs text-gray-700">Email Address</Text>
                        <TextInput className="px-4 bg-gray-200 text-gray-700 rounded-md mb-3" />
                    </View>
                </View>
                <View className="form space-y-2">
                    <View>
                        <Text className="text-xs text-gray-700">Password</Text>
                        <TextInput className="px-4 bg-gray-200 text-gray-700 rounded-md mb-3" />
                    </View>
                </View>
                <TouchableOpacity className="flex items-end mb-5">
                    <Text className="text-gray-700">Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-yellow-400 py-3 rounded-xl">
                    <Text className="text-center font-semibold">Login</Text>
                </TouchableOpacity>
                <Text className="text-md text-center mt-4 font-semibold py-3">Or</Text>
                <View className="flex-row justify-center space-x-12">
                    <TouchableOpacity className="p-2 bg-gray-200 rounded-2xl">
                        <Image source={require("../../../assets/google.png")} className="w-10 h-10" />
                    </TouchableOpacity>
                    <TouchableOpacity className="p-2 bg-gray-200 rounded-2xl">
                        <Image source={require("../../../assets/instagram.png")} className="w-10 h-10" />
                    </TouchableOpacity>
                    <TouchableOpacity className="p-2 bg-gray-200 rounded-2xl">
                        <Image source={require("../../../assets/twitter.png")} className="w-10 h-10" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}