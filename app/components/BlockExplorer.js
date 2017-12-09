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
import BlockBoxContainer from '../containers/BlockBoxContainer'

const anthemGold = '#e8ce3f'
const loganBlue = '#02172c'

const BlockExplorer = styled.View`
border: 3px solid ${anthemGold};
height: 100%
width: 100%
display: flex;
justify-content: center;
align-items: center;
background-color: ${loganBlue};
`

const BlockExplorerView = () => (
  <BlockExplorer>
    {/* Header */}
    <BlockBoxContainer />
  </BlockExplorer>
)
