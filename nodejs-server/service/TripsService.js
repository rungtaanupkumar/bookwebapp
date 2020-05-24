'use strict';


/**
 * Create new Trip
 *
 * body Trip Trip object that needs to be added
 * returns VehicleQueue
 **/
exports.addTrip = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "workOrder" : {
    "initiatedDate" : "initiatedDate",
    "loadTimeStart" : "loadTimeStart",
    "recordStatus" : "ACTIVE",
    "distanceCovered" : "distanceCovered",
    "loadTimeEnd" : "loadTimeEnd",
    "workOrderDate" : "workOrderDate",
    "workOrderId" : 0,
    "source" : {
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
    "initiatedBy" : {
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
    "capacityToLoad" : "capacityToLoad"
  },
  "vehicleOrder" : [ {
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
  }, {
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
  } ],
  "recordStatus" : "ACTIVE",
  "queueDate" : "queueDate",
  "vehicleQueueId" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Trip
 *
 * tripId String Id of the Trip
 * returns Trip
 **/
exports.getTrip = function(tripId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "amount" : 5.962133916683182,
  "distanceCovered" : 6.027456183070403,
  "rate" : 1.4658129805029452,
  "loadedCapacity" : "loadedCapacity",
  "currentTripStatus" : "currentTripStatus",
  "loadedDate" : "loadedDate",
  "tripId" : 0,
  "vehicleQueue" : {
    "workOrder" : {
      "initiatedDate" : "initiatedDate",
      "loadTimeStart" : "loadTimeStart",
      "recordStatus" : "ACTIVE",
      "distanceCovered" : "distanceCovered",
      "loadTimeEnd" : "loadTimeEnd",
      "workOrderDate" : "workOrderDate",
      "workOrderId" : 0,
      "source" : {
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
      "initiatedBy" : {
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
      "capacityToLoad" : "capacityToLoad"
    },
    "vehicleOrder" : [ {
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
    }, {
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
    } ],
    "recordStatus" : "ACTIVE",
    "queueDate" : "queueDate",
    "vehicleQueueId" : 0
  },
  "tripCreatedBy" : {
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
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update Trip Cancelled
 *
 * tripId String Id of the Trip to be cancelled
 * no response value expected for this operation
 **/
exports.updateTripCancelled = function(tripId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update Trip Completed
 *
 * tripId String Id of the Trip to be completed
 * no response value expected for this operation
 **/
exports.updateTripCompleted = function(tripId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update Trip Halted
 *
 * tripId String Id of the Trip to be halted
 * no response value expected for this operation
 **/
exports.updateTripHalted = function(tripId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update Trip Resumed
 *
 * tripId String Id of the Trip to be resumed
 * no response value expected for this operation
 **/
exports.updateTripResumed = function(tripId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update Trip Started
 *
 * tripId String Id of the Trip to be started
 * no response value expected for this operation
 **/
exports.updateTripStarted = function(tripId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

