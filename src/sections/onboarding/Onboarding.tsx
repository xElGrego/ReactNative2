import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../types/ListRoute";
import { SafeAreaView, TouchableOpacity, View, Text } from "react-native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { FC } from "react";
import { OnboardFlow } from "react-native-onboard";
import { useNavigation } from "@react-navigation/native";


export const OnboardingPage: FC = () => {
    const navigation = useNavigation();

    const onDone = () => {
        navigation.goBack();
    }

    return (
        <OnboardFlow
            pages={[
                {
                    title: 'Pagina 1',
                    subtitle: 'Lorem ipsum dolor sit amet, ',
                    primaryButtonTitle: 'Continuar',
                    imageUri: 'https://frigade.com/img/example1.png',
                },
                {
                    title: 'Pagina 2',
                    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ',
                    imageUri: 'https://frigade.com/img/example2.png',
                },
                {
                    title: 'Pagina 3',
                    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ',
                    imageUri: 'https://frigade.com/img/example2.png',
                }
            ]}
            type={'fullscreen'}
            onDone={onDone}
            textStyle={{ fontSize: 10 }}
            primaryButtonStyle={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 0,
            }}
        />
    );
}