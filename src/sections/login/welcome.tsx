import React, { FC } from "react";
import { Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";


export const WelcomePage: FC = (props: any) => {

    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    }

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
                        onPress={goBack}
                    >
                        <Text className="font-bold text-center text-black-700 text-yellow-400">Regresar</Text>
                    </TouchableOpacity>
                </View>
                <View className="flex-row justify-center">
                    <Text className="font-semibold">Already have an account </Text>
                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate('Login');
                        }}
                    >
                        <Text className=" font-semibold text-yellow-400">Log In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}