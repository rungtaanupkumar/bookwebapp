'use strict';


/**
 * Create new SystemUser
 *
 * body Location Location object that needs to be added
 * no response value expected for this operation
 **/
exports.addSystemUser = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Creates list of system users with given input list
 *
 * body List List of System User object
 * no response value expected for this operation
 **/
exports.createSystemUsersWithListInput = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes a SystemUser
 *
 * locationId Long Location id to delete
 * api_key String  (optional)
 * no response value expected for this operation
 **/
exports.deleteSystemUser = function(locationId,api_key) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get SystemUser by Id
 *
 * systemUserId String Id of the location to be fetched. Use user1 for testing. 
 * returns Location
 **/
exports.getSystemUserById = function(systemUserId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "regNo" : "regNo",
  "pincode" : "pincode",
  "locationName" : "locationName",
  "address" : "address",
  "city" : "city",
  "locationType" : "MANDI",
  "recordStatus" : "ACTIVE",
  "phone" : "phone",
  "locationId" : 0,
  "district" : "district",
  "state" : "state",
  "fax" : "fax",
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get list of SystemUser
 *
 * returns List
 **/
exports.getSystemUsers = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "regNo" : "regNo",
  "pincode" : "pincode",
  "locationName" : "locationName",
  "address" : "address",
  "city" : "city",
  "locationType" : "MANDI",
  "recordStatus" : "ACTIVE",
  "phone" : "phone",
  "locationId" : 0,
  "district" : "district",
  "state" : "state",
  "fax" : "fax",
  "email" : "email"
}, {
  "regNo" : "regNo",
  "pincode" : "pincode",
  "locationName" : "locationName",
  "address" : "address",
  "city" : "city",
  "locationType" : "MANDI",
  "recordStatus" : "ACTIVE",
  "phone" : "phone",
  "locationId" : 0,
  "district" : "district",
  "state" : "state",
  "fax" : "fax",
  "email" : "email"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get user by user name
 *
 * userName String The name that needs to be fetched. Use user1 for testing. 
 * returns SystemUser
 **/
exports.getUserByName = function(userName) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "lastName" : "lastName",
  "country" : "country",
  "pincode" : "pincode",
  "gender" : "gender",
  "city" : "city",
  "systemUserId" : 0,
  "employeeId" : "employeeId",
  "userName" : "userName",
  "firstName" : "firstName",
  "userRoles" : "MANDIREP",
  "recordStatus" : "ACTIVE",
  "phone" : "phone",
  "district" : "district",
  "location" : {
    "regNo" : "regNo",
    "pincode" : "pincode",
    "locationName" : "locationName",
    "address" : "address",
    "city" : "city",
    "locationType" : "MANDI",
    "recordStatus" : "ACTIVE",
    "phone" : "phone",
    "locationId" : 0,
    "district" : "district",
    "state" : "state",
    "fax" : "fax",
    "email" : "email"
  },
  "designation" : "designation",
  "state" : "state",
  "fax" : "fax",
  "email" : "email",
  "homeAddress" : "homeAddress"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Logs user into the system
 *
 * username String The user name for login
 * password String The password for login in clear text
 * returns String
 **/
exports.loginSystemUser = function(username,password) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Logs out current logged in user session
 *
 * no response value expected for this operation
 **/
exports.logoutUser = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update SystemUser
 *
 * body Location Location object that needs to be updated
 * no response value expected for this operation
 **/
exports.updateSystemUser = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

