import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../types/ListRoute";
import { SafeAreaView, TouchableOpacity, View, Text } from "react-native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { FC } from "react";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Onboarding">;

export const OnboardingPage: FC<HomeScreenProps> = (props) => {
    return (
        <SafeAreaView className="flex-1 rounded-lg px-4 py-2 mt-2 w-full bg-white">
            <View className="flex-row items-center justify-center">
                <View className="flex-none">
                    <TouchableOpacity
                        onPress={() => props.navigation.goBack()}
                        className="bg-yellow-400 p-2 rounded-tr-2xl"
                    >
                        <ArrowLeftIcon size="18" color="black" />
                    </TouchableOpacity>
                </View>
                <View className="flex-1">
                    <Text className="font-semibold text-2xl text-black text-center">Onboarding</Text>
                </View>
            </View>
            <View className="border-b my-2 border-gray-300"></View>
        </SafeAreaView>
    );
}