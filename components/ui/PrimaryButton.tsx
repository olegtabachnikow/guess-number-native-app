import { FC, ReactNode } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

interface PrimaryButtonProps {
  handler?: () => void;
  children: ReactNode;
}

export const PrimaryButton: FC<PrimaryButtonProps> = ({
  handler,
  children,
}) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        android_ripple={{ color: '#640233' }}
        onPress={handler}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    elevation: 4,
    backgroundColor: 'transparent',
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    borderRadius: 50,
    overflow: 'hidden',
  },
  buttonText: { color: '#ffffff', textAlign: 'center' },
  pressed: {
    opacity: 0.75,
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary600,
    paddingVertical: 10,
    paddingHorizontal: 16,
    elevation: 2,
  },
});
