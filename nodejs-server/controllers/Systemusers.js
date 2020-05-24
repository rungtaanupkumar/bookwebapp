'use strict';

var utils = require('../utils/writer.js');
var Systemusers = require('../service/SystemusersService');

module.exports.addSystemUser = function addSystemUser (req, res, next, body) {
  Systemusers.addSystemUser(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createSystemUsersWithListInput = function createSystemUsersWithListInput (req, res, next, body) {
  Systemusers.createSystemUsersWithListInput(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteSystemUser = function deleteSystemUser (req, res, next, locationId, api_key) {
  Systemusers.deleteSystemUser(locationId, api_key)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSystemUserById = function getSystemUserById (req, res, next, systemUserId) {
  Systemusers.getSystemUserById(systemUserId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSystemUsers = function getSystemUsers (req, res, next) {
  Systemusers.getSystemUsers()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUserByName = function getUserByName (req, res, next, userName) {
  Systemusers.getUserByName(userName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.loginSystemUser = function loginSystemUser (req, res, next, username, password) {
  Systemusers.loginSystemUser(username, password)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.logoutUser = function logoutUser (req, res, next) {
  Systemusers.logoutUser()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateSystemUser = function updateSystemUser (req, res, next, body) {
  Systemusers.updateSystemUser(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
