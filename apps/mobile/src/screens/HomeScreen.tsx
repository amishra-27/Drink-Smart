import { Button } from '@drink-smart/ui';
import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from '../components/Card';
import { useTheme } from '../context/ThemeContext';
import { registerForPushNotificationsAsync, scheduleHydrationReminder } from '../utils/notifications';

const HomeScreen = () => {
  const { isDarkMode, theme, setTheme } = useTheme();

  // Set up notifications when the component mounts
  useEffect(() => {
    const setupNotifications = async () => {
      await registerForPushNotificationsAsync();
      // Schedule a reminder for 10:00 AM
      await scheduleHydrationReminder(
        'Hydration Reminder',
        'Time to drink some water!',
        10,
        0
      );
    };

    setupNotifications().catch(console.error);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <SafeAreaView className={`flex-1 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <View className="flex-1 items-center justify-center p-4">
        <Card className="w-full max-w-sm mb-4" title="DrinkSmart">
          <Text className={`text-2xl font-bold text-center mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            Hello, DrinkSmart
          </Text>
          <Text className={`text-base mb-6 text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Track your daily water intake and stay hydrated.
          </Text>
          <View className="space-y-4">
            <Button
              variant="primary"
              size="large"
              onPress={() => console.log('Start tracking')}
            >
              Start Tracking
            </Button>
            <Button
              variant="secondary"
              onPress={() => console.log('Learn more')}
            >
              Learn More
            </Button>
            <TouchableOpacity
              onPress={toggleTheme}
              className={`py-2 px-4 rounded-md border ${
                isDarkMode ? 'border-gray-600' : 'border-gray-300'
              }`}
            >
              <Text className={`text-center ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
              </Text>
            </TouchableOpacity>
          </View>
        </Card>
        
        <Card className="w-full max-w-sm" title="Today's Goal">
          <View className="items-center py-2">
            <Text className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              2500ml / 3000ml
            </Text>
            <View className={`w-full h-4 rounded-full mt-2 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <View className="h-full bg-brand-primary rounded-full" style={{ width: '75%' }} />
            </View>
          </View>
        </Card>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen; 