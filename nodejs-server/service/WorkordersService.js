'use strict';


/**
 * Create new WorkOrder
 *
 * body WorkOrder WorkOrder object that needs to be added
 * no response value expected for this operation
 **/
exports.addWorkOrder = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes a WorkOrder
 *
 * locationId Long WorkOrder id to delete
 * api_key String  (optional)
 * no response value expected for this operation
 **/
exports.deleteWorkOrder = function(locationId,api_key) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get WorkOrder by Id
 *
 * workOrderId String Id of the WorkOrder to be fetched. Use user1 for testing. 
 * returns WorkOrder
 **/
exports.getWorkOrderById = function(workOrderId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get list of WorkOrders
 *
 * returns List
 **/
exports.getWorkOrders = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
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
}, {
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
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update WorkOrder
 *
 * body WorkOrder WorkOrder object that needs to be updated
 * no response value expected for this operation
 **/
exports.updateWorkOrder = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

