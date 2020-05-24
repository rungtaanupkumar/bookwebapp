'use strict';

var utils = require('../utils/writer.js');
var Vehiclequeue = require('../service/VehiclequeueService');

module.exports.addVehicleToQueue = function addVehicleToQueue (req, res, next, body) {
  Vehiclequeue.addVehicleToQueue(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getVehicleQueueByWorkOrder = function getVehicleQueueByWorkOrder (req, res, next, workOrderId) {
  Vehiclequeue.getVehicleQueueByWorkOrder(workOrderId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.removeVehicleQueue = function removeVehicleQueue (req, res, next, body) {
  Vehiclequeue.removeVehicleQueue(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
