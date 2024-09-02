import { useContext } from "react";
import { Text } from "react-native";
import { View } from "react-native-web";

function SaudacaoMaster() {
  const usuario = useContext(UsuarioContext);
  return (
    <View>
      <Text>Olá {usuario}</Text>
      <SaudacaoPrimeira />
    </View>
  );
}
function SaudacaoPrimeira() {
  const { usuario } = useContext(UsuarioContext);
  return (
    <View>
      <Text>Seja bem vindx {usuario}</Text>
      <VejaSeuCarrinho />
    </View>
  );
}

function VejaSeuCarrinho() {
  const { setUsuario, usuario } = useContext(UsuarioContext);
  setUsuario("Juana Feliz");
  return (
    <View>
      <Text>Seu carrinho está vazio {usuario}</Text>
    </View>
  );
}

export default { SaudacaoPrimeira, VejaSeuCarrinho, SaudacaoMaster };
