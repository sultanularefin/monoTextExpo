import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import {MonoText} from "../components/StyledText";

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Analyzer</Text>




      <View
          style={{
            borderRadius: 3,
            paddingHorizontal: 4,
            marginVertical: 7,

            }}
          darkColor="rgba(255,255,255,0.05)"
          lightColor="rgba(0,0,0,0.05)">
        <MonoText>Select Filters to Generate Report</MonoText>
      </View>




      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/ModalScreen.tsx" />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    // alignItems: "center",
    // flex:1,
    // flexDirection: "row",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
