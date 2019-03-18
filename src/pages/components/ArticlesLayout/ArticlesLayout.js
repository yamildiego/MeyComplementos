import React from 'react';

function ArticlesLayout(props) {
    return (
        <div className="row">
            {props.children}
        </div>
    )
}

export default ArticlesLayout;