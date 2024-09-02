import React, { useContext } from 'react';
import { Surface, Text } from 'react-native-paper';
import styles from '../config/style';
import TrocaTema from './TrocaTema';
import { TemaContext } from '../context/TemaContext';

export default function HomeScreen() {
  const { tema } = useContext(TemaContext);

  return (
    <Surface style={styles.container}>
      <Text>Clique abaixo para trocar o tema</Text>
      <TrocaTema />
    </Surface>
  );
}