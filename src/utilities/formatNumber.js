import React from 'react';

class FormatterWithSign extends Intl.NumberFormat {
    constructor(...args) {
        super(...args);
    }

    format(x) {
        var res = super.format(x);
        if (res[0] == "-" && res[1] == "$" && res[2] == "0" && res[3] == "." && res[4] == "0" && res[5] == "0")
            return res[1] + res[2] + res[3] + res[4] + res[5];
        else
            return res;
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