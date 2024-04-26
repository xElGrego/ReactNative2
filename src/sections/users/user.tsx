import { FC } from "react";
import { createUserAsyncStorage } from "../../modules/users/infrastructure/AsyncStorageUserRepository";
import { UserContextProvider } from "./context/UserContext";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserList } from "./components/UserList";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../types/ListRoute";


export const UserPage: FC = (props: any) => {
    const repository = createUserAsyncStorage();
    return (
        <UserContextProvider repository={repository}>
            <SafeAreaView className="flex-1 rounded-lg px-4 py-2 mt-2 w-full bg-white">
                <View className="flex-row items-center justify-center">
                    <View className="flex-none">
                        <TouchableOpacity
                            onPress={() => props.navigation.goBack()}
                            className="bg-yellow-400 p-2 rounded-tr-2xl"
                        >
                            <ArrowLeftIcon size="18" color="black" />
                        </TouchableOpacity>
                    </View>
                    <View className="flex-1">
                        <Text className="font-semibold text-2xl text-black text-center">Usuarios</Text>
                    </View>
                </View>
                <View className="border-b my-2 border-gray-300"></View>
                <UserList />
            </SafeAreaView>
        </UserContextProvider>
    );
}