import React, { Component } from 'react'
import {
  ActivityIndicator,
  AppRegistry,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  TextInput,
  View
} from 'react-native'
import { Cell, Section, TableView } from 'react-native-tableview-simple'
import styled from 'styled-components/native'

// BCells need to process the data
const BCell = ({ message }) => (
  <SView>
    <Text>{message}</Text>
  </SView>
)

const SView = styled.View`
  margin: 7px;
  width: 100%;
  height: 20px;
  border: 1px dotted #e8ce3f;
`

const Text = styled.Text`
  color: #e8ce3f;
  font-size: 12px;
  text-align: center;
`

export default BCell
