import React, {useState} from 'react';
import {Text, View, Image, TextInput, ScrollView} from 'react-native';
import CustomButton from './js/component/common/CustomButton';
import {
  multiply,
  add,
  getPrime,
  getFibonacci,
  isNumeric,
} from './js/helper/formula';
import {colors} from './js/styles/default';
import styles from './js/styles/app';
const buttons = [
  'Multiply X & Y',
  'Sum X & Y',
  'First N Prime',
  'First N Fibonacci',
];
const App = () => {
  const [value, setValue] = useState(null);
  const [result, setResult] = useState(null);
  const [errMsg, setErrMsg] = useState(null);
  const [resultTitle, setResultTitle] = useState(null);
  const [button, setButton] = useState(null);

  const validate = button => {
    if (!value) {
      setErrMsg(`You haven't input any number!`);
      return false;
    } else {
      let inputArr = value.trim().split(',');

      if (button == 'First N Prime' || button == 'First N Fibonacci') {
        if (!isNumeric(inputArr[0])) {
          setErrMsg(`Please input Number!`);
          return false;
        }
        if (inputArr.length > 1) {
          setErrMsg(`Please input positive number!`);
          return false;
        }
      } else {
        if (inputArr.length == 1 || inputArr.length > 2) {
          setErrMsg(`Please input 2 numbers separated by coma(,)!`);
          return false;
        }
        if (!isNumeric(inputArr[0]) || !isNumeric(inputArr[1])) {
          setErrMsg(`Please input Number than String!`);
          return false;
        }
      }
    }
    return true;
  };

  const calculate = button => {
    setResult(null);
    setErrMsg(null);
    if (validate(button)) {
      setButton(button);
      let input = value.trim().split(',');
      if (button.toLowerCase().includes('multiply')) {
        setResult(multiply(input[0], input[1]));
        setResultTitle(
          `Here's the result  multiply ${input[0]} and ${input[1]} is:`,
        );
      }
      if (button.toLowerCase().includes('sum')) {
        setResult(add(Number(input[0]), Number(input[1])));
        setResultTitle(
          `Here's the result  sum ${input[0]} and ${input[1]} is:`,
        );
      }
      if (button.toLowerCase().includes('prime')) {
        setResult(getPrime(Number(input[0])));
        setResultTitle(
          `Here's the result  first N(${input[0]}) Prime numbers are:`,
        );
      }
      if (button.toLowerCase().includes('fibonacci')) {
        setResult(getFibonacci(Number(input[0])));
        setResultTitle(
          `Here's the result  first N(${input[0]}) Fibonacci sequence are:`,
        );
      }
    }
  };

  const renderButtons = buttons.map((button, i) => (
    <CustomButton
      key={i}
      title={button}
      onPressButton={() => calculate(button)}
    />
  ));
  return (
    <View style={styles.container}>
      <View style={[styles.titleContainer]}>
        <Image
          style={styles.logo}
          source={require('./js/assets/okadoc_logo.png')}
        />
        <Text style={styles.title}>Technical Test</Text>
      </View>
      <View style={[styles.inputContainer, {justifyContent: 'flex-end'}]}>
        {result && (
          <View style={[styles.resultContainer]}>
            <Text style={styles.resultTitle}>{resultTitle}</Text>
            <ScrollView>
              <Text
                style={[
                  styles.resultText,
                  {
                    color:
                      button == 'Multiply X & Y'
                        ? colors.green
                        : button == 'Sum X & Y'
                        ? colors.blue
                        : button == 'First N Prime'
                        ? colors.orange
                        : colors.red,
                    fontSize:
                      button == 'Multiply X & Y' || button == 'Sum X & Y'
                        ? 100
                        : 20,
                  },
                ]}>
                {result}
              </Text>
            </ScrollView>
          </View>
        )}
        {!errMsg && !result && (
          <View style={styles.doctorContainer}>
            <Image
              style={styles.doctor}
              source={require('./js/assets/doctor.png')}
            />
          </View>
        )}
        {errMsg && (
          <View style={[styles.resultContainer]}>
            <Text style={styles.errorText}>{errMsg}</Text>
          </View>
        )}
        <TextInput
          placeholder="Please input your number..."
          style={styles.input}
          value={value}
          onChangeText={value => {
            setValue(value);
            setErrMsg(null);
            setResult(null);
          }}
        />
      </View>
      <View style={styles.buttonContainer}>{renderButtons}</View>
    </View>
  );
};

export default App;
