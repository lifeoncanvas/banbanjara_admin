import React from 'react'
import { Pagination, PaginationItem, PaginationLink,Card,CardBody,CardTitle,CardSubtitle,Button,CardText} from "reactstrap";
import classes from './navigation.module.css'
import Gridtable from './Gridtable'

const Dashboard = () => {
	return (
    <div className={classes.dashboard}>
      <h4>User Module Management </h4>
      <Card className={classes.card} >
    <CardBody>
    <Button>
        Button
      </Button>
      <CardTitle tag="h5">
        Card title
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Card subtitle
      </CardSubtitle>
      <CardText>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </CardText>
      
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
