import React from 'react';
import './SearchLayout.css'

const SearchLayout = props => (
    <form className="Search" onSubmit={props.handleSubmit}>
        <input ref={props.setRef}
            placeholder="Buscador"
            className="Search-input"
            defaultValue=""
            type="text" />
    </form>
)

export default SearchLayout;