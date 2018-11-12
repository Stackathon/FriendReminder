import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

// function deleteRow(index) {
//     const {friends} = [...this.props.friends];
//     friends.splice(index, 1);
//     this.setState({friends});
// }

function onAfterDeleteRow(rowKeys, rows) {
    alert('The rowkey you drop: ' + rowKeys);
    //return deleteRow(rowKeys)
}

const options = {
    afterDeleteRow: onAfterDeleteRow  // A hook for after droping rows.
};

// If you want to enable deleteRow, you must enable row selection also.
const selectRowProp = {
    mode: 'checkbox'
};

const AddFriendTable = (props) => {
    const {friends} = props;
    return (
            <BootstrapTable data={ friends } deleteRow={ true } selectRow={ selectRowProp } options={ options } pagination>
                <TableHeaderColumn dataField='id' isKey hidden>ID</TableHeaderColumn>
                <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
                <TableHeaderColumn dataField='phoneNumber'>Phone</TableHeaderColumn>
                <TableHeaderColumn dataField='group' filter={ { type: 'TextFilter', delay: 1000 } }>Group</TableHeaderColumn>
            </BootstrapTable>
    )
}

export default AddFriendTable