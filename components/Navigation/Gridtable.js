import React from 'react'
import classes from './navigation.module.css'
import {Table} from 'reactstrap'
import { MdDeleteOutline,MdDone,MdCreate} from "react-icons/md";


const Gridtable = (props) => {
	return (
		<div className={classes.gridtable}>
			  <Table borderless >
        {/* <thead>
          <tr>
            <th>SR.no</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead> */}
        <tbody >
          <tr>
            <th scope="row">{props.srnno}</th>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
            <td>{props.status}</td>
            <td>
              <MdCreate/>

              <MdDeleteOutline/>
              <MdDone/>
            </td>
          </tr>
          {/* <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr> */}
        </tbody>
      </Table>

		</div>
	)
}

export default Gridtable
