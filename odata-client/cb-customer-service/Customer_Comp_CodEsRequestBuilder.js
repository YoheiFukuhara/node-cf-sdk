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
var Customer_Comp_CodEs_1 = require("./Customer_Comp_CodEs");
/**
 * Request builder class for operations supported on the [[Customer_Comp_CodEs]] entity.
 */
var Customer_Comp_CodEsRequestBuilder = /** @class */ (function (_super) {
    __extends(Customer_Comp_CodEsRequestBuilder, _super);
    function Customer_Comp_CodEsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Customer_Comp_CodEs` entity based on its keys.
     * @param customerCc Key property. See [[Customer_Comp_CodEs.customerCc]].
     * @param companyCode Key property. See [[Customer_Comp_CodEs.companyCode]].
     * @returns A request builder for creating requests to retrieve one `Customer_Comp_CodEs` entity based on its keys.
     */
    Customer_Comp_CodEsRequestBuilder.prototype.getByKey = function (customerCc, companyCode) {
        return new cloud_sdk_core_1.GetByKeyRequestBuilder(Customer_Comp_CodEs_1.Customer_Comp_CodEs, {
            CustomerCC: customerCc,
            CompanyCode: companyCode
        });
    };
    /**
     * Returns a request builder for querying all `Customer_Comp_CodEs` entities.
     * @returns A request builder for creating requests to retrieve all `Customer_Comp_CodEs` entities.
     */
    Customer_Comp_CodEsRequestBuilder.prototype.getAll = function () {
        return new cloud_sdk_core_1.GetAllRequestBuilder(Customer_Comp_CodEs_1.Customer_Comp_CodEs);
    };
    return Customer_Comp_CodEsRequestBuilder;
}(cloud_sdk_core_1.RequestBuilder));
exports.Customer_Comp_CodEsRequestBuilder = Customer_Comp_CodEsRequestBuilder;
//# sourceMappingURL=Customer_Comp_CodEsRequestBuilder.js.map