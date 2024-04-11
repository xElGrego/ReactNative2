import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/ListRoute";
import { FC } from "react";
import { Button, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

export const Home: FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const navigateTo = (screen: keyof RootStackParamList) => {
        navigation.navigate(screen);
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center' }}>
            <View style={{ flexDirection: 'column', gap: 10 }}>
                <Button title='Login' onPress={() => navigateTo('Welcome')} />
                <Button title='Web View' onPress={() => navigateTo('Webview')} />
                <Button title='Crud Users' onPress={() => navigateTo('User')} />
                <Button title='Onboarding' onPress={() => navigateTo('Onboarding')} />
                <Button title='Drawer' onPress={() => navigateTo('Drawer')} />
            </View>
        </SafeAreaView>
    );
};