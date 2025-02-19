import LottieView from 'lottie-react-native';
import React, {useEffect, useState} from 'react';
import {Image, View} from 'react-native';
import Splash from './src/components/Splash';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {enableScreens} from 'react-native-screens';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
import Intro from './src/pages/Intro';
import Signin from './src/pages/Signin';

enableScreens();

const Stack = createNativeStackNavigator();

const App = () => {
  const [isSplashAnimationFinished, setIsSplashAnimationFinished] =
    useState(false);

  useEffect(() => {
    console.error('useEffect', isSplashAnimationFinished);
  }, [isSplashAnimationFinished]);

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      {!isSplashAnimationFinished ? (
        <Splash
          setIsSplashAnimationFinished={(isFinished: boolean) =>
            setIsSplashAnimationFinished(isFinished)
          }
        />
      ) : (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false, statusBarTranslucent: true}}>
            <Stack.Screen
              name="Intro"
              component={Intro}
            />
            <Stack.Screen
              name="Signin"
              component={Signin}
            />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </SafeAreaProvider>
  );
};

export default App;
