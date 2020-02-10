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
var BillingDocuments_1 = require("./BillingDocuments");
/**
 * Request builder class for operations supported on the [[BillingDocuments]] entity.
 */
var BillingDocumentsRequestBuilder = /** @class */ (function (_super) {
    __extends(BillingDocumentsRequestBuilder, _super);
    function BillingDocumentsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `BillingDocuments` entity based on its keys.
     * @param billingDocument Key property. See [[BillingDocuments.billingDocument]].
     * @returns A request builder for creating requests to retrieve one `BillingDocuments` entity based on its keys.
     */
    BillingDocumentsRequestBuilder.prototype.getByKey = function (billingDocument) {
        return new cloud_sdk_core_1.GetByKeyRequestBuilder(BillingDocuments_1.BillingDocuments, { BillingDocument: billingDocument });
    };
    /**
     * Returns a request builder for querying all `BillingDocuments` entities.
     * @returns A request builder for creating requests to retrieve all `BillingDocuments` entities.
     */
    BillingDocumentsRequestBuilder.prototype.getAll = function () {
        return new cloud_sdk_core_1.GetAllRequestBuilder(BillingDocuments_1.BillingDocuments);
    };
    return BillingDocumentsRequestBuilder;
}(cloud_sdk_core_1.RequestBuilder));
exports.BillingDocumentsRequestBuilder = BillingDocumentsRequestBuilder;
//# sourceMappingURL=BillingDocumentsRequestBuilder.js.map