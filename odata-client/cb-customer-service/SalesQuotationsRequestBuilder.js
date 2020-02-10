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
var SalesQuotations_1 = require("./SalesQuotations");
/**
 * Request builder class for operations supported on the [[SalesQuotations]] entity.
 */
var SalesQuotationsRequestBuilder = /** @class */ (function (_super) {
    __extends(SalesQuotationsRequestBuilder, _super);
    function SalesQuotationsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `SalesQuotations` entity based on its keys.
     * @param salesQuotation Key property. See [[SalesQuotations.salesQuotation]].
     * @returns A request builder for creating requests to retrieve one `SalesQuotations` entity based on its keys.
     */
    SalesQuotationsRequestBuilder.prototype.getByKey = function (salesQuotation) {
        return new cloud_sdk_core_1.GetByKeyRequestBuilder(SalesQuotations_1.SalesQuotations, { SalesQuotation: salesQuotation });
    };
    /**
     * Returns a request builder for querying all `SalesQuotations` entities.
     * @returns A request builder for creating requests to retrieve all `SalesQuotations` entities.
     */
    SalesQuotationsRequestBuilder.prototype.getAll = function () {
        return new cloud_sdk_core_1.GetAllRequestBuilder(SalesQuotations_1.SalesQuotations);
    };
    return SalesQuotationsRequestBuilder;
}(cloud_sdk_core_1.RequestBuilder));
exports.SalesQuotationsRequestBuilder = SalesQuotationsRequestBuilder;
//# sourceMappingURL=SalesQuotationsRequestBuilder.js.map