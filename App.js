import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  // 입력창의 상태를 관리하는 변수를 React에서 사용하는 useState 훅을 활용하여 선언.
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [todoGoals, setTodoGoals] = useState([]);
  // 사용자가 내용을 입력할 때 해당 입력값을 가져오는 함수
  // 매개 값으로 입력된 텍스트가 바로 전달된다.
  const goalInputHandler = (enteredText) => {
    // console.log(enteredText);
    setEnteredGoalText(enteredText);
  };

  // 추가 버튼을 누르면 할 일 목록을 추가하는 함수
  const addGoalHandler = () => {
    // console.log(enteredGoalText);
    // useState setter 메서드의 스냅샷 방식
    // 콜백 함수의 매개값은 해당 상태 변수의 최신 값이 전달됨.
    console.log('addGoalHandler 작동함');
    console.log(enteredGoalText);
    setTodoGoals((currentTodoGoals) => [
      ...currentTodoGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
  };

  console.log(todoGoals);

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='할 일을 입력하세요!'
          onChangeText={goalInputHandler}
        />
        <Button title='할 일 추가하기' onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {todoGoals.map((goal) => (
          <View key={goal.key} style={styles.goalItem}>
            <Text style={styles.goalText}>{goal.text}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    // flex --> flex grow, 차지해야할 영역
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16, // 좌우 패딩 값 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1, // border의 굵기
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 4,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRaidus: 6,
    boackgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
  },
});
