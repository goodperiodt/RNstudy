import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View>
        {/* 사용자로부터 내용을 입력받으려면 */}
        <TextInput placeholder='할 일을 입력하세요!' />
        <Button title='할 일 추가하기' />
      </View>
      <View>
        {/* react native는 style방식을 지정하는 css를 지원하지 않는다. */}
        <Text style={{ margin: 16 }}>할 일 목록들...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: { padding: 50 },
});
