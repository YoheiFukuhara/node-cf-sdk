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
var Customer_Sales_AreAs_1 = require("./Customer_Sales_AreAs");
/**
 * Request builder class for operations supported on the [[Customer_Sales_AreAs]] entity.
 */
var Customer_Sales_AreAsRequestBuilder = /** @class */ (function (_super) {
    __extends(Customer_Sales_AreAsRequestBuilder, _super);
    function Customer_Sales_AreAsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Customer_Sales_AreAs` entity based on its keys.
     * @param salesOrganization Key property. See [[Customer_Sales_AreAs.salesOrganization]].
     * @param distributionChannel Key property. See [[Customer_Sales_AreAs.distributionChannel]].
     * @param division Key property. See [[Customer_Sales_AreAs.division]].
     * @returns A request builder for creating requests to retrieve one `Customer_Sales_AreAs` entity based on its keys.
     */
    Customer_Sales_AreAsRequestBuilder.prototype.getByKey = function (salesOrganization, distributionChannel, division) {
        return new cloud_sdk_core_1.GetByKeyRequestBuilder(Customer_Sales_AreAs_1.Customer_Sales_AreAs, {
            SalesOrganization: salesOrganization,
            DistributionChannel: distributionChannel,
            Division: division
        });
    };
    /**
     * Returns a request builder for querying all `Customer_Sales_AreAs` entities.
     * @returns A request builder for creating requests to retrieve all `Customer_Sales_AreAs` entities.
     */
    Customer_Sales_AreAsRequestBuilder.prototype.getAll = function () {
        return new cloud_sdk_core_1.GetAllRequestBuilder(Customer_Sales_AreAs_1.Customer_Sales_AreAs);
    };
    return Customer_Sales_AreAsRequestBuilder;
}(cloud_sdk_core_1.RequestBuilder));
exports.Customer_Sales_AreAsRequestBuilder = Customer_Sales_AreAsRequestBuilder;
//# sourceMappingURL=Customer_Sales_AreAsRequestBuilder.js.map