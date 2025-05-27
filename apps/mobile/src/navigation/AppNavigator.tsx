import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';
import HomeScreen from '../screens/HomeScreen';

// Define the types for our navigation structure
export type RootStackParamList = {
  Main: undefined;
  Details: { id: string };
};

export type MainTabParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
};

// Create the navigators
const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();

// Placeholder screens
const ProfileScreen = () => (
  <View className="flex-1 items-center justify-center bg-white">
    <Text className="text-lg">Profile Screen</Text>
  </View>
);

const SettingsScreen = () => (
  <View className="flex-1 items-center justify-center bg-white">
    <Text className="text-lg">Settings Screen</Text>
  </View>
);

// Bottom Tab Navigator
const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#3B82F6',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <View style={{ width: size, height: size, backgroundColor: color, borderRadius: size / 2 }} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <View style={{ width: size, height: size, backgroundColor: color, borderRadius: size / 2 }} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <View style={{ width: size, height: size, backgroundColor: color, borderRadius: size / 2 }} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// Root Stack Navigator
export const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={MainTabs}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}; 