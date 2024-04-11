import React, { FC } from "react";
import { Text, View, } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";


export const TestPage: FC = () => {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1 flex justify-around my-4">
                <Text className="text-black font-bold text-3xl text-center">
                    Test xd
                </Text>
            </View>
        </SafeAreaView>
    );
}