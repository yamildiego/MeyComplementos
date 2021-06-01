import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import Article from './Article';
import Search from './Search';
import Breadcrumbs from './Breadcrumbs';
import './../components/styles/ArticlesLayout.css';

class Articles extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Search valueSearch={this.props.valueSearch} setFilterBySearch={this.props.setFilterBySearch}></Search>
                <Breadcrumbs setFilterByCategory={this.props.setFilterByCategory} category={this.props.category} categories={this.props.categories} />
                {this.props.articles.length === 0 &&
                    <React.Fragment>
                        <div className="ArticlesBoxNoItems">
                            <h2 className="w-100 text-center"><FormattedMessage locale={this.props.lang} id="nav.search_no_found" />{this.props.valueSearch}</h2>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="text-center">
                                        <FormattedMessage locale={this.props.lang} id="nav.search_no_found_text" />
                                    </div>
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

function mapStateToProps(state, props) {
    let lang = (state.locale.lang === undefined || state.locale.lang === "") ? "en" : state.locale.lang;
    return {
        lang,
        props
    }
}

export default connect(mapStateToProps)(Articles);