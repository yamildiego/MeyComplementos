import React from 'react';
import leftPad from './leftPad';

const formatTime = secs => `${leftPad(~~(secs / 60))} : ${leftPad(~~(secs % 60))}`

export default formatTime;