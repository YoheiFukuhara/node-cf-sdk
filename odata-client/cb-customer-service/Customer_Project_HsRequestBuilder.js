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
var Customer_Project_Hs_1 = require("./Customer_Project_Hs");
/**
 * Request builder class for operations supported on the [[Customer_Project_Hs]] entity.
 */
var Customer_Project_HsRequestBuilder = /** @class */ (function (_super) {
    __extends(Customer_Project_HsRequestBuilder, _super);
    function Customer_Project_HsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Customer_Project_Hs` entity based on its keys.
     * @param customerProjectUuid Key property. See [[Customer_Project_Hs.customerProjectUuid]].
     * @returns A request builder for creating requests to retrieve one `Customer_Project_Hs` entity based on its keys.
     */
    Customer_Project_HsRequestBuilder.prototype.getByKey = function (customerProjectUuid) {
        return new cloud_sdk_core_1.GetByKeyRequestBuilder(Customer_Project_Hs_1.Customer_Project_Hs, { CustomerProjectUUID: customerProjectUuid });
    };
    /**
     * Returns a request builder for querying all `Customer_Project_Hs` entities.
     * @returns A request builder for creating requests to retrieve all `Customer_Project_Hs` entities.
     */
    Customer_Project_HsRequestBuilder.prototype.getAll = function () {
        return new cloud_sdk_core_1.GetAllRequestBuilder(Customer_Project_Hs_1.Customer_Project_Hs);
    };
    return Customer_Project_HsRequestBuilder;
}(cloud_sdk_core_1.RequestBuilder));
exports.Customer_Project_HsRequestBuilder = Customer_Project_HsRequestBuilder;
//# sourceMappingURL=Customer_Project_HsRequestBuilder.js.map