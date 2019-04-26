import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles/Categories.css'

class Categories extends React.Component {
    state = {
        categoryShow: 0,
        categoryFiltered: this.props.category
    }
    componentWillReceiveProps = (nextProps) => {
        if (nextProps.category != this.state.categoryFiltered)
            this.setState({ categoryFiltered: nextProps.category });
    }
    handleOnclick = (item, fatherId) => {
        if (item.subcategories == undefined || item.subcategories.length == 0) {
            this.setState({ categoryShow: fatherId });
        } else {
            this.setState({ categoryShow: item.id });
        }
        this.props.setFilterByCategory(item.id);
    }
    render() {
        return (
            <ListGroup className="Categories">
                {
                    this.props.categories.map((item) => {
                        return (
                            <React.Fragment key={item.id} >
                                {
                                    this.state.categoryShow == 0 &&
                                    <div className="list-group-item">
                                        <div className="Category" onClick={(i) => { this.handleOnclick(item, 0) }}>
                                            <div className="form-group form-check">
                                                <label className="checkBoxCustom">
                                                    {item.name}
                                                    <input
                                                        type="checkbox"
                                                        checked={(this.state.categoryFiltered == item.id)}
                                                    />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {
                                    (this.state.categoryShow == item.id && item.subcategories != undefined) &&
                                    item.subcategories.map((subcategory) => {
                                        return (
                                            <div key={subcategory.id} className="list-group-item" >
                                                <div className="Subcategory" onClick={(i) => { this.handleOnclick(subcategory, item.id) }}>
                                                    <div className="form-group form-check">
                                                        <label className="checkBoxCustom">
                                                            {subcategory.name}
                                                            <input
                                                                type="checkbox"
                                                                checked={(this.state.categoryFiltered == subcategory.id)}
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

                    // this.props.categories.map((item) => {
                    //     return (
                    //         <React.Fragment key={item.id}>
                    //             {

                    //                     ? <div className="list-group-item">
                    //                         <div className="Category" onClick={(i) => { this.handleOnclick(item.id) }}>
                    //                             {item.name}
                    //                         </div>
                    //                     </div>
                    //                     : <div>

                    //                     </div>
                    //             }
                    //         </React.Fragment>
                    //     )
                    // })


                                                // this.props.category == 0
                            //     ? <React.Fragment key={item.id}>
                            //         <div className="list-group-item">
                            //             <div className="Category" onClick={(i) => { this.handleOnclick(item.id) }}>
                            //                 {item.name}
                            //             </div>
                            //         </div>
                            //     </React.Fragment>
                            //     : (this.props.category == item.id &&
                            //         item.subcategories.map(subcategory => {
                            //             return < React.Fragment key={subcategory.id} >
                            //                 <div className="list-group-item">
                            //                     <div className="Category" onClick={(i) => { this.handleOnclick(subcategory.id) }}>
                            //                         {subcategory.name}
                            //                     </div>
                            //                 </div>
                            //             </React.Fragment>
                            //         })
                            //     )
