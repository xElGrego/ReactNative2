import { useNavigation } from "@react-navigation/native";
import { FC } from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { RootStackParamList } from "../../../../types/ListRoute";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type TabPage2NavigationProp = NativeStackNavigationProp<RootStackParamList, 'TabPage2'>;

export const TabPage2: FC = () => {
    const navigation = useNavigation<TabPage2NavigationProp>();

    const goBack = () => {
        navigation.navigate("Home");
    }

    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1 flex justify-around my-4">
                <Text className="text-black font-bold text-3xl text-center">
                    TabPage2
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
