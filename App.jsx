/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React , { useState, useRef } from 'react';
import CustomKeyboard from './component/Keyboard';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Keyboard,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';




function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [text, setText] = useState('');
  const [vision, setVision] = useState(false);
  const textInputRef = useRef<TextInput>(null);

  const handleTextChange = (newText) => {
    setText(newText);
  };
  const handleFocus = () => {
    setVision(true);
    Keyboard.dismiss()
  };
  
  const handleBlur = () => {
    setVision(false);
  };


  return (
    <SafeAreaView style={styles.container}>
        <CustomKeyboard/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  container: {
   height: '100%',
   width: '100%',
   backgroundColor: '#ccc'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
