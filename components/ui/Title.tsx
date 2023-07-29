import { FC } from 'react';
import { StyleSheet, Text } from 'react-native';

interface TitleProps {
  text: string;
}

export const Title: FC<TitleProps> = ({ text }) => {
  return <Text style={styles.title}>{text}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#fff',
    padding: 10,
  },
});
