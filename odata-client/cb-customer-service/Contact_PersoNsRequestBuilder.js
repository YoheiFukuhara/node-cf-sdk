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
var Contact_PersoNs_1 = require("./Contact_PersoNs");
/**
 * Request builder class for operations supported on the [[Contact_PersoNs]] entity.
 */
var Contact_PersoNsRequestBuilder = /** @class */ (function (_super) {
    __extends(Contact_PersoNsRequestBuilder, _super);
    function Contact_PersoNsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Contact_PersoNs` entity based on its keys.
     * @param contactPersonNumber Key property. See [[Contact_PersoNs.contactPersonNumber]].
     * @returns A request builder for creating requests to retrieve one `Contact_PersoNs` entity based on its keys.
     */
    Contact_PersoNsRequestBuilder.prototype.getByKey = function (contactPersonNumber) {
        return new cloud_sdk_core_1.GetByKeyRequestBuilder(Contact_PersoNs_1.Contact_PersoNs, { ContactPersonNumber: contactPersonNumber });
    };
    /**
     * Returns a request builder for querying all `Contact_PersoNs` entities.
     * @returns A request builder for creating requests to retrieve all `Contact_PersoNs` entities.
     */
    Contact_PersoNsRequestBuilder.prototype.getAll = function () {
        return new cloud_sdk_core_1.GetAllRequestBuilder(Contact_PersoNs_1.Contact_PersoNs);
    };
    return Contact_PersoNsRequestBuilder;
}(cloud_sdk_core_1.RequestBuilder));
exports.Contact_PersoNsRequestBuilder = Contact_PersoNsRequestBuilder;
//# sourceMappingURL=Contact_PersoNsRequestBuilder.js.map