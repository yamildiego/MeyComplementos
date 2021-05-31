import React from 'react';
import { ListGroup } from 'react-bootstrap';
import './styles/Categories.css'

class Categories extends React.Component {
    state = {
        categoryShow: 0,
        categoryFiltered: this.props.category
    }
    componentWillReceiveProps = (nextProps) => {
        if (nextProps.category !== this.state.categoryFiltered)
            this.setState({ categoryFiltered: nextProps.category });
        if (nextProps.category === 0)
            this.setState({ categoryShow: nextProps.category });
    }
    handleOnChange = (e, item, fatherId) => {
        if (e.target.checked) {
            if (item.subcategories === undefined || item.subcategories.length === 0)
                this.setState({ categoryShow: fatherId });
            else
                this.setState({ categoryShow: item.id });
            this.props.setFilterByCategory(item.id);
        } else
            this.props.setFilterByCategory(fatherId);
    }
    render() {
        return (
            <ListGroup className="Categories">
                {
                    this.props.categories.map((item) => {
                        return (
                            <React.Fragment key={item.id} >
                                {
                                    this.state.categoryShow === 0 &&
                                    <div className="list-group-item non-padding-left">
                                        <div className="Category">
                                            <div className="form-check">
                                                <label className="checkBoxCustom">
                                                    {item.name}
                                                    <input
                                                        type="checkbox"
                                                        checked={(this.state.categoryFiltered === item.id)}
                                                        onChange={(e) => { this.handleOnChange(e, item, 0) }}
                                                    />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {
                                    (this.state.categoryShow === item.id && item.subcategories !== undefined) &&
                                    item.subcategories.map((subcategory) => {
                                        return (
                                            <div key={subcategory.id} className="list-group-item non-padding-left" >
                                                <div className="Subcategory">
                                                    <div className="form-check">
                                                        <label className="checkBoxCustom">
                                                            {subcategory.name}
                                                            <input
                                                                type="checkbox"
                                                                checked={(this.state.categoryFiltered === subcategory.id)}
                                                                onChange={(e) => { this.handleOnChange(e, subcategory, item.id) }}
                                                            />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                    </div>
                                                </div>
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