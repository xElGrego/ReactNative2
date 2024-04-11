import React, { FC } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { FeedPage } from "./screens/FeedPage";
import { ArticlePage } from "./screens/ArticlePage";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text } from "react-native";

export const DrawerPage: FC = () => {
    const Drawer = createDrawerNavigator();
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    }

    const SalirComponent: FC = () => (
        <TouchableOpacity onPress={goBack}>
            <Text>Salir</Text>
        </TouchableOpacity>
    );

    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="Feed"
                component={FeedPage}
            />
            <Drawer.Screen
                name="Article"
                component={ArticlePage}
                options={{
                    drawerLabel: "Articulo",
                    title: "Articulo Title",
                    drawerIcon: () => (
                        <ArrowLeftIcon size={20} color="#808080" />
                    ),
                }}
            />

        </Drawer.Navigator>
    );
};
