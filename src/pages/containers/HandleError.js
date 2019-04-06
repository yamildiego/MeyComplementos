import React from 'react';
import ErrorLayout from './../components/ErrorLayout/ErrorLayout';

class HandleError extends React.Component {
    state = {
        handleError: false
    }
    componentDidCatch(error, info) {
        this.setState({
            handleError: true
        })
    }
    render() {
        if (this.state.handleError) {
            return <ErrorLayout />
        }
        return (this.props.children)
    }
}

export default HandleError;