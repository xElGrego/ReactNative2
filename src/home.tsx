import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/ListRoute";
import { FC } from "react";
import { Button, View, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;

export const Home: FC<HomeScreenProps> = (props) => {
    return (
        <SafeAreaView className="flex-1 bg-white justify-center">
            <View style={{ flexDirection: 'column', gap: 10 }}>
                <Button title='Login' onPress={() => props.navigation.push("Welcome")} />
                <Button title='Web View' onPress={() => props.navigation.push("Webview")} />
                <Button title='Crud Users' onPress={() => props.navigation.push("User")} />
                <Button title='Onboarding' onPress={() => props.navigation.push("Onboarding")} />
            </View>
        </SafeAreaView>
    );
}