'use strict';

var utils = require('../utils/writer.js');
var Workorders = require('../service/WorkordersService');

module.exports.addWorkOrder = function addWorkOrder (req, res, next, body) {
  Workorders.addWorkOrder(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteWorkOrder = function deleteWorkOrder (req, res, next, locationId, api_key) {
  Workorders.deleteWorkOrder(locationId, api_key)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getWorkOrderById = function getWorkOrderById (req, res, next, workOrderId) {
  Workorders.getWorkOrderById(workOrderId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getWorkOrders = function getWorkOrders (req, res, next) {
  Workorders.getWorkOrders()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateWorkOrder = function updateWorkOrder (req, res, next, body) {
  Workorders.updateWorkOrder(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
