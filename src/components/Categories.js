import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles/Categories.css'

class Categories extends React.Component {
    state = {}
    toggleCategory = (id) => {
        this.setState({ [id]: (this.state[id] == undefined || this.state[id] == false) ? true : false });
    }
    handleOnclick = (id) => {
        this.props.setFilterByCategory(id);
    }
    render() {
        return (
            <ListGroup className="Categories">
                {
                    this.props.categories.map((item) => {
                        return (
                            <React.Fragment key={item.id}>
                                <div className="list-group-item">
                                    {
                                        item.subcategories != undefined ?
                                            <React.Fragment>
                                                {
                                                    (this.state[item.id] == true)
                                                        ? <FontAwesomeIcon className="CategoriesIcon" icon="minus" onClick={(i) => { this.toggleCategory(item.id) }} />
                                                        : <FontAwesomeIcon className="CategoriesIcon" icon="plus" onClick={(i) => { this.toggleCategory(item.id) }} />
                                                }
                                            </React.Fragment>
                                            : <FontAwesomeIcon className="CategoriesIconNone" icon="circle" onClick={(i) => { this.toggleCategory(item.id) }} />
                                    }
                                    <div className="Category" onClick={(i) => { this.handleOnclick(item.id) }}>
                                        {item.name}
                                    </div>
                                </div>

                                {this.state[item.id] == true && item.subcategories && item.subcategories.length > 0 &&
                                    item.subcategories.map((category) => {
                                        return (
                                            <div
                                                className="list-group-item Subcategory"
                                                onClick={(i) => { this.handleOnclick(category.id) }}
                                                key={category.id}>
                                                <FontAwesomeIcon className="CategoriesIconNone" icon="circle" onClick={(i) => { this.toggleCategory(item.id) }} />

                                                {category.name}
                                            </div>
                                        )
                                    })
                                }
                            </React.Fragment>
                        )
                    })
                }
            </ListGroup>
        )
    }
}

export default Categories;