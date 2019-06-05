import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap'
import ImageNotFound from './../images/images-not-found.gif'
import './styles/Article.css';

class Article extends React.PureComponent {
    handleClick = event => {
        this.props.openModal(this.props);
    }
    render() {
        return (
            <div className="Article col-6 col-md-4 mb-4" onClick={this.handleClick}>
                <Card className="Article-Card">
                    <div className="ArticleImage">
                        {
                            this.props.images.length > 0
                                ? <Card.Img variant="top" src={require(`./../images/articles/${this.props.images[0].path}`)} />
                                : <Card.Img variant="top" src={ImageNotFound} />
                        }
                    </div>
                    <Card.Body className="Article-Body">
                        <Card.Title className="Article-Title h6">{this.props.title}</Card.Title>
                        <button className="btn btn-info btn-sm btn-block mt-2">Ver mas</button>
                    </Card.Body>
                    <Card.Footer className="Article-Footer">
                        {
                            this.props.brand &&
                            <small className="text-muted">{this.props.brand.displayName}</small>
                        }
                        {
                            this.props.sizes &&
                            <small className="text-muted float-right">
                                Talles &nbsp;
                                {
                                    this.props.sizes.map((item, index) => {
                                        return (item.displayName + (this.props.sizes.length > (index + 1) ? "|" : ""))
                                    })
                                }
                            </small>
                        }
                    </Card.Footer>
                </Card>
            </div >)
    }
}

Article.propTypes = {
    handleModalToggle: PropTypes.func,
    title: PropTypes.string.isRequired,
    brand: PropTypes.object.isRequired,
    price: PropTypes.number.isRequired,
    images: PropTypes.array.isRequired,
    description: PropTypes.string,
    size: PropTypes.string
}

export default Article;