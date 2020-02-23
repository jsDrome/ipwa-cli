import React from "react";
import { StyleSheet, View, Text } from "react-native";

function App() {
  return (
    <View style={styles.app}>
      <Text>Hello, World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    height: '100vh',
  },
});

export default App;
