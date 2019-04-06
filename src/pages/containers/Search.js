import React from 'react';
import SearchLayout from './../components/SearchLayout/SearchLayout';

class Search extends React.Component {
    handleSubmit = event => {
        event.preventDefault();
        console.error(this.input.value);
    }
    setInputRef = element => {
        this.input = element;
    }
    render() {
        return (<SearchLayout handleSubmit={this.handleSubmit} setRef={this.setInputRef}>
            Casa
        </SearchLayout>)
    }
}

export default Search;