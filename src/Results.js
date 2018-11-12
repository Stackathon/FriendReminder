import React from 'react';
import axios from 'axios'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

// const friends = [
//   {name: 'Michael Jackson', phone: '123', response: 'Yes'},
//   {name: 'Ay-Nur', phone: '321', response: 'No'},
//   {name: 'Connie', phone: '111', response: 'Yes'},
//   {name: 'Beyonce', phone: '222', response: 'Maybe'},
//   {name: 'Rihanna', phone: '333', response: 'Yes'},
// ];

export default class SelectFilterWithDefaultValue extends React.Component {
  constructor (props) {
    super(props) 
    this.state = {
        friends: []
    }
  }
  async componentDidMount () {
    const friends = await axios.get('/api/friends')
    console.log("responsesssssss", friends.data)
    this.setState({
      friends: friends.data
    })
  }
  render() {
    const friends = this.state.responses
    return (
      <BootstrapTable data={ friends } bordered >
          <TableHeaderColumn dataField='name' isKey={ true }>Response</TableHeaderColumn>
          <TableHeaderColumn dataField='phone'>Phone</TableHeaderColumn>     
          <TableHeaderColumn dataField='content'>Phone</TableHeaderColumn>     
          {/* <TableHeaderColumn 
            dataField='response' filter={ { type: 'TextFilter', defaultValue: ' ' } }>
            Friend Responses
          </TableHeaderColumn> */}
      </BootstrapTable>
    );
  }
}



// import React from 'react';
// import axios from 'axios'
// import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

// const friends = [
//   {name: 'Michael Jackson', phone: '123', response: 'Yes'},
//   {name: 'Ay-Nur', phone: '321', response: 'No'},
//   {name: 'Connie', phone: '111', response: 'Yes'},
//   {name: 'Beyonce', phone: '222', response: 'Maybe'},
//   {name: 'Rihanna', phone: '333', response: 'Yes'},
// ];

// export default class SelectFilterWithDefaultValue extends React.Component {
//   async componentDidMount () {
//     const responses = await axios.get('/api/responses')
//     this.setState({
//       responses: responses.data
//     })
//   }
//   render() {
//     //{friends} = props
//     return (
//       <BootstrapTable data={ friends } bordered >
//           {/* <TableHeaderColumn dataField='name' isKey={ true }>Name</TableHeaderColumn> */}
//           <TableHeaderColumn dataField='phone'>Phone</TableHeaderColumn>        
//           <TableHeaderColumn 
//             dataField='content' filter={ { type: 'TextFilter', defaultValue: ' ' } }>
//             Friend Responses
//           </TableHeaderColumn>
//       </BootstrapTable>
//     );
//   }
// }

// const {friends} = props;
// return (
//         <BootstrapTable data={ friends } deleteRow={ true } selectRow={ selectRowProp } options={ options } pagination>
//             <TableHeaderColumn dataField='id' isKey hidden>ID</TableHeaderColumn>
//             <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
//             <TableHeaderColumn dataField='phoneNumber'>Phone</TableHeaderColumn>
//             <TableHeaderColumn dataField='group' filter={ { type: 'TextFilter', delay: 1000 } }>Group</TableHeaderColumn>
//         </BootstrapTable>
// )