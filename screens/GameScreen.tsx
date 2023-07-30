import { FC, useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Alert,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import { Title } from '../components/ui/Title';
import { NumberContainer } from '../components/game/NumberContainer';
import { PrimaryButton } from '../components/ui/PrimaryButton';
import { Card } from '../components/ui/Card';
import { InstructionText } from '../components/ui/InstructionText';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/colors';
import { GuessLogItem } from '../components/game/GuessLogItem';

interface GameScreenProps {
  userInput: number;
  onGameOver: (num: number) => void;
}

let minBoundary = 1;
let maxBoundary = 100;

const generateNumber = (min: number, max: number, exclude: number): number => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  return rndNum === exclude ? generateNumber(min, max, exclude) : rndNum;
};

export const GameScreen: FC<GameScreenProps> = ({ userInput, onGameOver }) => {
  const initialGuess = generateNumber(1, 100, userInput);
  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);
  const [guessRounds, setGuessRounds] = useState<number[]>([]);

  const { width, height } = useWindowDimensions();

  useEffect(() => {
    userInput === currentGuess && onGameOver(guessRounds.length);
  }, [userInput, currentGuess, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const nextGuessNumber = (direction: 'lower' | 'greater') => {
    if (
      (direction === 'lower' && currentGuess < userInput) ||
      (direction === 'greater' && currentGuess > userInput)
    ) {
      Alert.alert("Dont't lie!", 'You know that this is wrong... ', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
      return;
    }

    direction === 'lower'
      ? (maxBoundary = currentGuess)
      : (minBoundary = currentGuess);
    const newRndNumber = generateNumber(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRndNumber);
    setGuessRounds((state) => [newRndNumber, ...state]);
  };

  const guessRoundListLength = guessRounds.length;

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton handler={() => nextGuessNumber('greater')}>
              <Ionicons name='md-add' size={24} />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton handler={() => nextGuessNumber('lower')}>
              <Ionicons name='md-remove' size={24} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );

  if (width > 500) {
    content = (
      <>
        <View style={styles.buttonContainerWide}>
          <View style={styles.buttonContainer}>
            <PrimaryButton handler={() => nextGuessNumber('greater')}>
              <Ionicons name='md-add' size={24} />
            </PrimaryButton>
          </View>
          <NumberContainer>{currentGuess}</NumberContainer>
          <View style={styles.buttonContainer}>
            <PrimaryButton handler={() => nextGuessNumber('lower')}>
              <Ionicons name='md-remove' size={24} />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }

  return (
    <View style={styles.screen}>
      <Title text="Opponent's Guess" />
      {content}
      <View
        style={[styles.guessListContainer, width > 500 && { marginTop: 0 }]}
      >
        <FlatList
          keyExtractor={(item: number) => item.toString()}
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              item={itemData.item}
              roundNumber={guessRoundListLength - itemData.index}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
  },
  buttonsContainer: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    gap: 10,
  },
  buttonContainer: {
    flex: 1,
  },
  instructionText: {
    marginBottom: 12,
  },
  guessListContainer: {
    marginTop: 36,
    flex: 1,
    width: '100%',
  },
  buttonContainerWide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
