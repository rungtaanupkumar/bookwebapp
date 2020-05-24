'use strict';


/**
 * Create new location
 *
 * body Location Location object that needs to be added
 * no response value expected for this operation
 **/
exports.addLocation = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes a Location
 *
 * locationId Long Location id to delete
 * api_key String  (optional)
 * no response value expected for this operation
 **/
exports.deleteLocation = function(locationId,api_key) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get Location by Id
 *
 * locationId String Id of the location to be fetched. Use user1 for testing. 
 * returns Location
 **/
exports.getLocationById = function(locationId) {
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
 * Get list of locations
 *
 * returns List
 **/
exports.getLocations = function() {
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
 * Update Location
 *
 * body Location Location object that needs to be updated
 * no response value expected for this operation
 **/
exports.updateLocation = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

