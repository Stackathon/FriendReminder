import React from 'react';
import axios from 'axios'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const friends = [
  {name: 'Michael Jackson', phone: '123', response: 'Yes'},
  {name: 'Ay-Nur', phone: '321', response: 'No'},
  {name: 'Connie', phone: '111', response: 'Yes'},
  {name: 'Beyonce', phone: '222', response: 'Maybe'},
  {name: 'Rihanna', phone: '333', response: 'Yes'},
];

export default class SelectFilterWithDefaultValue extends React.Component {
  constructor (props) {
    super(props) 
    this.state = {
        responses: [],
    }
  }
  async componentDidMount () {
    const responses = await axios.get('/api/responses')
    console.log("responsesssssss", responses.data)
    this.setState({
      responses: responses.data
    })
  }
  render() {
    const responses = this.state.responses
    
    return (
      <div>
        <h2>Expectations...</h2>
          <BootstrapTable data={ friends } bordered >
            <TableHeaderColumn dataField='name' isKey={ true }>Name</TableHeaderColumn>
            <TableHeaderColumn dataField='phone'>Phone</TableHeaderColumn>     
            <TableHeaderColumn dataField='response' filter={ { type: 'TextFilter', defaultValue: ' ' } }>Response</TableHeaderColumn>     
          </BootstrapTable>
          <h2>Reality :( ...</h2>
          <BootstrapTable data={ responses } bordered >
              <TableHeaderColumn dataField='content' isKey={ true }>Response</TableHeaderColumn>
              {/* <TableHeaderColumn dataField='content'>Phone</TableHeaderColumn>      */}
              {/* <TableHeaderColumn dataField='content'>Phone</TableHeaderColumn>      */}
              {/* <TableHeaderColumn 
                dataField='response' filter={ { type: 'TextFilter', defaultValue: ' ' } }>
                Friend Responses
              </TableHeaderColumn> */}
          </BootstrapTable>
      </div>
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