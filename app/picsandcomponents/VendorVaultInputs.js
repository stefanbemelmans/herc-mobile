import React, {Component} from "react";

export default class VendorVaultInputs extends Component {
  constructor(props) {
     super(props);
  };

  render() {
    return(
      <div className="items">
      
        <input className="vendorInput" type="text" placeholder="Purity" />
        <input className="vendorInput" type="text" placeholder="Manufacturer" />
        <input className="vendorInput" type="text" placeholder="Dealer" />
        <input className="vendorInput" type="text" placeholder="Gross Weight" />
        <input className="vendorInput" type="text" placeholder="Assay Fineness" />
        <input className="vendorInput" type="text" placeholder="Serial Number" />
        <input className="vendorInput" type="text" placeholder="AGID" />
        <input className="vendorInput" type="text" placeholder="RFID" />
        <input className="vendorInput" type="text" placeholder="Certified Individual Identifier" />
    </div>
    )
  }

}