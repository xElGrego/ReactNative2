import { FC } from "react";
import { SafeAreaView, View, Text } from "react-native";

export const TabPage1: FC = () => {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1 flex justify-around my-4">
                <Text className="text-black font-bold text-3xl text-center">
                    TabPage1
                </Text>
            </View>
        </SafeAreaView>
    );
}
