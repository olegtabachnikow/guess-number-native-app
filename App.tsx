import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StartGameScreen } from './screens/StartGameScreen';
import { GameScreen } from './screens/GameScreen';
import { GameOver } from './screens/GameOver';
import { useState } from 'react';
import Colors from './constants/colors';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [userNumber, setUserNumber] = useState<number | undefined>();
  const [gameIsOver, setGameIsOver] = useState<boolean>(false);
  const [guessRounds, setGuessRounds] = useState<number>(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function pickedNumberHandler(pickedNumber: number) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function handleGameOver(number: number) {
    setGameIsOver(true);
    setGuessRounds(number);
  }

  function handleStartNewGame() {
    setUserNumber(undefined);
    setGuessRounds(0);
  }

  const image = './assets/background.png';
  let screen = <StartGameScreen onSetUserNumber={pickedNumberHandler} />;

  if (!!userNumber && userNumber >= 0) {
    screen = <GameScreen userInput={userNumber} onGameOver={handleGameOver} />;
  }
  if (gameIsOver && userNumber) {
    screen = (
      <GameOver
        userNumber={userNumber}
        onStartNewGame={handleStartNewGame}
        roundsNumber={guessRounds}
      />
    );
  }

  return (
    <>
      <StatusBar style='light' />
      <LinearGradient
        colors={[Colors.primary800, Colors.accent500]}
        style={styles.rootScreen}
      >
        <ImageBackground
          resizeMode='cover'
          imageStyle={styles.imageBackground}
          style={styles.rootScreen}
          source={require(image)}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 100,
  },
  imageBackground: {
    opacity: 0.15,
  },
});
