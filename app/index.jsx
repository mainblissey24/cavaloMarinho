
import React, { useContext } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { TemaProvider, TemaContext } from '../src/context/TemaContext';
import HomeScreen from '../src/components/HomeScreen';

export default function App() {
  return (
    <TemaProvider>
      <ThemedApp />
    </TemaProvider>
  );
}

function ThemedApp() {
  const { tema } = useContext(TemaContext);

  return (
    <PaperProvider theme={tema}>
      <HomeScreen />
    </PaperProvider>
  );
}