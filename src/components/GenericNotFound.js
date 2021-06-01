import React, { Component } from 'react';
import './styles/GenericNotFound.css';

class GenericNotFound extends Component {
    state = {}
    render() {
        return (
            <div className="GenericNotFound">
                <div className="GenericNotFoundTitle">
                    Sorry, the page you're looking for can't be found
            </div>
                <div className="GenericNotFoundSubtitle">
                    It looks like there's a problem locating this page. In the mean time, return to our homepage.
                </div>
            </div>
        );
    }
}

export default GenericNotFound;