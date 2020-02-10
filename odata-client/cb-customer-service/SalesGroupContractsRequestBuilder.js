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
var SalesGroupContracts_1 = require("./SalesGroupContracts");
/**
 * Request builder class for operations supported on the [[SalesGroupContracts]] entity.
 */
var SalesGroupContractsRequestBuilder = /** @class */ (function (_super) {
    __extends(SalesGroupContractsRequestBuilder, _super);
    function SalesGroupContractsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `SalesGroupContracts` entity based on its keys.
     * @param salesGroupContract Key property. See [[SalesGroupContracts.salesGroupContract]].
     * @returns A request builder for creating requests to retrieve one `SalesGroupContracts` entity based on its keys.
     */
    SalesGroupContractsRequestBuilder.prototype.getByKey = function (salesGroupContract) {
        return new cloud_sdk_core_1.GetByKeyRequestBuilder(SalesGroupContracts_1.SalesGroupContracts, { SalesGroupContract: salesGroupContract });
    };
    /**
     * Returns a request builder for querying all `SalesGroupContracts` entities.
     * @returns A request builder for creating requests to retrieve all `SalesGroupContracts` entities.
     */
    SalesGroupContractsRequestBuilder.prototype.getAll = function () {
        return new cloud_sdk_core_1.GetAllRequestBuilder(SalesGroupContracts_1.SalesGroupContracts);
    };
    return SalesGroupContractsRequestBuilder;
}(cloud_sdk_core_1.RequestBuilder));
exports.SalesGroupContractsRequestBuilder = SalesGroupContractsRequestBuilder;
//# sourceMappingURL=SalesGroupContractsRequestBuilder.js.map