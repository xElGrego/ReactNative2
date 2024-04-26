import { FC } from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";


export const ArticlePage: FC = (props: any) => {

    const goBack = () => {
        props.navigation.navigate("Home");
    }

    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1 flex justify-around my-4">
                <Text className="text-black font-bold text-3xl text-center">
                    ArticlePage
                </Text>
                <TouchableOpacity
                    onPress={goBack}
                    className="bg-yellow-400 p-2 rounded-tr-2xl ml-4"
                >
                    <ArrowLeftIcon size="18" color="black" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
