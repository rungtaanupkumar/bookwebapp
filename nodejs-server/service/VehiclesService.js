'use strict';


/**
 * Create new Vehicle
 *
 * body Vehicle Vehicle object that needs to be added
 * no response value expected for this operation
 **/
exports.addVehicle = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes a Vehicle
 *
 * locationId Long Vehicle id to delete
 * api_key String  (optional)
 * no response value expected for this operation
 **/
exports.deleteVehicle = function(locationId,api_key) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get Vehicle by Id
 *
 * vehicleId String Id of the location to be fetched. Use user1 for testing. 
 * returns Vehicle
 **/
exports.getVehicleById = function(vehicleId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "vehicleNo" : "vehicleNo",
  "vehiclePermit" : "vehiclePermit",
  "vehicleCapacity" : "vehicleCapacity",
  "vehicleOwner" : {
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
  },
  "recordStatus" : "ACTIVE",
  "vehicleId" : 0,
  "vehicleType" : "vehicleType"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get list of Vehicles
 *
 * returns List
 **/
exports.getVehicles = function() {
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
 * Update Vehicle
 *
 * body Vehicle Vehicle object that needs to be updated
 * no response value expected for this operation
 **/
exports.updateVehicle = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

