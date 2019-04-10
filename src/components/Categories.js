import React from 'react';
import CategoriesLayout from './CategoriesLayout';

class Categories extends React.Component {
    render() {
        return (
            <CategoriesLayout categories={this.props.categories}></CategoriesLayout>
        )
    }
}

export default Categories;