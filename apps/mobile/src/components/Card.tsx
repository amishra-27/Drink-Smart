import React, { ReactNode } from 'react';
import { Text, View } from 'react-native';

interface CardProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export const Card = ({ title, children, className = '' }: CardProps) => {
  return (
    <View className={`bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md ${className}`}>
      {title && (
        <Text className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
          {title}
        </Text>
      )}
      <View>{children}</View>
    </View>
  );
}; 