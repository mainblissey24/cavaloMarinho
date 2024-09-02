import React, { useContext } from 'react';
import { Surface, Text } from 'react-native-paper';
import styles from '../config/styles';
import TrocaTema from './TrocaTema';
import { TemaContext } from '../context/TemaContext';

export default function HomeScreen() {
  const { tema } = useContext(TemaContext);

  return (
    <Surface style={styles.container}>
      <Text>Olá</Text>
      <TrocaTema />
    </Surface>
  );
}