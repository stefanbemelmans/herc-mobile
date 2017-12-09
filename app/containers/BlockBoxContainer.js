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
import BlockBox from '../components/BlockBox.js'
import styled from 'styled-components/native'
// a container signals outwards for data and sends it inwards to its constituent presentational component(s)

// requirements:
//  web3
export default class BlockBoxContainer extends Component {
  constructor (props) {
    super(props)
    this.setState({ data: {} })
  }
  // Scan every block for Herc TX's
  // When found a block w/ Herc TX's
  // Render Block # and who mined
  // scanning blocks for HERC txs
  // going to need a DB for record of herc tx's
  // tx found => push to db, update global herc UI's
  // either client polls to centralized DB or each client polls the blockchain
  // Poll the blockchain for any changes to the smart contract address that has the herc tokens. Last 10 tx's.
  // filtering and ordering from time metric? probably
  // use mock data for herc tx's

  // poll => smart contract => information about current state of transactions
  //  log elements of current state,
  //  transaction, transaction miner
  render () {
    let { blockData, txData } = filterData(this.state.data)

    return (
      <View>
        <BlockBox data={blockData} title="Blocks" />
        <BlockBox data={txData} title="Transactions" />
      </View>
    )
  }

  componentWillMount () {
    pollBlockChain()
  }

  pollBlockChain () {
    setInterval(async () => {
      try {
        const data = await fetch('bChainAPI')
      } catch (error) {
        console.error(error)
      }
      this.setState({ data })
    }, 1500)
  }
  // filterData (data) {
  //   // block data = block hash that transaction was found in, used for pulling
  //   //
  //   return {
  //     blockData,
  //     txData
  //   }
  // }
}
// NOT a general ethereum block explorer!
