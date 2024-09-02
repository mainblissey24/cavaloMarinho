
import { useContext } from "react";
import TemaContext, { TemaProvider } from "./src/context/TemaContext";
import { Provider, Surface, Text } from "react-native-paper";


export default function App() {

  return (
    <TemaProvider>
      <Provider
        theme={useContext(TemaContext).tema}
      >
        <HomeScreen />
      </Provider>
    </TemaProvider>
  );
}


function HomeScreen() {
  return (
    <Surface>
      <Text>Olá </Text>
    </Surface>
  )
}
