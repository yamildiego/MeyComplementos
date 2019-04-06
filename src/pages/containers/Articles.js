import React from 'react';
import PropTypes from 'prop-types';
import ArticlesLayout from './../components/ArticlesLayout/ArticlesLayout';
import Article from './../components/Article/Article';
import Search from './../containers/Search';

class Articles extends React.Component {
    render() {
        return (
            <div>
                <Search></Search>
                <ArticlesLayout>
                    {
                        this.props.articles.map((item) => {
                            return <Article openModal={this.props.openModal} key={item.id} {...item}></Article>
                        })
                    }
                </ArticlesLayout>
            </div>
        )
    }
}

Articles.propTypes = {
    articles: PropTypes.array.isRequired
}

export default Articles;