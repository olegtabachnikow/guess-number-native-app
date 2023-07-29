import { FC, useState } from 'react';
import { View, TextInput, StyleSheet, Alert } from 'react-native';
import { PrimaryButton } from '../components/ui/PrimaryButton';
import Colors from '../constants/colors';
import { Title } from '../components/ui/Title';
import { Card } from '../components/ui/Card';
import { InstructionText } from '../components/ui/InstructionText';

interface StartGameScreenProps {
  onSetUserNumber: (pickedNumber: number) => void;
}

export const StartGameScreen: FC<StartGameScreenProps> = ({
  onSetUserNumber,
}) => {
  const [value, setValue] = useState<string>('');
  const submitEnteredValue = (value: string): void => {
    const numericValue = parseInt(value);
    if (isNaN(numericValue) || numericValue <= 0) {
      Alert.alert('Invalid number!', 'Number should be between 0 and 99!', [
        { style: 'destructive', text: 'Okay' },
      ]);
      return;
    }
    onSetUserNumber(numericValue);
  };
  return (
    <View style={styles.rootContainer}>
      <Title text='Guess my number!' />
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          onChangeText={setValue}
          value={value}
          maxLength={2}
          blurOnSubmit
          inputMode='numeric'
          keyboardType='number-pad'
          style={styles.input}
          autoCorrect={false}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton handler={() => setValue('')}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton handler={() => submitEnteredValue(value)}>
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
    padding: 24,
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 32,
    height: 50,
    width: 80,
    textAlign: 'center',
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  buttonContainer: {
    flex: 1,
  },
});
