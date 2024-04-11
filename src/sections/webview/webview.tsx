import React, { FC } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../types/ListRoute";
import { SafeAreaView } from "react-native-safe-area-context";
import WebView from "react-native-webview";
import { Text, View, TouchableOpacity } from 'react-native';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Webview">;
const GOOGLE = "https://www.google.com/";

export const WebviewPage: FC<HomeScreenProps> = (props) => {
    return (
        <SafeAreaView className="flex-col flex-1 bg-white">
            <TouchableOpacity className="bg-yellow-400 py-2 rounded-xl"
                onPress={() => props.navigation.goBack()}
            >
                <Text className="text-center font-semibold">Regresar</Text>
            </TouchableOpacity>
            <View className="flex-1 bg-blue-500">
                <WebView source={{ uri: GOOGLE }} />
            </View>
        </SafeAreaView>
    );
}