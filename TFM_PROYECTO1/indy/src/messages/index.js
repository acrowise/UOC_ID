'use strict';
const sdk = require('indy-sdk');
const indy = require('../../index.js');
const config = require('../../../config');
const request = require('request-promise');

exports.sendMessage = function (endpoint, message) {
    let requestOptions = {
        uri: `http://${endpoint}/indy`,
        method: 'POST',
        body: {
            message: message
        },
        json: true
    };
    return request(requestOptions);
};
