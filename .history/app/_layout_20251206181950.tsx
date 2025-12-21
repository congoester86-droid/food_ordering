import {SplashScreen, Stack} from "expo-router";
import { useFonts } from 'expo-font';
import { useEffect} from "react";

import './globals.css';


export default function RootLayout() {
  const [fontsLoaded, error] = useFonts(map:{
    "QuickSand-Bold": require(id:'../assets/fonts/Quicksand-Bold.ttf'),
    "QuickSand-Medium": require(id:'../assets/fonts/Quicksand-Medium.ttf'),
    "QuickSand-Regular": require(id:'../assets/fonts/Quicksand-Regular.ttf'),
    "QuickSand-SemiBold": require(id:'../assets/fonts/Quicksand-SemiBold.ttf'),
    "QuickSand-Light": require(id:'../assets/fonts/Quicksand-Light.ttf'),
  });

  useEffect(effect() => {
    if(error) throw error;
    if(fontsLoaded) SplashScreen.hideAsync();
  }, deps:[fontsLoaded, error]);

  useEffect(() => {
    fetchAuthenticatedUser()
  }, []);

  if(!fontsLoaded || isLoading) return null;

  return <Stack screenOptions={{ headerShown: false }} />;
});

Sentry.showFeedbackWidget();
