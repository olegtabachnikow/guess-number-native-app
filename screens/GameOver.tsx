import { FC, SetStateAction } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { Title } from '../components/ui/Title';
import Colors from '../constants/colors';
import { PrimaryButton } from '../components/ui/PrimaryButton';

interface GameOverProps {
  userNumber: number;
  roundsNumber: number;
  onStartNewGame: () => void;
}

export const GameOver: FC<GameOverProps> = ({
  userNumber,
  roundsNumber,
  onStartNewGame,
}) => {
  return (
    <View style={styles.rootContainer}>
      <Title text='GAME OVER!' />
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/success.png')} />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highligh}>{roundsNumber}</Text>{' '}
        round to guess the number{' '}
        <Text style={styles.highligh}>{userNumber}</Text>.
      </Text>
      <PrimaryButton handler={onStartNewGame}>Start New Game</PrimaryButton>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  highligh: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500,
  },
});
