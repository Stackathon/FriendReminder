import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const AddFriendTable = (props) => {
    const {friends} = props;
    const array =   
        friends && friends.map(friend => {
        return <ul key={friend.id}>
                    <li>Name: {friend.name}</li>
                    <li>Phone Number: {friend.phoneNumber}</li>
                    <li>Group: {friend.group}</li>
                </ul>
        })
    return (
            <div>
                    {/* {
                        campuses && campuses.map(campus => {
                            return (
                                <div key={campus.id}>
                                <RemoveCampus id={campus.id} />
                                <li><Link to={`/campuses/${campus.id}`} onClick={() => singleCampusOnly(campus)}> {campus.name}</Link></li>
                                <img src={campus.imageUrl} alt="" className="img-responsive" />
                                </div>
                            )
                        })
                    } */} 
                    <table>
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Group</th>
                            </tr>
                                {
                                    friends && friends.map((friend, i) => {
                                        return (
                                            <tr key={friend.id}>
                                                <td>{friend.name}</td>
                                                <td>{friend.phoneNumber}</td>
                                                <td>{friend.group}</td>
                                            </tr>
                                        )
                                    })
                                }
                        </tbody>
                    </table>
                     {/* <BootstrapTable data={ array }>
                        <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
                        <TableHeaderColumn dataField='name' filter={ { type: 'TextFilter', delay: 1000 } }>Product Name</TableHeaderColumn>
                        <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
                    </BootstrapTable> */}
            </div>
    )
}

export default AddFriendTable