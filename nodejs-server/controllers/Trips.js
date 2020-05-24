'use strict';

var utils = require('../utils/writer.js');
var Trips = require('../service/TripsService');

module.exports.addTrip = function addTrip (req, res, next, body) {
  Trips.addTrip(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTrip = function getTrip (req, res, next, tripId) {
  Trips.getTrip(tripId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateTripCancelled = function updateTripCancelled (req, res, next, tripId) {
  Trips.updateTripCancelled(tripId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateTripCompleted = function updateTripCompleted (req, res, next, tripId) {
  Trips.updateTripCompleted(tripId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateTripHalted = function updateTripHalted (req, res, next, tripId) {
  Trips.updateTripHalted(tripId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateTripResumed = function updateTripResumed (req, res, next, tripId) {
  Trips.updateTripResumed(tripId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateTripStarted = function updateTripStarted (req, res, next, tripId) {
  Trips.updateTripStarted(tripId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
