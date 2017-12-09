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

import BlockCell from './BCell'

function injectCells (data = []) {
  return data.map((i, idx) => <BlockCell message={i} key={idx} />)
}

const BlockBox = ({ title, data }) => {
  return (
    <BlockBoxView>
      <BlockBoxTitle>{title}</BlockBoxTitle>
      <CellView>{injectCells(data)}</CellView>
    </BlockBoxView>
  )
}

const BlockBoxView = styled.View`
  margin: 20px;
  width: 300px;
  height: 250px;
  border: 1px solid #e8ce3f;
`

const BlockBoxTitle = styled.Text`
  color: #e8ce3f;
  font-size: 20px;
  text-align: center;
`

const CellView = styled.View`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export default BlockBox
