import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FC } from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { RootStackParamList } from "../../../../types/ListRoute";
import { ArrowLeftIcon } from "react-native-heroicons/solid";

type TabPage2NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ArticlePage'>;

export const ArticlePage: FC = () => {

    const navigation = useNavigation<TabPage2NavigationProp>();

    const goBack = () => {
        navigation.navigate("Home");
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
