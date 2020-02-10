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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Customer_Sales_AreAsRequestBuilder_1 = require("./Customer_Sales_AreAsRequestBuilder");
var cloud_sdk_core_1 = require("@sap/cloud-sdk-core");
/**
 * This class represents the entity "CUSTOMER_SALES_AREAs" of service "CB_CUSTOMER_SRV".
 */
var Customer_Sales_AreAs = /** @class */ (function (_super) {
    __extends(Customer_Sales_AreAs, _super);
    function Customer_Sales_AreAs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Customer_Sales_AreAs`.
     * @returns A builder that constructs instances of entity type `Customer_Sales_AreAs`.
     */
    Customer_Sales_AreAs.builder = function () {
        return cloud_sdk_core_1.Entity.entityBuilder(Customer_Sales_AreAs);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Customer_Sales_AreAs` entity type.
     * @returns A `Customer_Sales_AreAs` request builder.
     */
    Customer_Sales_AreAs.requestBuilder = function () {
        return new Customer_Sales_AreAsRequestBuilder_1.Customer_Sales_AreAsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Customer_Sales_AreAs`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Customer_Sales_AreAs`.
     */
    Customer_Sales_AreAs.customField = function (fieldName) {
        return cloud_sdk_core_1.Entity.customFieldSelector(fieldName, Customer_Sales_AreAs);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Customer_Sales_AreAs.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Customer_Sales_AreAs.
     */
    Customer_Sales_AreAs._entityName = 'CUSTOMER_SALES_AREAs';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Customer_Sales_AreAs.
     */
    Customer_Sales_AreAs._serviceName = 'CB_CUSTOMER_SRV';
    /**
     * Default url path for the according service.
     */
    Customer_Sales_AreAs._defaultServicePath = '/sap/opu/odata/sap/CB_CUSTOMER_SRV';
    return Customer_Sales_AreAs;
}(cloud_sdk_core_1.Entity));
exports.Customer_Sales_AreAs = Customer_Sales_AreAs;
(function (Customer_Sales_AreAs) {
    /**
     * Static representation of the [[salesOrganization]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Sales_AreAs.SALES_ORGANIZATION = new cloud_sdk_core_1.StringField('SalesOrganization', Customer_Sales_AreAs, 'Edm.String');
    /**
     * Static representation of the [[salesOrganizationName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Sales_AreAs.SALES_ORGANIZATION_NAME = new cloud_sdk_core_1.StringField('SalesOrganizationName', Customer_Sales_AreAs, 'Edm.String');
    /**
     * Static representation of the [[distributionChannel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Sales_AreAs.DISTRIBUTION_CHANNEL = new cloud_sdk_core_1.StringField('DistributionChannel', Customer_Sales_AreAs, 'Edm.String');
    /**
     * Static representation of the [[deliveryBlockDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Sales_AreAs.DELIVERY_BLOCK_DESCRIPTION = new cloud_sdk_core_1.StringField('DeliveryBlockDescription', Customer_Sales_AreAs, 'Edm.String');
    /**
     * Static representation of the [[billingBlockDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Sales_AreAs.BILLING_BLOCK_DESCRIPTION = new cloud_sdk_core_1.StringField('BillingBlockDescription', Customer_Sales_AreAs, 'Edm.String');
    /**
     * Static representation of the [[orderBlockDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Sales_AreAs.ORDER_BLOCK_DESCRIPTION = new cloud_sdk_core_1.StringField('OrderBlockDescription', Customer_Sales_AreAs, 'Edm.String');
    /**
     * Static representation of the [[distributionChannelName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Sales_AreAs.DISTRIBUTION_CHANNEL_NAME = new cloud_sdk_core_1.StringField('DistributionChannelName', Customer_Sales_AreAs, 'Edm.String');
    /**
     * Static representation of the [[division]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Sales_AreAs.DIVISION = new cloud_sdk_core_1.StringField('Division', Customer_Sales_AreAs, 'Edm.String');
    /**
     * Static representation of the [[divisionName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Sales_AreAs.DIVISION_NAME = new cloud_sdk_core_1.StringField('DivisionName', Customer_Sales_AreAs, 'Edm.String');
    /**
     * Static representation of the [[salesOffice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Sales_AreAs.SALES_OFFICE = new cloud_sdk_core_1.StringField('SalesOffice', Customer_Sales_AreAs, 'Edm.String');
    /**
     * Static representation of the [[salesOfficeName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Sales_AreAs.SALES_OFFICE_NAME = new cloud_sdk_core_1.StringField('SalesOfficeName', Customer_Sales_AreAs, 'Edm.String');
    /**
     * Static representation of the [[salesGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Sales_AreAs.SALES_GROUP = new cloud_sdk_core_1.StringField('SalesGroup', Customer_Sales_AreAs, 'Edm.String');
    /**
     * Static representation of the [[salesGroupName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Sales_AreAs.SALES_GROUP_NAME = new cloud_sdk_core_1.StringField('SalesGroupName', Customer_Sales_AreAs, 'Edm.String');
    /**
     * Static representation of the [[customerGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Sales_AreAs.CUSTOMER_GROUP = new cloud_sdk_core_1.StringField('CustomerGroup', Customer_Sales_AreAs, 'Edm.String');
    /**
     * Static representation of the [[customerGroupName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Sales_AreAs.CUSTOMER_GROUP_NAME = new cloud_sdk_core_1.StringField('CustomerGroupName', Customer_Sales_AreAs, 'Edm.String');
    /**
     * Static representation of the [[customerAbcClassification]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Sales_AreAs.CUSTOMER_ABC_CLASSIFICATION = new cloud_sdk_core_1.StringField('CustomerABCClassification', Customer_Sales_AreAs, 'Edm.String');
    /**
     * All fields of the Customer_Sales_AreAs entity.
     */
    Customer_Sales_AreAs._allFields = [
        Customer_Sales_AreAs.SALES_ORGANIZATION,
        Customer_Sales_AreAs.SALES_ORGANIZATION_NAME,
        Customer_Sales_AreAs.DISTRIBUTION_CHANNEL,
        Customer_Sales_AreAs.DELIVERY_BLOCK_DESCRIPTION,
        Customer_Sales_AreAs.BILLING_BLOCK_DESCRIPTION,
        Customer_Sales_AreAs.ORDER_BLOCK_DESCRIPTION,
        Customer_Sales_AreAs.DISTRIBUTION_CHANNEL_NAME,
        Customer_Sales_AreAs.DIVISION,
        Customer_Sales_AreAs.DIVISION_NAME,
        Customer_Sales_AreAs.SALES_OFFICE,
        Customer_Sales_AreAs.SALES_OFFICE_NAME,
        Customer_Sales_AreAs.SALES_GROUP,
        Customer_Sales_AreAs.SALES_GROUP_NAME,
        Customer_Sales_AreAs.CUSTOMER_GROUP,
        Customer_Sales_AreAs.CUSTOMER_GROUP_NAME,
        Customer_Sales_AreAs.CUSTOMER_ABC_CLASSIFICATION
    ];
    /**
     * All fields selector.
     */
    Customer_Sales_AreAs.ALL_FIELDS = new cloud_sdk_core_1.AllFields('*', Customer_Sales_AreAs);
    /**
     * All key fields of the Customer_Sales_AreAs entity.
     */
    Customer_Sales_AreAs._keyFields = [Customer_Sales_AreAs.SALES_ORGANIZATION, Customer_Sales_AreAs.DISTRIBUTION_CHANNEL, Customer_Sales_AreAs.DIVISION];
    /**
     * Mapping of all key field names to the respective static field property Customer_Sales_AreAs.
     */
    Customer_Sales_AreAs._keys = Customer_Sales_AreAs._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Customer_Sales_AreAs = exports.Customer_Sales_AreAs || (exports.Customer_Sales_AreAs = {}));
exports.Customer_Sales_AreAs = Customer_Sales_AreAs;
//# sourceMappingURL=Customer_Sales_AreAs.js.map