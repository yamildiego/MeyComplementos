import React from 'react';
import PropTypes from 'prop-types';
import ArticlesLayout from './ArticlesLayout';
import Article from './Article';
import Search from './Search';

class Articles extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Search valueSearch={this.props.valueSearch} setFilterBySearch={this.props.setFilterBySearch}></Search>
                <ArticlesLayout>
                    {
                        this.props.articles.map((item) => {
                            return <Article openModal={this.props.openModal} key={item.id} {...item}></Article>
                        })
                    }
                </ArticlesLayout>
            </React.Fragment>
        )
    }
}

export default Articles;