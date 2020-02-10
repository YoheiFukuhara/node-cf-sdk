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
var Customers_1 = require("./Customers");
/**
 * Request builder class for operations supported on the [[Customers]] entity.
 */
var CustomersRequestBuilder = /** @class */ (function (_super) {
    __extends(CustomersRequestBuilder, _super);
    function CustomersRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Customers` entity based on its keys.
     * @param customer Key property. See [[Customers.customer]].
     * @returns A request builder for creating requests to retrieve one `Customers` entity based on its keys.
     */
    CustomersRequestBuilder.prototype.getByKey = function (customer) {
        return new cloud_sdk_core_1.GetByKeyRequestBuilder(Customers_1.Customers, { Customer: customer });
    };
    /**
     * Returns a request builder for querying all `Customers` entities.
     * @returns A request builder for creating requests to retrieve all `Customers` entities.
     */
    CustomersRequestBuilder.prototype.getAll = function () {
        return new cloud_sdk_core_1.GetAllRequestBuilder(Customers_1.Customers);
    };
    return CustomersRequestBuilder;
}(cloud_sdk_core_1.RequestBuilder));
exports.CustomersRequestBuilder = CustomersRequestBuilder;
//# sourceMappingURL=CustomersRequestBuilder.js.map