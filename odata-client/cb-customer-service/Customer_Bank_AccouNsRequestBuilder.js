"use strict";
/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var cloud_sdk_core_1 = require("@sap/cloud-sdk-core");
var Customer_Bank_AccouNs_1 = require("./Customer_Bank_AccouNs");
/**
 * Request builder class for operations supported on the [[Customer_Bank_AccouNs]] entity.
 */
var Customer_Bank_AccouNsRequestBuilder = /** @class */ (function (_super) {
    __extends(Customer_Bank_AccouNsRequestBuilder, _super);
    function Customer_Bank_AccouNsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Customer_Bank_AccouNs` entity based on its keys.
     * @param country Key property. See [[Customer_Bank_AccouNs.country]].
     * @param bankNumber Key property. See [[Customer_Bank_AccouNs.bankNumber]].
     * @param bankAccount Key property. See [[Customer_Bank_AccouNs.bankAccount]].
     * @returns A request builder for creating requests to retrieve one `Customer_Bank_AccouNs` entity based on its keys.
     */
    Customer_Bank_AccouNsRequestBuilder.prototype.getByKey = function (country, bankNumber, bankAccount) {
        return new cloud_sdk_core_1.GetByKeyRequestBuilder(Customer_Bank_AccouNs_1.Customer_Bank_AccouNs, {
            Country: country,
            BankNumber: bankNumber,
            BankAccount: bankAccount
        });
    };
    /**
     * Returns a request builder for querying all `Customer_Bank_AccouNs` entities.
     * @returns A request builder for creating requests to retrieve all `Customer_Bank_AccouNs` entities.
     */
    Customer_Bank_AccouNsRequestBuilder.prototype.getAll = function () {
        return new cloud_sdk_core_1.GetAllRequestBuilder(Customer_Bank_AccouNs_1.Customer_Bank_AccouNs);
    };
    return Customer_Bank_AccouNsRequestBuilder;
}(cloud_sdk_core_1.RequestBuilder));
exports.Customer_Bank_AccouNsRequestBuilder = Customer_Bank_AccouNsRequestBuilder;
//# sourceMappingURL=Customer_Bank_AccouNsRequestBuilder.js.map