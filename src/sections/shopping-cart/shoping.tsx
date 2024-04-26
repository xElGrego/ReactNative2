import { FC, useRef } from "react";
import { View, Text, TouchableOpacity, DrawerLayoutAndroid, Button, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../types/ListRoute";
import { createShopingAsyncStorage } from "../../modules/shopping-cart/infrastructure/AsyncStorageShopingRepository";
import { ShopingContextProvider } from "./context/ShopingContext";
import { ShopingList } from "./components/ShopingList";
import { FloatingButton } from "./components/FloatingButton";
import { PagosPage } from "./screens/PagosPage";


export const ShopingPage: FC = (props: any) => {
    const repository = createShopingAsyncStorage();
    const drawer = useRef<DrawerLayoutAndroid>(null);

    const open = () => {
        console.log("Open");
        drawer.current?.openDrawer()
    }

    const navigationView = () => (
        <View style={[styles.container, styles.navigationContainer]}>
            <PagosPage />
        </View>
    );

    return (
        <ShopingContextProvider repository={repository}>
            <DrawerLayoutAndroid
                ref={drawer}
                drawerWidth={300}
                drawerPosition={"right"}
                renderNavigationView={navigationView}>
                <SafeAreaView className="flex-1 rounded-lg px-4 py-2 mt-2 w-full bg-white">
                    <View className="flex-row items-center justify-center">
                        <View className="flex-none">
                            <TouchableOpacity
                                onPress={() => props.navigation.goBack()}
                                className="bg-yellow-400 p-2 rounded-sm"
                            >
                                <ArrowLeftIcon size="18" color="black" />
                            </TouchableOpacity>
                        </View>
                        <View className="flex-1">
                            <Text className="font-semibold text-2xl text-black text-center">Chompas Daivid"s</Text>
                        </View>
                    </View>
                    <View className="border-b my-2 border-gray-300"></View>
                    <ShopingList />
                    <FloatingButton onPress={open} />
                </SafeAreaView>
            </DrawerLayoutAndroid>
        </ShopingContextProvider>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    navigationContainer: {
        backgroundColor: 'white',
    },
    paragraph: {
        padding: 16,
        fontSize: 15,
        textAlign: 'center',
    },
});