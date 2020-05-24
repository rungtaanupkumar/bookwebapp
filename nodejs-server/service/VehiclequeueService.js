'use strict';


/**
 * Add Vehicle to the Queue By WorkOrder
 *
 * body Body Vehicle and WorkOrder Id
 * returns VehicleQueue
 **/
exports.addVehicleToQueue = function(body) {
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
 * Get Vehicles in the Queue By WorkOrder
 *
 * workOrderId String Id of the WorkOrder to be fetched. Use user1 for testing. 
 * returns VehicleQueue
 **/
exports.getVehicleQueueByWorkOrder = function(workOrderId) {
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
 * Remove Vehicle from the Queue By WorkOrder
 *
 * body Body_1 Vehicle and WorkOrder Id
 * no response value expected for this operation
 **/
exports.removeVehicleQueue = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

