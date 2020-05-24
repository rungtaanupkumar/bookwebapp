'use strict';

var utils = require('../utils/writer.js');
var Locations = require('../service/LocationsService');

module.exports.addLocation = function addLocation (req, res, next, body) {
  Locations.addLocation(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteLocation = function deleteLocation (req, res, next, locationId, api_key) {
  Locations.deleteLocation(locationId, api_key)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getLocationById = function getLocationById (req, res, next, locationId) {
  Locations.getLocationById(locationId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getLocations = function getLocations (req, res, next) {
  Locations.getLocations()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateLocation = function updateLocation (req, res, next, body) {
  Locations.updateLocation(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
