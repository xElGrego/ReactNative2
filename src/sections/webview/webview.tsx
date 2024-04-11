import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, TouchableOpacity, View, Text } from 'react-native';
import { FC } from 'react';
import { RootStackParamList } from '../../../types/ListRoute';
import { WebView } from 'react-native-webview';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const GOOGLE = 'https://www.google.com/';

export const WebviewPage: FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const goBack = () => {
        navigation.goBack();
    };

    return (
        <SafeAreaView className="flex-col flex-1 bg-white">
            <TouchableOpacity className="bg-yellow-400 py-2 rounded-xl" onPress={goBack}>
                <Text className="text-center font-semibold">Regresar</Text>
            </TouchableOpacity>
            <View className="flex-1 bg-blue-500">
                <WebView source={{ uri: GOOGLE }} />
            </View>
        </SafeAreaView>
    );
};
