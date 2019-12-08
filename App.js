import * as React from 'react';
import { ScrollView, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  _onPressButton() {
    alert('You tapped the button!')
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Click on the color to see its name!
        </Text>
      <ScrollView>
      <TouchableOpacity style={{backgroundColor: 'aliceblue', padding: 80}}  onPress={()=> {
       alert('This is aliceblue');}}>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor: 'paleturquoise', padding: 80}}  onPress={()=> {
       alert('This is paleturquoise');}}>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor: 'powderblue', padding: 80}} onPress={()=> {
       alert('This is powderblue');}}>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor: 'lightblue', padding: 80}}  onPress={()=> {
       alert('This is lightblue');}}>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor: 'skyblue', padding: 80}}  onPress={()=> {
       alert('This is skyblue');}}>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor: 'cadetblue', padding: 80}}  onPress={()=> {
       alert('This is cadetblue');}}>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor: 'steelblue', padding: 80}}  onPress={()=> {
       alert('This is steelblue');}}>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: 'lightskyblue', padding: 80}}  onPress={()=> {
       alert('This is lightskyblue');}}>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor: 'deepskyblue', padding: 80}}  onPress={()=> {
       alert('This is deepskyblue');}}>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor: 'dodgerblue', padding: 80}}  onPress={()=> {
       alert('This is dodgerblue');}}>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor: 'cornflowerblue', padding: 80}}  onPress={()=> {
       alert('This is cornflowerblue');}}>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor: 'royalblue', padding: 80}}  onPress={()=> {
       alert('This is royalblue');}}>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor: 'darkblue', padding: 80}}  onPress={()=> {
       alert('This is darkblue');}}>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor: 'darkslateblue', padding: 80}}  onPress={()=> {
       alert('This is darkslateblue');}}>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor: 'lightsteelblue', padding: 80}}  onPress={()=> {
       alert('This is lightsteelblue');}}>
      </TouchableOpacity>

      </ScrollView>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
