import React from 'react'
import { Pagination, PaginationItem, PaginationLink,Card,CardBody,CardTitle,CardSubtitle,Button,CardText} from "reactstrap";
import classes from './navigation.module.css'
import Gridtable from './Gridtable'
import { VscAdd } from "react-icons/vsc";


const Dashboard = () => {
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
     
     
      
      <Gridtable/>
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
