import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const Dashboard = () => {
	return (
		
			 <div style={{
            display: 'block', width: 700, padding: 30
        }}>
            <h4>ReactJS Reactstrap Pagination Component</h4>
            
			<Pagination>
                <PaginationItem>
                    <PaginationLink href="#about">1</PaginationLink>
                    
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
	)
}

export default Dashboard
