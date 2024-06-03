import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
// 구조는 react와 동일하지만, return 부분에 <div>가 아닌 <View>로 작성해야 한다.
//                 props
const GoalItem = ({ text, id, onDeleteItem }) => {
  return (
    // View는 단순영역만을 나타낼 뿐, 클릭이 안된다.
    // 그래서 클릭을 받아줄 수 있는 태그인 <Pressable>로 View를 감싸주어야 한다.
    // ** onDeleteItem(id) --> () => onDeleteItem(id) 로 바꾸니 작동됨.
    <View style={styles.goalItem}>
      <Pressable
        // Pressable 태그의 위치에 따라 시각적 피드백이 적용되는 범위가 다르다.
        // Pressable 컴포넌트 조건부 스타일 렌더링
        // press 이벤트가 발생할 때마다 style 적용을 위해 전달한 함수를 호출.
        // pressData로 이벤트 관련 정보 전달.
        // 현재 이벤트가 pressed된 것이 맞다면 styles.pressedItem을 적용하겠다.
        // (ios에서 press 이벤트 스타일 처리 방식)
        style={(pressData) => pressData.pressed && styles.pressedItem}
        android_ripple={{ color: 'white' }}
        onPress={() => onDeleteItem(id)}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};
export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
