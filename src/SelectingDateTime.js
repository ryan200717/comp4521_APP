/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from 'moment';

export default class SelectingDateTime extends Component {
  constructor() {
    super()
    this.state = {
      isVisible: false,
      selectedDateTime: 'Click here for select time and data'
    }
  }

  handlePicker = (datetime) => {
    this.setState({
      isVisible: false,
      selectedDateTime: moment(datetime).format('DD/MM/YYYY, HH:00')
    })
  }
  showPicker = () => {
    this.setState({
      isVisible: true
    })
  }

  hidePicker = () => {
    this.setState({
      isVisible: false
    })
  }
  render() {
    return (


      <SafeAreaView>
        <ScrollView>

          <TouchableOpacity onPress={this.showPicker} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20, color:'#00c' }}>
              {this.state.selectedDateTime}
            </Text>
          </TouchableOpacity>

          <View style={{ flexDirection: 'row' }}>

            <View style={styles.boxOfButton}>
              <TouchableOpacity style={styles.checkButton} onPress = { () => { alert("Check Button pressed!")} }>
                <Text style={{ fontSize: 30, color: '#fff', textAlign: 'center' }}>
                  Check
            </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.boxOfButton}>
              <TouchableOpacity style={styles.checkButton} onPress = { () => {alert("Book Button pressed!")} }>
                <Text style={{ fontSize: 30, color: '#fff', textAlign: 'center' }}>
                  Book
            </Text>
              </TouchableOpacity>
            </View>
          </View>

          <DateTimePicker
            isVisible={this.state.isVisible}
            onConfirm={this.handlePicker}
            onCancel={this.hidePicker}
            mode={'datetime'}
            is24Hour={true}
            display="spinner"
            
          />


        </ScrollView>
      </SafeAreaView>

    );
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  boxOfButton: {
    marginTop:10,
    width: '50%',
    height: 40,

  },
  checkButton: {
    width:'60%',
    alignItems: 'center',
    backgroundColor:'#888',
    borderRadius: 5,
    marginLeft:45
  }


});

