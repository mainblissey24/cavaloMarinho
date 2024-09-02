import React, { useContext } from "react";
import { Button } from "react-native-paper";
import { TemaContext } from "../context/TemaContext"; 

export default function TrocaTema() {
  const { alterarTema } = useContext(TemaContext);
  return <Button onPress={alterarTema}>Trocar Tema</Button>;
}