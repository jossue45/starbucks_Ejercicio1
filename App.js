import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from 'react-native';
import colors from './src/utils/colors';
import Forms from './src/components/Forms';
import Footer from './src/components/Footer';
import Result from './src/components/Result';
export default function App() {
  const [cantidad, setCantidad] = useState(null);
  const [tamaño, setTamaño] = useState(null);
  const [pago, setPago] = useState(null);
  const [tipo, setTipo] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  useEffect(() => {
    if (cantidad && tamaño && pago && tipo) calculate();
    else reset();
  }, [cantidad, tamaño, pago, tipo]);
  const calculate = () => {
    reset();
    if (!cantidad) {
      setErrorMessage('Añade la cantidad que quieres solicitar');
    } else if (!tamaño) {
      setErrorMessage('Añade el tamaño de tu cafe');
    } else if (!pago) {
      setErrorMessage('Añade la forma de pago');
    } else if (!tipo) {
      setErrorMessage('Añade el tipo de tu cafe');
    } else {
      const i = pago / 100;
      const fee = ((tamaño + tipo) * cantidad) * i;
      setTotal({
        monthlyFee: fee.toFixed(3).replace('.', ','),
        totalPayable: ((tamaño + tipo) * cantidad - fee).toFixed(2).replace('.', ','),
      });
    }
  };
  const reset = () => {
    setErrorMessage('');
    setTotal(null);
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.Header}>
        <Text style={styles.HeadApp}>:v CHIVO STARBUCKS :v</Text>
        <Forms
          setTamaño={setTamaño}
          setTipo={setTipo}
          setPago={setPago}
          setCantidad={setCantidad}
        />
      </SafeAreaView>
      <Result
        cantidad={cantidad}
        tamaño={tamaño}
        tipo={tipo}
        pago={pago}
        total={total}
        errorMessage={errorMessage}
      />
      <View>
        <Text></Text>
      </View>
      <Footer></Footer>
      <View>
        <Text></Text>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  Header: {
    backgroundColor: 'black',
    height: 300,
    alignItems: 'center',
  },
  HeadApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
  },
});
