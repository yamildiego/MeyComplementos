import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Article from './Article';
import Search from './Search';
import Breadcrumbs from './Breadcrumbs';
import './../components/styles/ArticlesLayout.css';

class Articles extends React.Component {
    state = {
        category: this.props.category,
        categories: this.props.categories
    }
    componentWillReceiveProps = (nextProps) => {
        if (nextProps.category != this.state.category)
            this.setState({ category: nextProps.category })
        if (nextProps.categories != this.state.categories)
            this.setState({ categories: nextProps.categories })
    }
    render() {
        return (
            <React.Fragment>
                <Search valueSearch={this.props.valueSearch} setFilterBySearch={this.props.setFilterBySearch}></Search>
                <Breadcrumbs setFilterByCategory={this.props.setFilterByCategory} category={this.state.category} categories={this.state.categories} />
                {this.props.articles.length == 0 &&
                    <React.Fragment>
                        <div className="ArticlesBoxNoItems">
                            <h2 className="w-100 text-center">No hay publicaciones que coincidan con tu búsqueda.</h2>
                            <div className="row">
                                <div className="col-md-4 ArticlesSearch">
                                    <FontAwesomeIcon className="ArticlesIconSearch" icon="search" color="green" />
                                </div>
                                <div className="col-md-8">
                                    <ul className="ArticlesItems mx-auto">
                                        <li>Revisá la ortografía de la palabra.</li>
                                        <li>Utilizá palabras más genéricas o menos palabras.</li>
                                        <li>Navega por las categorías para encontrar un producto similar.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                }
                <div className="row">
                    {
                        this.props.articles.map((item) => {
                            return <Article openModal={this.props.openModal} key={item.id} {...item}></Article>
                        })
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default Articles;