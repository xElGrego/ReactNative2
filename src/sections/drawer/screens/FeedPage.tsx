import { FC } from "react";
import { SafeAreaView, View, Text } from "react-native";

export const FeedPage: FC = () => {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className=" flex  my-4">
                <Text className="text-black font-bold text-2xl text-center">
                    FeedPage
                </Text>
                <Text className="text-black font-bold  text-center">
                    FeedPage1
                </Text>
            </View>
        </SafeAreaView>
    );
}
