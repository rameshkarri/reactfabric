import React from 'react';
import ReactDOM from 'react-dom';

import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class EditableTable extends React.Component {
  render() {
    const cellEditProps = {
      mode: 'click'
    };
    
           var products = [{ id: 1, name: "Thailand", price: "300" }, { id: 2, name: "India", price:"400" },{ id: 3, name: "Dubai", price:"600" }]
           
        
    return (
      <BootstrapTable data={ products } cellEdit={ cellEditProps }>
          <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price' editColumnClassName='class-for-editing-cell'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
export default EditableTable;