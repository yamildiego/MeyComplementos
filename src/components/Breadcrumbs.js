import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles/Breadcrumbs.css';

class Breadcrumbs extends React.Component {
    state = {
        category: this.props.category,
        categories: this.props.categories
    }
    componentWillReceiveProps = (nextProps) => {
        if (nextProps.category !== this.state.category)
            this.setState({ category: nextProps.category })
        if (nextProps.categories !== this.state.categories)
            this.setState({ categories: nextProps.categories })
    }
    handleOnClick = (fatherId) => {
        this.props.setFilterByCategory(fatherId);
    }
    render() {
        return (
            <div className="Breadcrumbs">
                {
                    this.state.categories.map((item, index) => {
                        return (
                            <React.Fragment key={index}>
                                {item.id === this.state.category &&
                                    <span className="BreadcrumbsLabel">
                                        <FontAwesomeIcon onClick={() => this.handleOnClick(0)} className="BreadcrumbsClose" icon="times" />
                                        {item.name}
                                    </span>
                                }
                                {
                                    item.subcategories !== undefined &&
                                    item.subcategories.map(subcategory => {
                                        return (
                                            subcategory.id === this.state.category &&
                                            <React.Fragment key={subcategory.id} >
                                                <span className="BreadcrumbsLabel">
                                                    <FontAwesomeIcon onClick={() => this.handleOnClick(0)} className="BreadcrumbsClose" icon="times" />
                                                    {item.name}
                                                </span>
                                                <span className="BreadcrumbsLabel">
                                                    <FontAwesomeIcon onClick={() => this.handleOnClick(item.id)} className="BreadcrumbsClose" icon="times" />
                                                    {subcategory.name}
                                                </span>
                                            </React.Fragment>
                                        )
                                    })
                                }

                            </React.Fragment>
                        )
                    })
                }
                {/* {this.state.category} */}
            </div>
        )
    }
}

export default Breadcrumbs;