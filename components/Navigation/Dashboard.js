import React from 'react'
import { Pagination, PaginationItem, PaginationLink,Card,CardBody,CardTitle,CardSubtitle,Button,CardText} from "reactstrap";
import classes from './navigation.module.css'
import Gridtable from './Gridtable'
import { VscAdd } from "react-icons/vsc";
import { getDomainLocale } from 'next/dist/shared/lib/router/router';


const Dashboard = () => {

  const tabledata=[
    {
      srno:'1',
      name: 'Bla',
      email:'bla@gmail.com',
      phone:'6766',
      status:'active',

    },
    {
      srno:'2',
      name: 'Upasana',
      email:'upa@gmail.com',
      phone:'085686966',
      status:'active',

    },
    {
      srno:'3',
      name: 'shirley',
      email:'shirley@gmail.com',
      phone:'5677666766',
      status:'active',

    },
    
    {
      name: 'natti',
      email:'natti@gmail.com',
      phone:'67664544545',
      status:'active',

    },
    {
      name: 'josh',
      email:'josh@gmail.com',
      phone:'67656776',
      status:'active',

    },
    {
      name: 'joanna',
      email:'joanna@gmail.com',
      phone:'67665577',
      status:'active',

    },
    {
      name: 'nissi',
      email:'nissi@gmail.com',
      phone:'6765655656',
      status:'active',

    },


  ]
	return (
    <div className={classes.dashboard}>
      <h4>User Module Management </h4>
      <Card className={classes.card} >
    <CardBody>
    
      <CardTitle tag="h5" className={classes.cardtitle}>
      <Button className={classes.button}>
    <VscAdd/>
      </Button>
        User List
      </CardTitle>
     {tabledata.map( tabledata => <Gridtable
      srno={tabledata.srno}
     name={tabledata.name}
     email={tabledata.email}
     phone={tabledata.phone}
     status={tabledata.status}
     />)}
      {/* <Gridtable
      name={tabledata[0].name}
      email={tabledata[0].email}
      phone={tabledata[0].phone}
      status={tabledata[0].status}
      >
        
      </Gridtable>
      <Gridtable
      name={tabledata[0].name}
      email={tabledata[0].email}
      phone={tabledata[0].phone}
      status={tabledata[0].status}
      >
        
      </Gridtable> */}
      
    </CardBody>
  </Card>
        
    
      <Pagination>
        <PaginationItem>
          <PaginationLink href="/gridtable">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">4</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">5</PaginationLink>
        </PaginationItem>
      </Pagination>
    </div>
  );
}

export default Dashboard
