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
var SalesOrdersRequestBuilder_1 = require("./SalesOrdersRequestBuilder");
var cloud_sdk_core_1 = require("@sap/cloud-sdk-core");
/**
 * This class represents the entity "SalesOrders" of service "CB_CUSTOMER_SRV".
 */
var SalesOrders = /** @class */ (function (_super) {
    __extends(SalesOrders, _super);
    function SalesOrders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `SalesOrders`.
     * @returns A builder that constructs instances of entity type `SalesOrders`.
     */
    SalesOrders.builder = function () {
        return cloud_sdk_core_1.Entity.entityBuilder(SalesOrders);
    };
    /**
     * Returns a request builder to construct requests for operations on the `SalesOrders` entity type.
     * @returns A `SalesOrders` request builder.
     */
    SalesOrders.requestBuilder = function () {
        return new SalesOrdersRequestBuilder_1.SalesOrdersRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SalesOrders`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SalesOrders`.
     */
    SalesOrders.customField = function (fieldName) {
        return cloud_sdk_core_1.Entity.customFieldSelector(fieldName, SalesOrders);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    SalesOrders.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for SalesOrders.
     */
    SalesOrders._entityName = 'SalesOrders';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SalesOrders.
     */
    SalesOrders._serviceName = 'CB_CUSTOMER_SRV';
    /**
     * Default url path for the according service.
     */
    SalesOrders._defaultServicePath = '/sap/opu/odata/sap/CB_CUSTOMER_SRV';
    return SalesOrders;
}(cloud_sdk_core_1.Entity));
exports.SalesOrders = SalesOrders;
(function (SalesOrders) {
    /**
     * Static representation of the [[vbelnDescr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOrders.VBELN_DESCR = new cloud_sdk_core_1.StringField('VBELN_DESCR', SalesOrders, 'Edm.String');
    /**
     * Static representation of the [[soldToParty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOrders.SOLD_TO_PARTY = new cloud_sdk_core_1.StringField('SoldToParty', SalesOrders, 'Edm.String');
    /**
     * Static representation of the [[purchaseOrderByCustomer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOrders.PURCHASE_ORDER_BY_CUSTOMER = new cloud_sdk_core_1.StringField('PurchaseOrderByCustomer', SalesOrders, 'Edm.String');
    /**
     * Static representation of the [[netAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOrders.NET_AMOUNT = new cloud_sdk_core_1.BigNumberField('NetAmount', SalesOrders, 'Edm.Decimal');
    /**
     * Static representation of the [[salesOrderDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOrders.SALES_ORDER_DATE = new cloud_sdk_core_1.DateField('SalesOrderDate', SalesOrders, 'Edm.DateTime');
    /**
     * Static representation of the [[shipToParty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOrders.SHIP_TO_PARTY = new cloud_sdk_core_1.StringField('ShipToParty', SalesOrders, 'Edm.String');
    /**
     * Static representation of the [[salesOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOrders.SALES_ORDER = new cloud_sdk_core_1.StringField('SalesOrder', SalesOrders, 'Edm.String');
    /**
     * Static representation of the [[soldToPartyName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOrders.SOLD_TO_PARTY_NAME = new cloud_sdk_core_1.StringField('SoldToPartyName', SalesOrders, 'Edm.String');
    /**
     * Static representation of the [[soldToPartyAdditionalName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOrders.SOLD_TO_PARTY_ADDITIONAL_NAME = new cloud_sdk_core_1.StringField('SoldToPartyAdditionalName', SalesOrders, 'Edm.String');
    /**
     * Static representation of the [[shipToPartyName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOrders.SHIP_TO_PARTY_NAME = new cloud_sdk_core_1.StringField('ShipToPartyName', SalesOrders, 'Edm.String');
    /**
     * Static representation of the [[shipToPartyAdditionalName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOrders.SHIP_TO_PARTY_ADDITIONAL_NAME = new cloud_sdk_core_1.StringField('ShipToPartyAdditionalName', SalesOrders, 'Edm.String');
    /**
     * Static representation of the [[overallSdProcessStatusDesc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOrders.OVERALL_SD_PROCESS_STATUS_DESC = new cloud_sdk_core_1.StringField('OverallSDProcessStatusDesc', SalesOrders, 'Edm.String');
    /**
     * Static representation of the [[overallDeliveryStatusDesc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOrders.OVERALL_DELIVERY_STATUS_DESC = new cloud_sdk_core_1.StringField('OverallDeliveryStatusDesc', SalesOrders, 'Edm.String');
    /**
     * Static representation of the [[totalCreditCheckStatusDesc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOrders.TOTAL_CREDIT_CHECK_STATUS_DESC = new cloud_sdk_core_1.StringField('TotalCreditCheckStatusDesc', SalesOrders, 'Edm.String');
    /**
     * Static representation of the [[abstkText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOrders.ABSTK_TEXT = new cloud_sdk_core_1.StringField('ABSTK_TEXT', SalesOrders, 'Edm.String');
    /**
     * Static representation of the [[augruText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOrders.AUGRU_TEXT = new cloud_sdk_core_1.StringField('AUGRU_TEXT', SalesOrders, 'Edm.String');
    /**
     * Static representation of the [[salesOrganization]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOrders.SALES_ORGANIZATION = new cloud_sdk_core_1.StringField('SalesOrganization', SalesOrders, 'Edm.String');
    /**
     * Static representation of the [[salesOrganizationName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOrders.SALES_ORGANIZATION_NAME = new cloud_sdk_core_1.StringField('SalesOrganizationName', SalesOrders, 'Edm.String');
    /**
     * Static representation of the [[distributionChannel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOrders.DISTRIBUTION_CHANNEL = new cloud_sdk_core_1.StringField('DistributionChannel', SalesOrders, 'Edm.String');
    /**
     * Static representation of the [[distributionChannelName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOrders.DISTRIBUTION_CHANNEL_NAME = new cloud_sdk_core_1.StringField('DistributionChannelName', SalesOrders, 'Edm.String');
    /**
     * Static representation of the [[division]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOrders.DIVISION = new cloud_sdk_core_1.StringField('Division', SalesOrders, 'Edm.String');
    /**
     * Static representation of the [[divisionName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOrders.DIVISION_NAME = new cloud_sdk_core_1.StringField('DivisionName', SalesOrders, 'Edm.String');
    /**
     * Static representation of the [[transactionCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOrders.TRANSACTION_CURRENCY = new cloud_sdk_core_1.StringField('TransactionCurrency', SalesOrders, 'Edm.String');
    /**
     * Static representation of the [[sdDocumentCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOrders.SD_DOCUMENT_CATEGORY = new cloud_sdk_core_1.StringField('SDDocumentCategory', SalesOrders, 'Edm.String');
    /**
     * Static representation of the [[requestedDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOrders.REQUESTED_DELIVERY_DATE = new cloud_sdk_core_1.DateField('RequestedDeliveryDate', SalesOrders, 'Edm.DateTime');
    /**
     * Static representation of the [[createdByUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOrders.CREATED_BY_USER = new cloud_sdk_core_1.StringField('CreatedByUser', SalesOrders, 'Edm.String');
    /**
     * Static representation of the [[academicTitleName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOrders.ACADEMIC_TITLE_NAME = new cloud_sdk_core_1.StringField('AcademicTitleName', SalesOrders, 'Edm.String');
    /**
     * Static representation of the [[createdByUserFirstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOrders.CREATED_BY_USER_FIRST_NAME = new cloud_sdk_core_1.StringField('CreatedByUserFirstName', SalesOrders, 'Edm.String');
    /**
     * Static representation of the [[createdByUserLastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOrders.CREATED_BY_USER_LAST_NAME = new cloud_sdk_core_1.StringField('CreatedByUserLastName', SalesOrders, 'Edm.String');
    /**
     * All fields of the SalesOrders entity.
     */
    SalesOrders._allFields = [
        SalesOrders.VBELN_DESCR,
        SalesOrders.SOLD_TO_PARTY,
        SalesOrders.PURCHASE_ORDER_BY_CUSTOMER,
        SalesOrders.NET_AMOUNT,
        SalesOrders.SALES_ORDER_DATE,
        SalesOrders.SHIP_TO_PARTY,
        SalesOrders.SALES_ORDER,
        SalesOrders.SOLD_TO_PARTY_NAME,
        SalesOrders.SOLD_TO_PARTY_ADDITIONAL_NAME,
        SalesOrders.SHIP_TO_PARTY_NAME,
        SalesOrders.SHIP_TO_PARTY_ADDITIONAL_NAME,
        SalesOrders.OVERALL_SD_PROCESS_STATUS_DESC,
        SalesOrders.OVERALL_DELIVERY_STATUS_DESC,
        SalesOrders.TOTAL_CREDIT_CHECK_STATUS_DESC,
        SalesOrders.ABSTK_TEXT,
        SalesOrders.AUGRU_TEXT,
        SalesOrders.SALES_ORGANIZATION,
        SalesOrders.SALES_ORGANIZATION_NAME,
        SalesOrders.DISTRIBUTION_CHANNEL,
        SalesOrders.DISTRIBUTION_CHANNEL_NAME,
        SalesOrders.DIVISION,
        SalesOrders.DIVISION_NAME,
        SalesOrders.TRANSACTION_CURRENCY,
        SalesOrders.SD_DOCUMENT_CATEGORY,
        SalesOrders.REQUESTED_DELIVERY_DATE,
        SalesOrders.CREATED_BY_USER,
        SalesOrders.ACADEMIC_TITLE_NAME,
        SalesOrders.CREATED_BY_USER_FIRST_NAME,
        SalesOrders.CREATED_BY_USER_LAST_NAME
    ];
    /**
     * All fields selector.
     */
    SalesOrders.ALL_FIELDS = new cloud_sdk_core_1.AllFields('*', SalesOrders);
    /**
     * All key fields of the SalesOrders entity.
     */
    SalesOrders._keyFields = [SalesOrders.SALES_ORDER];
    /**
     * Mapping of all key field names to the respective static field property SalesOrders.
     */
    SalesOrders._keys = SalesOrders._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(SalesOrders = exports.SalesOrders || (exports.SalesOrders = {}));
exports.SalesOrders = SalesOrders;
//# sourceMappingURL=SalesOrders.js.map