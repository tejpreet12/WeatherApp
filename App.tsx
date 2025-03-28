import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import Navigation from "./src/navigation";
import { Provider } from "react-redux";
import { store } from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <Navigation />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
