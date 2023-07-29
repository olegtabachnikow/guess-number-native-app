import { FC, ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

interface CardProps {
  children: ReactNode;
}

export const Card: FC<CardProps> = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    width: '100%',
    marginTop: 36,
    padding: 16,
    backgroundColor: Colors.primary800,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: { width: 10, height: 10 },
  },
});
