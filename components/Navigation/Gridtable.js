import React from 'react'
import classes from './navigation.module.css'
import {Table} from 'reactstrap'
import { MdDeleteOutline,MdDone,MdCreate} from "react-icons/md";


const Gridtable = () => {
	return (
		<div className={classes.gridtable}>
			  <Table borderless >
        <thead>
          <tr>
            <th>SR.no</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody >
          <tr>
            <th scope="row">1</th>
            <td>Upasana Dalvi</td>
            <td>zoe@gmail.com</td>
            <td>9422036032</td>
            <td>Active</td>
            <td>
              <MdCreate/>

              <MdDeleteOutline/>
              <MdDone/>
            </td>
          </tr>
          <tr>
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
          </tr>
        </tbody>
      </Table>

		</div>
	)
}

export default Gridtable
