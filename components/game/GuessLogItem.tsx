import { FC, ReactNode } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

interface GuessLogItemProps {
  item: ReactNode;
  roundNumber: number;
}

export const GuessLogItem: FC<GuessLogItemProps> = ({ item, roundNumber }) => {
  return (
    <View style={styles.guessItemContainer}>
      <Text style={styles.guessItemText}>#{roundNumber}</Text>
      <Text style={styles.guessItemText}>Opponents's Guess: {item}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  guessItemContainer: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
    marginVertical: 12,
    width: '90%',
    backgroundColor: Colors.accent500,
    padding: 12,
    borderRadius: 40,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: { width: 2, height: 2 },
  },
  guessItemText: {
    color: Colors.primary800,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'open-sans',
  },
});
