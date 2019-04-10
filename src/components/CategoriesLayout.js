import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './styles/CategoriesLayout.css'

function CategoriesLayout(props) {
    return (
        <ListGroup className="CategoriesLayout">
            {
                props.categories.map((item) => {
                    return <Link key={item.id} className="list-group-item" to={"/category/" + item.id}>{item.name}</Link>
                })
            }
        </ListGroup>
    )
}

export default CategoriesLayout;