import React, { useState } from 'react';
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

const GoalInput = ({ onAddGoal, onCancel, visible }) => {
  // 입력창의 상태를 관리하는 변수를 React에서 사용하는 useState 훅을 활용하여 선언.
  const [enteredGoalText, setEnteredGoalText] = useState('');

  // 사용자가 내용을 입력할 때 해당 입력값을 가져오는 함수
  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  };

  return (
    // Modal 컴포넌트의 속성 visible의 값이 false면 숨겨질 것이고,
    // true면 나타날 것이다. 굳이 조건부 렌더링을 사용할 필요없이
    // 속성을 사용한다.
    <Modal visible={visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/goal.png')} />

        <TextInput
          style={styles.textInput}
          placeholder='할 일을 입력하세요!'
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title='할 일 추가하기'
              onPress={addGoalHandler}
              color='#b180f0'
            />
          </View>
          <View style={styles.button}>
            <Button title='취소' color='#f31282' onPress={onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
  },
  image: {
    width: 150,
    height: 150,
    margin: 20,
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    padding: 16,
  },

  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },

  button: {
    width: '30%',
    marginHorizontal: 8,
  },
});
