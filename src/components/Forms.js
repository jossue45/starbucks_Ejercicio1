import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import colors from '../utils/colors';
export default function Form(props) {
  const { setTamaño, setTipo, setPago, setCantidad } = props;
  return (
    <View style={styles.viewForm}>
    <View style={styles.viewInputs}>
        <TextInput
          placeholder="Cantidad"
          keyboardType="numeric"
          style={styles.input}
          onChange={(e) => setCantidad(e.nativeEvent.text)}
        />
      </View>
      <RNPickerSelect
        style={picketSelectStyles}
        onValueChange={(value) => setTamaño(value)}
        placeholder={{
          label: 'Seleccione tamaño de café',
          value: null,
        }}
        items={[
          { label: 'Short 8 onz. $1.00', value: 1.00 },
          { label: 'Tall 12 onz $1.50', value: 1.50 },
          { label: 'Grande 16 onz $2.00', value: 2.00 },
        ]}
      />
      <RNPickerSelect
        style={picketSelectStyles}
        onValueChange={(value) => setTipo(value)}
        placeholder={{
          label: 'Seleccione tipo de café',
          value: null,
        }}
        items={[
          { label: 'Mocha $2.00', value: 2.00 },
          { label: 'Te chai $2.50', value: 2.50 },
          { label: 'Americano $1.50', value: 1.50},
          { label: 'Frapper $3.00', value: 3.00 },
        ]}
      />
      <RNPickerSelect
        style={picketSelectStyles}
        onValueChange={(value) => setPago(value)}
        placeholder={{
          label: 'Seleccione tipo de pago',
          value: null,
        }}
        items={[
          { label: 'Efectivo (15% descuento)', value: 15 },
          { label: 'Tarjeta de credito (5% descuento)', value: 5 },
        ]}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  viewForm: {
    position: 'absolute',
    bottom: 0,
    width: '85%',
    paddingHorizontal: 50,
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    borderRadius: 30,
    marginBottom: 3,
    height: 250,
    justifyContent: 'center',
  },
  viewInputs: {
    flexDirection: 'row',
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
    borderRadius: 5,
    width: '60%',
    marginRight: 5,
    marginLeft: -5,
    marginBottom: 10,
    color: '#000',
    paddingHorizontal: 20,
  },
});
const picketSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
    backgroundColor: '#fff',
    marginLeft: -5,
    marginRight: -5,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
    backgroundColor: '#fff',
    marginBottom: 4,
  },
});
