import React, { Component } from 'react';
import PropTypes from 'prop-types';
import sc as 'styled-components'

const BlockBox = () => {
  console.log(sc);
}
 
export default BlockBox;
class BlockTxView extends Component {
  render() {
    BlockBox()
    return <div />;
  }
}

BlockTxView.propTypes = {};

export default BlockTxView;
