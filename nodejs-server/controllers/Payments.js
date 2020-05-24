'use strict';

var utils = require('../utils/writer.js');
var Payments = require('../service/PaymentsService');

module.exports.addPayment = function addPayment (req, res, next, body) {
  Payments.addPayment(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatePaymentStatus = function updatePaymentStatus (req, res, next, paymentId) {
  Payments.updatePaymentStatus(paymentId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
