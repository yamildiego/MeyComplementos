import React from 'react';
import './styles/SearchLayout.css'

class Search extends React.Component {
    handleOnChange = event => {
        this.props.setFilterBySearch(event.target.value);
    }
    render() {
        return (
            <form className="Search">
                <input
                    onChange={this.handleOnChange}
                    placeholder="Buscador"
                    className="Search-input"
                    value={this.props.valueSearch}
                    type="text" />
            </form>
        )
    }
}

export default Search;