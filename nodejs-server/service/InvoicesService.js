'use strict';


/**
 * Generate new Invoice
 *
 * body Invoice Invoice object that needs to be added
 * no response value expected for this operation
 **/
exports.addInvoice = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get Invoices for the location
 *
 * locationId String Id of the Location to be fetched.
 * returns Invoice
 **/
exports.getInvoicesByLocation = function(locationId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "trip" : {
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
  },
  "additionalCharges" : 6.027456183070403,
  "vehicleOwner" : "vehicleOwner",
  "amountToBePaid" : 5.962133916683182,
  "invoiceId" : 0,
  "invoiceNo" : "invoiceNo",
  "deductions" : 1.4658129805029452,
  "paymentStatus" : "PAID"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Invoices for the vehicle owner
 *
 * systemUserId String Id of the VehicleOwner to be fetched.
 * returns Invoice
 **/
exports.getInvoicesByVehicleOwner = function(systemUserId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "trip" : {
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
  },
  "additionalCharges" : 6.027456183070403,
  "vehicleOwner" : "vehicleOwner",
  "amountToBePaid" : 5.962133916683182,
  "invoiceId" : 0,
  "invoiceNo" : "invoiceNo",
  "deductions" : 1.4658129805029452,
  "paymentStatus" : "PAID"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update Invoice Paid
 *
 * invoiceId String Id of the Invoice to be paid
 * no response value expected for this operation
 **/
exports.updateInvoicePaid = function(invoiceId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

