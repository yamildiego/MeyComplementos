import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './styles/Categories.css'

class Categories extends React.Component {
    handleOnclick = (id) => {
        this.props.setFilterByCategory(id);
    }
    render() {
        return (
            <ListGroup className="Categories">
                {
                    this.props.categories.map((item) => {
                        return <div key={item.id} className="list-group-item" onClick={(i) => { this.handleOnclick(item.id) }}>{item.name}</div>
                    })
                }
            </ListGroup>
        )
    }
}

export default Categories;