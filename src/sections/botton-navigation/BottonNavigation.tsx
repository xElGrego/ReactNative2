import React, { FC } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabPage1 } from "./screens/TabPage1";
import { TabPage2 } from "./screens/TabPag2";
import { ArrowLeftIcon, ArchiveBoxIcon } from "react-native-heroicons/solid";

export const BottonNavPage: FC = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconComponent;
                    if (route.name === 'Feed') {
                        iconComponent = <ArrowLeftIcon size={size} color={color} />;
                    } else if (route.name === 'Article') {
                        iconComponent = <ArchiveBoxIcon size={size} color={color} />;
                    }
                    return iconComponent;
                },
                tabBarStyle: {
                    padding: 2,
                    paddingBottom: 4,
                    backgroundColor: 'gray',
                },
                tabBarActiveTintColor: 'yellow',
                tabBarInactiveTintColor: 'white',
                headerShown: false
            })}
        >
            <Tab.Screen
                name="Feed"
                component={TabPage1}
            />
            <Tab.Screen
                name="Article"
                component={TabPage2}
            />
        </Tab.Navigator>
    );
};
