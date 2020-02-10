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
var SalesContracts_1 = require("./SalesContracts");
/**
 * Request builder class for operations supported on the [[SalesContracts]] entity.
 */
var SalesContractsRequestBuilder = /** @class */ (function (_super) {
    __extends(SalesContractsRequestBuilder, _super);
    function SalesContractsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `SalesContracts` entity based on its keys.
     * @param salesContract Key property. See [[SalesContracts.salesContract]].
     * @returns A request builder for creating requests to retrieve one `SalesContracts` entity based on its keys.
     */
    SalesContractsRequestBuilder.prototype.getByKey = function (salesContract) {
        return new cloud_sdk_core_1.GetByKeyRequestBuilder(SalesContracts_1.SalesContracts, { SalesContract: salesContract });
    };
    /**
     * Returns a request builder for querying all `SalesContracts` entities.
     * @returns A request builder for creating requests to retrieve all `SalesContracts` entities.
     */
    SalesContractsRequestBuilder.prototype.getAll = function () {
        return new cloud_sdk_core_1.GetAllRequestBuilder(SalesContracts_1.SalesContracts);
    };
    return SalesContractsRequestBuilder;
}(cloud_sdk_core_1.RequestBuilder));
exports.SalesContractsRequestBuilder = SalesContractsRequestBuilder;
//# sourceMappingURL=SalesContractsRequestBuilder.js.map