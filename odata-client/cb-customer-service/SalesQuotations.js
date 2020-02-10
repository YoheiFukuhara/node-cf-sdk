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
var SalesQuotationsRequestBuilder_1 = require("./SalesQuotationsRequestBuilder");
var cloud_sdk_core_1 = require("@sap/cloud-sdk-core");
/**
 * This class represents the entity "SalesQuotations" of service "CB_CUSTOMER_SRV".
 */
var SalesQuotations = /** @class */ (function (_super) {
    __extends(SalesQuotations, _super);
    function SalesQuotations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `SalesQuotations`.
     * @returns A builder that constructs instances of entity type `SalesQuotations`.
     */
    SalesQuotations.builder = function () {
        return cloud_sdk_core_1.Entity.entityBuilder(SalesQuotations);
    };
    /**
     * Returns a request builder to construct requests for operations on the `SalesQuotations` entity type.
     * @returns A `SalesQuotations` request builder.
     */
    SalesQuotations.requestBuilder = function () {
        return new SalesQuotationsRequestBuilder_1.SalesQuotationsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SalesQuotations`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SalesQuotations`.
     */
    SalesQuotations.customField = function (fieldName) {
        return cloud_sdk_core_1.Entity.customFieldSelector(fieldName, SalesQuotations);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    SalesQuotations.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for SalesQuotations.
     */
    SalesQuotations._entityName = 'SalesQuotations';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SalesQuotations.
     */
    SalesQuotations._serviceName = 'CB_CUSTOMER_SRV';
    /**
     * Default url path for the according service.
     */
    SalesQuotations._defaultServicePath = '/sap/opu/odata/sap/CB_CUSTOMER_SRV';
    return SalesQuotations;
}(cloud_sdk_core_1.Entity));
exports.SalesQuotations = SalesQuotations;
(function (SalesQuotations) {
    /**
     * Static representation of the [[vbelnDescr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesQuotations.VBELN_DESCR = new cloud_sdk_core_1.StringField('VBELN_DESCR', SalesQuotations, 'Edm.String');
    /**
     * Static representation of the [[soldToParty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesQuotations.SOLD_TO_PARTY = new cloud_sdk_core_1.StringField('SoldToParty', SalesQuotations, 'Edm.String');
    /**
     * Static representation of the [[salesQuotation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesQuotations.SALES_QUOTATION = new cloud_sdk_core_1.StringField('SalesQuotation', SalesQuotations, 'Edm.String');
    /**
     * Static representation of the [[soldToPartyName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesQuotations.SOLD_TO_PARTY_NAME = new cloud_sdk_core_1.StringField('SoldToPartyName', SalesQuotations, 'Edm.String');
    /**
     * Static representation of the [[soldToPartyAdditionalName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesQuotations.SOLD_TO_PARTY_ADDITIONAL_NAME = new cloud_sdk_core_1.StringField('SoldToPartyAdditionalName', SalesQuotations, 'Edm.String');
    /**
     * Static representation of the [[shipToParty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesQuotations.SHIP_TO_PARTY = new cloud_sdk_core_1.StringField('ShipToParty', SalesQuotations, 'Edm.String');
    /**
     * Static representation of the [[purchaseOrderByCustomer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesQuotations.PURCHASE_ORDER_BY_CUSTOMER = new cloud_sdk_core_1.StringField('PurchaseOrderByCustomer', SalesQuotations, 'Edm.String');
    /**
     * Static representation of the [[salesQuotationNetAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesQuotations.SALES_QUOTATION_NET_AMOUNT = new cloud_sdk_core_1.BigNumberField('SalesQuotationNetAmount', SalesQuotations, 'Edm.Decimal');
    /**
     * Static representation of the [[salesQuotationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesQuotations.SALES_QUOTATION_DATE = new cloud_sdk_core_1.DateField('SalesQuotationDate', SalesQuotations, 'Edm.DateTime');
    /**
     * Static representation of the [[transactionCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesQuotations.TRANSACTION_CURRENCY = new cloud_sdk_core_1.StringField('TransactionCurrency', SalesQuotations, 'Edm.String');
    /**
     * Static representation of the [[salesQuotationValdtyStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesQuotations.SALES_QUOTATION_VALDTY_START_DATE = new cloud_sdk_core_1.DateField('SalesQuotationValdtyStartDate', SalesQuotations, 'Edm.DateTime');
    /**
     * Static representation of the [[salesQuotationValidityEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesQuotations.SALES_QUOTATION_VALIDITY_END_DATE = new cloud_sdk_core_1.DateField('SalesQuotationValidityEndDate', SalesQuotations, 'Edm.DateTime');
    /**
     * Static representation of the [[overallSdProcessStatusDesc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesQuotations.OVERALL_SD_PROCESS_STATUS_DESC = new cloud_sdk_core_1.StringField('OverallSDProcessStatusDesc', SalesQuotations, 'Edm.String');
    /**
     * Static representation of the [[ovrlSdDocumentRejectionStsDesc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesQuotations.OVRL_SD_DOCUMENT_REJECTION_STS_DESC = new cloud_sdk_core_1.StringField('OvrlSDDocumentRejectionStsDesc', SalesQuotations, 'Edm.String');
    /**
     * Static representation of the [[shipToPartyName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesQuotations.SHIP_TO_PARTY_NAME = new cloud_sdk_core_1.StringField('ShipToPartyName', SalesQuotations, 'Edm.String');
    /**
     * Static representation of the [[shipToPartyAdditionalName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesQuotations.SHIP_TO_PARTY_ADDITIONAL_NAME = new cloud_sdk_core_1.StringField('ShipToPartyAdditionalName', SalesQuotations, 'Edm.String');
    /**
     * Static representation of the [[salesOrganization]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesQuotations.SALES_ORGANIZATION = new cloud_sdk_core_1.StringField('SalesOrganization', SalesQuotations, 'Edm.String');
    /**
     * Static representation of the [[salesOrganizationName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesQuotations.SALES_ORGANIZATION_NAME = new cloud_sdk_core_1.StringField('SalesOrganizationName', SalesQuotations, 'Edm.String');
    /**
     * Static representation of the [[distributionChannel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesQuotations.DISTRIBUTION_CHANNEL = new cloud_sdk_core_1.StringField('DistributionChannel', SalesQuotations, 'Edm.String');
    /**
     * Static representation of the [[division]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesQuotations.DIVISION = new cloud_sdk_core_1.StringField('Division', SalesQuotations, 'Edm.String');
    /**
     * Static representation of the [[createdByUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesQuotations.CREATED_BY_USER = new cloud_sdk_core_1.StringField('CreatedByUser', SalesQuotations, 'Edm.String');
    /**
     * Static representation of the [[distributionChannelName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesQuotations.DISTRIBUTION_CHANNEL_NAME = new cloud_sdk_core_1.StringField('DistributionChannelName', SalesQuotations, 'Edm.String');
    /**
     * Static representation of the [[academicTitleName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesQuotations.ACADEMIC_TITLE_NAME = new cloud_sdk_core_1.StringField('AcademicTitleName', SalesQuotations, 'Edm.String');
    /**
     * Static representation of the [[createdByUserFirstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesQuotations.CREATED_BY_USER_FIRST_NAME = new cloud_sdk_core_1.StringField('CreatedByUserFirstName', SalesQuotations, 'Edm.String');
    /**
     * Static representation of the [[createdByUserLastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesQuotations.CREATED_BY_USER_LAST_NAME = new cloud_sdk_core_1.StringField('CreatedByUserLastName', SalesQuotations, 'Edm.String');
    /**
     * Static representation of the [[divisionName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesQuotations.DIVISION_NAME = new cloud_sdk_core_1.StringField('DivisionName', SalesQuotations, 'Edm.String');
    /**
     * Static representation of the [[sdDocumentCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesQuotations.SD_DOCUMENT_CATEGORY = new cloud_sdk_core_1.StringField('SDDocumentCategory', SalesQuotations, 'Edm.String');
    /**
     * Static representation of the [[vdatu]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesQuotations.VDATU = new cloud_sdk_core_1.DateField('VDATU', SalesQuotations, 'Edm.DateTime');
    /**
     * All fields of the SalesQuotations entity.
     */
    SalesQuotations._allFields = [
        SalesQuotations.VBELN_DESCR,
        SalesQuotations.SOLD_TO_PARTY,
        SalesQuotations.SALES_QUOTATION,
        SalesQuotations.SOLD_TO_PARTY_NAME,
        SalesQuotations.SOLD_TO_PARTY_ADDITIONAL_NAME,
        SalesQuotations.SHIP_TO_PARTY,
        SalesQuotations.PURCHASE_ORDER_BY_CUSTOMER,
        SalesQuotations.SALES_QUOTATION_NET_AMOUNT,
        SalesQuotations.SALES_QUOTATION_DATE,
        SalesQuotations.TRANSACTION_CURRENCY,
        SalesQuotations.SALES_QUOTATION_VALDTY_START_DATE,
        SalesQuotations.SALES_QUOTATION_VALIDITY_END_DATE,
        SalesQuotations.OVERALL_SD_PROCESS_STATUS_DESC,
        SalesQuotations.OVRL_SD_DOCUMENT_REJECTION_STS_DESC,
        SalesQuotations.SHIP_TO_PARTY_NAME,
        SalesQuotations.SHIP_TO_PARTY_ADDITIONAL_NAME,
        SalesQuotations.SALES_ORGANIZATION,
        SalesQuotations.SALES_ORGANIZATION_NAME,
        SalesQuotations.DISTRIBUTION_CHANNEL,
        SalesQuotations.DIVISION,
        SalesQuotations.CREATED_BY_USER,
        SalesQuotations.DISTRIBUTION_CHANNEL_NAME,
        SalesQuotations.ACADEMIC_TITLE_NAME,
        SalesQuotations.CREATED_BY_USER_FIRST_NAME,
        SalesQuotations.CREATED_BY_USER_LAST_NAME,
        SalesQuotations.DIVISION_NAME,
        SalesQuotations.SD_DOCUMENT_CATEGORY,
        SalesQuotations.VDATU
    ];
    /**
     * All fields selector.
     */
    SalesQuotations.ALL_FIELDS = new cloud_sdk_core_1.AllFields('*', SalesQuotations);
    /**
     * All key fields of the SalesQuotations entity.
     */
    SalesQuotations._keyFields = [SalesQuotations.SALES_QUOTATION];
    /**
     * Mapping of all key field names to the respective static field property SalesQuotations.
     */
    SalesQuotations._keys = SalesQuotations._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(SalesQuotations = exports.SalesQuotations || (exports.SalesQuotations = {}));
exports.SalesQuotations = SalesQuotations;
//# sourceMappingURL=SalesQuotations.js.map