import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './styles/LineCheckOut.css';
import lenguanges from './../lang';

class LineCheckOut extends React.Component {
    handleClick = (index) => {
        if (index <= this.props.status)
            this.props.setStep(index);
    }
    render() {

        const statusText = lenguanges[this.props.lang]["line_check_out.status"];
        return (
            <div className="LineCheckOut">
                <div className="LineCheckOutContainer">
                    <div className="LineCheckOutContainerLink d-none d-sm-block" onClick={this.props.toggleViewCart}>
                        <FormattedMessage locale={this.props.lang} id="line_check_out.continue_shopping" />
                    </div>
                    <ul>
                        {
                            statusText.map((item, index) => {
                                return (
                                    <li key={index} className={(index <= this.props.status) ? "LineCheckOutOption" : "LineCheckOutOption LineCheckOutOptionDisabled"}  >
                                        {
                                            index <= this.props.status &&
                                            <div className="LineCheckOutOptionActive"></div>
                                        }
                                        <div
                                            className="non-selectable"
                                            onClick={() => this.handleClick(index)}>
                                            {item}
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="LineCheckOutOptionInactive"></div>
            </div>
        )
    }
}

function mapStateToProps(state, props) {
    let lang = (state.locale.lang === undefined || state.locale.lang === "") ? "en" : state.locale.lang;
    return {
        lang
    }
}

export default connect(mapStateToProps)(LineCheckOut);