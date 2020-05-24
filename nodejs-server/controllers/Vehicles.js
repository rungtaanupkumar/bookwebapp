'use strict';

var utils = require('../utils/writer.js');
var Vehicles = require('../service/VehiclesService');

module.exports.addVehicle = function addVehicle (req, res, next, body) {
  Vehicles.addVehicle(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteVehicle = function deleteVehicle (req, res, next, locationId, api_key) {
  Vehicles.deleteVehicle(locationId, api_key)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getVehicleById = function getVehicleById (req, res, next, vehicleId) {
  Vehicles.getVehicleById(vehicleId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getVehicles = function getVehicles (req, res, next) {
  Vehicles.getVehicles()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateVehicle = function updateVehicle (req, res, next, body) {
  Vehicles.updateVehicle(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
