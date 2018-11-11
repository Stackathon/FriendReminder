import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const friends = [
  {name: 'Michael Jackson', phone: '123', response: 'Yes'},
  {name: 'Ay-Nur', phone: '321', response: 'No'},
  {name: 'Connie', phone: '111', response: 'Yes'},
  {name: 'Beyonce', phone: '222', response: 'Maybe'},
  {name: 'Rihanna', phone: '333', response: 'Yes'},
];

export default class SelectFilterWithDefaultValue extends React.Component {
  render() {
    return (
      <BootstrapTable data={ friends }>
          <TableHeaderColumn dataField='name' isKey={ true }>Name</TableHeaderColumn>
          <TableHeaderColumn dataField='phone'>Phone</TableHeaderColumn>        
          <TableHeaderColumn 
            dataField='response' filter={ { type: 'TextFilter', defaultValue: ' ' } }>
            Friend Responses
          </TableHeaderColumn>
      </BootstrapTable>
    );
  }
}