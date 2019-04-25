import React from 'react';

class FormatterWithSign extends Intl.NumberFormat {
    constructor(...args) {
        super(...args);
    }

    format(x) {
        var res = super.format(x);
        return x < 0 ? "-" + res : res;
    }
}

const formatNumber = number => {
    var formatter = new FormatterWithSign('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    });

    return formatter.format(number);
}

export default formatNumber;