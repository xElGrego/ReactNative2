import React from 'react';
import { DrawerActions, NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WelcomePage } from "./src/sections/login/welcome";
import "./styles.css";
import { RootStackParamList } from './types/ListRoute';
import { Home } from './src/home';
import { LoginPage } from './src/sections/login/login';
import { WebviewPage } from './src/sections/webview/webview';
import Toast from 'react-native-toast-message';
import { UserPage } from './src/sections/users/user';
import { PaperProvider } from 'react-native-paper';
import { OnboardingPage } from './src/sections/onboarding/Onboarding';
import { DrawerPage } from './src/sections/drawer/DrawerPage';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen
            name="Welcome"
            component={WelcomePage}
          />
          <Stack.Screen
            name="Login"
            component={LoginPage}
          />
          <Stack.Screen
            name="Webview"
            component={WebviewPage}
          />
          <Stack.Screen
            name="User"
            component={UserPage}
          />
          <Stack.Screen
            name="Onboarding"
            component={OnboardingPage}
          />
          <Stack.Screen
            name="Drawer"
            component={DrawerPage}
          />
        </Stack.Navigator>
        <Toast />
      </NavigationContainer>
    </PaperProvider>
  );
}