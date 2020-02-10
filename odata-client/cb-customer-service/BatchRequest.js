"use strict";
/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var cloud_sdk_core_1 = require("@sap/cloud-sdk-core");
var index_1 = require("./index");
/**
 * Batch builder for operations supported on the Cb Customer Service.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
function batch() {
    var requests = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        requests[_i] = arguments[_i];
    }
    return new cloud_sdk_core_1.ODataBatchRequestBuilder(exports.defaultCbCustomerServicePath, requests, map);
}
exports.batch = batch;
/**
 * Change set constructor consists of write operations supported on the Cb Customer Service.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
function changeset() {
    var requests = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        requests[_i] = arguments[_i];
    }
    return new cloud_sdk_core_1.ODataBatchChangeSet(requests);
}
exports.changeset = changeset;
exports.defaultCbCustomerServicePath = '/sap/opu/odata/sap/CB_CUSTOMER_SRV';
var map = { 'BillingDocument': index_1.BillingDocuments, 'CONTACT_PERSON': index_1.Contact_PersoNs, 'CUSTOMER_BANK_ACCOUN': index_1.Customer_Bank_AccouNs, 'CUSTOMER_COMP_CODE': index_1.Customer_Comp_CodEs, 'CUSTOMER_PROJECT_H': index_1.Customer_Project_Hs, 'CUSTOMER_SALES_AREA': index_1.Customer_Sales_AreAs, 'Customer': index_1.Customers, 'SalesContract': index_1.SalesContracts, 'SalesGroupContract': index_1.SalesGroupContracts, 'SalesOrder': index_1.SalesOrders, 'SalesQuotation': index_1.SalesQuotations };
//# sourceMappingURL=BatchRequest.js.map