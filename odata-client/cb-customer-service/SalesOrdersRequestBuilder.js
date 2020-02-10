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
var SalesOrders_1 = require("./SalesOrders");
/**
 * Request builder class for operations supported on the [[SalesOrders]] entity.
 */
var SalesOrdersRequestBuilder = /** @class */ (function (_super) {
    __extends(SalesOrdersRequestBuilder, _super);
    function SalesOrdersRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `SalesOrders` entity based on its keys.
     * @param salesOrder Key property. See [[SalesOrders.salesOrder]].
     * @returns A request builder for creating requests to retrieve one `SalesOrders` entity based on its keys.
     */
    SalesOrdersRequestBuilder.prototype.getByKey = function (salesOrder) {
        return new cloud_sdk_core_1.GetByKeyRequestBuilder(SalesOrders_1.SalesOrders, { SalesOrder: salesOrder });
    };
    /**
     * Returns a request builder for querying all `SalesOrders` entities.
     * @returns A request builder for creating requests to retrieve all `SalesOrders` entities.
     */
    SalesOrdersRequestBuilder.prototype.getAll = function () {
        return new cloud_sdk_core_1.GetAllRequestBuilder(SalesOrders_1.SalesOrders);
    };
    return SalesOrdersRequestBuilder;
}(cloud_sdk_core_1.RequestBuilder));
exports.SalesOrdersRequestBuilder = SalesOrdersRequestBuilder;
//# sourceMappingURL=SalesOrdersRequestBuilder.js.map