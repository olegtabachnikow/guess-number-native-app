import { FC, ReactNode } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

interface NumberContainerProps {
  children: ReactNode;
}

export const NumberContainer: FC<NumberContainerProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
  },
  text: {
    color: Colors.accent500,
    fontSize: 36,
    fontFamily: 'open-sans-bold',
  },
});
