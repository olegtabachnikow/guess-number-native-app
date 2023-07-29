import { FC, ReactNode } from 'react';
import { StyleSheet, Text, StyleProp } from 'react-native';
import Colors from '../../constants/colors';

interface InstructionTextProps {
  children: ReactNode;
  style?: any;
}

export const InstructionText: FC<InstructionTextProps> = ({
  children,
  style,
}) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'open-sans',
    color: Colors.accent500,
    fontSize: 24,
  },
});
