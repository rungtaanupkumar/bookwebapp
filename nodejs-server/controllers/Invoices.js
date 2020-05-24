'use strict';

var utils = require('../utils/writer.js');
var Invoices = require('../service/InvoicesService');

module.exports.addInvoice = function addInvoice (req, res, next, body) {
  Invoices.addInvoice(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getInvoicesByLocation = function getInvoicesByLocation (req, res, next, locationId) {
  Invoices.getInvoicesByLocation(locationId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getInvoicesByVehicleOwner = function getInvoicesByVehicleOwner (req, res, next, systemUserId) {
  Invoices.getInvoicesByVehicleOwner(systemUserId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateInvoicePaid = function updateInvoicePaid (req, res, next, invoiceId) {
  Invoices.updateInvoicePaid(invoiceId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
