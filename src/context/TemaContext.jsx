import { createContext, useState } from "react";
import { DefaultTheme, MD3DarkTheme } from "react-native-paper";


// é esse cara que eu exporto 
// porque é ele o responsável por criar o contexto
// e o que é exportado é o contexto
const TemaContext = createContext();

export function TemaProvider({ children }) {
  const [tema, setTema] = useState(DefaultTheme);

  function alterarTema() {
    // Se o tema atual estiver marcado como DefaultTheme 
    // então é hora de altera-lo para MD3DarkTheme
    // Mas se ele já é MD3DarkTheme então é hora de 
    // voltar para DefaultTheme
    setTema(tema === DefaultTheme ? MD3DarkTheme : DefaultTheme);
  }
  return(
    <TemaContext.Provider value={{ tema, alterarTema }}>
        {children}
    </TemaContext.Provider>
  )
}

export default TemaContext;