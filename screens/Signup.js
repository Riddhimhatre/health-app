import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  TextInput,
  TouchableHighlight,
} from 'react-native';

const Signup = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode
      ? styles.backgroundColorTheme.dark
      : styles.backgroundColorTheme.light,
  };
  const textColorStyle = {
    color: isDarkMode ? styles.textColor.light : styles.textColor.dark,
  };
  const containerBackgroundStyle = {
    backgroundColor: isDarkMode
      ? styles.containerSignupColor.dark
      : styles.containerSignupColor.light,
  };
  const containerTextColor = {
    color: isDarkMode
      ? styles.containerSignupColor.light
      : styles.textColor.light,
  };
  const buttonBackgroundColor = {
    backgroundColor: isDarkMode ? '#DDDDDD' : styles.backgroundColorTheme.dark,
  };

  const [name, setName] = useState('');
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const onPressHandler = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={[styles.viewBody, backgroundStyle]}>
      <View style={styles.viewTitleRow}>
        <Text style={[textColorStyle, styles.textTitle]}>Health App</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={[textColorStyle, styles.textLogin]}>SIGN UP</Text>
      </View>
      <View style={[styles.containerSignup, containerBackgroundStyle]}>
        <TextInput
          style={styles.textInput}
          onChangeText={setName}
          value={name}
          placeholder="Name"
          color={isDarkMode ? '#d3d8dd' : '#00155F'}
          underlineColorAndroid="#FFFFFF"
          placeholderTextColor={isDarkMode ? '#d3d8dd' : '#00155F'}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={setUser}
          value={user}
          placeholder="Email"
          color={isDarkMode ? '#d3d8dd' : '#00155F'}
          underlineColorAndroid="#FFFFFF"
          placeholderTextColor={isDarkMode ? '#d3d8dd' : '#00155F'}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          color={isDarkMode ? '#d3d8dd' : '#00155F'}
          underlineColorAndroid="#FFFFFF"
          placeholderTextColor={isDarkMode ? '#d3d8dd' : '#00155F'}
          secureTextEntry
        />
        <View style={[styles.viewButtonSignup]}>
          <TouchableHighlight
            activeOpacity={0.6}
            onPress={() => alert('Signup Pressed!')}>
            <View style={[styles.viewTouchableSignup, buttonBackgroundColor]}>
              <Text style={[styles.textTouchable, containerTextColor]}>
                Sign Up
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
      <View style={styles.viewAlternateSignup}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Text style={[styles.textAlternateSignup, textColorStyle]}>OR</Text>
          <Text style={[styles.textAlternateSignup, textColorStyle]}>
            Google+
          </Text>
          <TouchableHighlight onPress={onPressHandler}>
            <Text style={[styles.textAlternateSignup, {color: '#F79700'}]}>
              Already have an account? Login!
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
  },
  viewTitleRow: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  containerSignup: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    margin: 40,
  },
  viewButtonSignup: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 30,
  },
  viewTouchableSignup: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
    padding: 10,
    width: 180,
  },
  viewAlternateSignup: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 2,
  },
  textInput: {
    width: 250,
    margin: 12,
    padding: 10,
  },
  textLogin: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  textTouchable: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textAlternateSignup: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  textColor: {
    dark: '#000000',
    light: '#FFFFFF',
  },
  backgroundColorTheme: {
    dark: '#00155F',
    light: '#f0f0ed',
  },
  containerSignupColor: {
    dark: '#5C6DFF',
    light: '#f79700',
  },
});

export default Signup;
