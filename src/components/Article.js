import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap'
import './styles/Article.css';

class Article extends React.PureComponent {
    handleClick = event => {
        this.props.openModal(this.props);
    }
    render() {
        return (
            <div className="Article col-6 col-md-4 mb-4" onClick={this.handleClick}>
                <Card className="Article-Card">
                    <Card.Img variant="top" src={this.props.image} />
                    <Card.Body className="Article-Body">
                        <Card.Title className="Article-Title h6">{this.props.title}</Card.Title>
                        <div className="Article-Price">{this.props.price}</div>
                        {(this.props.colors) ? <Card.Text className="Article-Text small">
                            {this.props.colors}
                        </Card.Text> : ''}
                        <Card.Text className="Article-Text">
                            {(this.props.description) ? this.props.description : null}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="Article-Footer">
                        <small className="text-muted">{this.props.brand}</small>
                        {(this.props.size) ? <small className="text-muted float-right">{this.props.size}</small> : null}
                    </Card.Footer>
                </Card>
            </div >)
    }
}

Article.propTypes = {
    handleModalToggle: PropTypes.func,
    title: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string,
    size: PropTypes.string
}

export default Article;