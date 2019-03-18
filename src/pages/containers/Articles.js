import React from 'react';
import PropTypes from 'prop-types';
import ArticlesLayout from './../components/ArticlesLayout/ArticlesLayout';
import Article from './../components/Article/Article';

class Articles extends React.Component {
    render() {
        return (
            <ArticlesLayout>
                {
                    this.props.articles.map((item) => {
                        return <Article key={item.id} {...item}></Article>
                    })
                }
            </ArticlesLayout>
        )
    }
}

Articles.propTypes = {
    articles: PropTypes.array.isRequired
}

export default Articles;