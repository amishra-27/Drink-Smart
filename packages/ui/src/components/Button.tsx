import React from 'react';
import { 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  ViewStyle, 
  TextStyle, 
  Platform 
} from 'react-native';

export interface ButtonProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  onPress?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  children?: React.ReactNode;
}

export const Button = ({ 
  title,
  variant = 'primary', 
  size = 'medium',
  onPress,
  style,
  textStyle,
  children
}: ButtonProps) => {
  // Different implementation based on platform
  if (Platform.OS === 'web') {
    // Web implementation using standard button element
    return (
      <button 
        onClick={onPress}
        className={`
          button 
          button-${variant} 
          button-${size}
        `}
        style={style as any}
      >
        {children || title}
      </button>
    );
  }
  
  // React Native implementation
  const buttonStyles = [
    styles.button,
    variant === 'primary' ? styles.primaryButton : 
    variant === 'secondary' ? styles.secondaryButton : 
    styles.outlineButton,
    size === 'small' ? styles.smallButton : 
    size === 'large' ? styles.largeButton : 
    styles.mediumButton,
    style
  ];
  
  const textStyles = [
    styles.text,
    variant === 'primary' ? styles.primaryText : 
    variant === 'secondary' ? styles.secondaryText : 
    styles.outlineText,
    size === 'small' ? styles.smallText : 
    size === 'large' ? styles.largeText : 
    styles.mediumText,
    textStyle
  ];
  
  return (
    <TouchableOpacity 
      style={buttonStyles} 
      onPress={onPress}
      activeOpacity={0.8}
    >
      {children || <Text style={textStyles}>{title}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#3B82F6',
  },
  secondaryButton: {
    backgroundColor: '#10B981',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#3B82F6',
  },
  smallButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  mediumButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  largeButton: {
    paddingVertical: 14,
    paddingHorizontal: 24,
  },
  text: {
    fontWeight: '600',
  },
  primaryText: {
    color: 'white',
  },
  secondaryText: {
    color: 'white',
  },
  outlineText: {
    color: '#3B82F6',
  },
  smallText: {
    fontSize: 14,
  },
  mediumText: {
    fontSize: 16,
  },
  largeText: {
    fontSize: 18,
  },
}); 