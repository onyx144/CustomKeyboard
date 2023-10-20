import React, { useState, useRef  , useEffect } from 'react';
import { View, TouchableWithoutFeedback , BackHandler , Text , StyleSheet , TouchableOpacity, Button , Keyboard  , TextInput, Platform, UIManager, findNodeHandle } from 'react-native';

const CustomKeyboard = () => {
  const [text, setText] = useState('');
  const [vision, setVision] = useState(false);
  const [select , setSelect] = useState({"end": 0, "start": 0});
  const textInputRef = useRef(null);
  const handleTextChange = (newText) => {
    setText(newText);
  };
  const handleFocus = () => {
    setVision(true);
    
  };

  useEffect(() => {
    Keyboard.dismiss();
    const backAction = () => {
        setVision(false);
        return true;
      };
  
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction
      );
  
    return () => backHandler.remove();
  }, []);
  const handleBlur = () => {
    setVision(false);
  };
  const handleSelection = (e) => {
    console.log(e.nativeEvent.selection);
    setSelect(e.nativeEvent.selection);
  };

  const handlePress = ( value ) => {
    let newValue = value;
    if(value === '<-') {
       newValue = text.slice(0, select.start-1) + text.slice(select.end);
       setSelect({"end" : select.end - 1 , "start" : select.start - 1});

      }
    else { 
      newValue = text.slice(0, select.start) + value + text.slice(select.end);
      setSelect({"end" : select.end + 1 , "start" : select.start + 1});
    }
     setText(newValue);
  };
  const CustomButton = ({ title, onPress }) => (
    <TouchableOpacity
      style={{
        flex: 1, // Равномерное распределение пространства
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'gray',
      }}
      onPress={onPress}
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  );
  return (
    <TouchableOpacity activeOpacity={1} onPress={() => setVision(false)} style={styles.container}>
        <TextInput
          selection={select}
          ref={textInputRef}
          style={styles.textInput}
          showSoftInputOnFocus={false}
          value={text}
          onPressIn={handleFocus}
          onFocus={handleFocus}
          onSelectionChange={handleSelection}
          onChangeText={handleTextChange}
        />
{vision && 
     <View style={styles.keyboardContainer}>
      <View style={{ flexDirection: 'row' , flex: 4 , minWidth: '100%'}}>
        <CustomButton title="1" onPress={() => handlePress('1')} />
        <CustomButton title="2" onPress={() => handlePress('2')} />
        <CustomButton title="3" onPress={() => handlePress('3')} />
        <CustomButton title="4" onPress={() => handlePress('4')} />
        <CustomButton title="5" onPress={() => handlePress('5')} />
        <CustomButton title="6" onPress={() => handlePress('6')} />
        <CustomButton title="7" onPress={() => handlePress('7')} />
        <CustomButton title="8" onPress={() => handlePress('8')} />
        <CustomButton title="9" onPress={() => handlePress('9')} />
        <CustomButton title="0" onPress={() => handlePress('0')} />
        </View>
        <View style={{ flexDirection: 'row' , flex: 4 , minWidth: '100%'}}>
        <CustomButton title="a" onPress={() => handlePress('a')} />
        <CustomButton title="b" onPress={() => handlePress('b')} />
        <CustomButton title="c" onPress={() => handlePress('c')} />
        <CustomButton title="d" onPress={() => handlePress('d')} />
        <CustomButton title="e" onPress={() => handlePress('e')} />
        <CustomButton title="f" onPress={() => handlePress('f')} />
        <CustomButton title="h" onPress={() => handlePress('h')} />
        <CustomButton title="i" onPress={() => handlePress('i')} />
        <CustomButton title="j" onPress={() => handlePress('j')} />
        <CustomButton title="k" onPress={() => handlePress('k')} />
        </View>
        <View style={{ flexDirection: 'row' , flex: 4 , minWidth: '100%'}}>
        <CustomButton title="l" onPress={() => handlePress('l')} />
        <CustomButton title="m" onPress={() => handlePress('m')} />
        <CustomButton title="n" onPress={() => handlePress('n')} />
        <CustomButton title="o" onPress={() => handlePress('o')} />
        <CustomButton title="p" onPress={() => handlePress('p')} />
        <CustomButton title="q" onPress={() => handlePress('q')} />
        <CustomButton title="r" onPress={() => handlePress('r')} />
        <CustomButton title="s" onPress={() => handlePress('s')} />
        <CustomButton title="t" onPress={() => handlePress('t')} />
        <CustomButton title="u" onPress={() => handlePress('u')} />
        </View>
        <View style={{ flexDirection: 'row' , flex: 4 , minWidth: '100%'}}>
        <CustomButton title="." onPress={() => handlePress('.')} />
        <CustomButton title="v" onPress={() => handlePress('v')} />
        <CustomButton title="w" onPress={() => handlePress('w')} />
        <CustomButton title="x" onPress={() => handlePress('x')} />
        <CustomButton title="y" onPress={() => handlePress('y')} />
        <CustomButton title="z" onPress={() => handlePress('z')} />
        <CustomButton title="<-" onPress={() => handlePress('<-')} />
        </View>
        <View style={{ flexDirection: 'row' , flex: 4 , minWidth: '100%'}}>
        <CustomButton title=" " onPress={() => handlePress(' ')} />
        </View>

      </View> }
    </TouchableOpacity>

  );
};

const styles = StyleSheet.create({
  keyboardContainer: {
    position: 'absolute',
    minWidth: '100%',
    bottom: 0,
    display: 'flex',
    flex: 1,
  },
  textInput: {
    backgroundColor: '#fff',
    borderColor:"#000",
    border:'1px solid',
    padding: 10,
    width: '90%',
    borderRadius: 10,
  },
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
});  

export default CustomKeyboard;
