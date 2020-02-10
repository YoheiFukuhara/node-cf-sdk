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
var BillingDocumentsRequestBuilder_1 = require("./BillingDocumentsRequestBuilder");
var cloud_sdk_core_1 = require("@sap/cloud-sdk-core");
/**
 * This class represents the entity "BillingDocuments" of service "CB_CUSTOMER_SRV".
 */
var BillingDocuments = /** @class */ (function (_super) {
    __extends(BillingDocuments, _super);
    function BillingDocuments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `BillingDocuments`.
     * @returns A builder that constructs instances of entity type `BillingDocuments`.
     */
    BillingDocuments.builder = function () {
        return cloud_sdk_core_1.Entity.entityBuilder(BillingDocuments);
    };
    /**
     * Returns a request builder to construct requests for operations on the `BillingDocuments` entity type.
     * @returns A `BillingDocuments` request builder.
     */
    BillingDocuments.requestBuilder = function () {
        return new BillingDocumentsRequestBuilder_1.BillingDocumentsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BillingDocuments`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BillingDocuments`.
     */
    BillingDocuments.customField = function (fieldName) {
        return cloud_sdk_core_1.Entity.customFieldSelector(fieldName, BillingDocuments);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    BillingDocuments.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for BillingDocuments.
     */
    BillingDocuments._entityName = 'BillingDocuments';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for BillingDocuments.
     */
    BillingDocuments._serviceName = 'CB_CUSTOMER_SRV';
    /**
     * Default url path for the according service.
     */
    BillingDocuments._defaultServicePath = '/sap/opu/odata/sap/CB_CUSTOMER_SRV';
    return BillingDocuments;
}(cloud_sdk_core_1.Entity));
exports.BillingDocuments = BillingDocuments;
(function (BillingDocuments) {
    /**
     * Static representation of the [[billingDocumentDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BillingDocuments.BILLING_DOCUMENT_DESCRIPTION = new cloud_sdk_core_1.StringField('BillingDocumentDescription', BillingDocuments, 'Edm.String');
    /**
     * Static representation of the [[payerId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BillingDocuments.PAYER_ID = new cloud_sdk_core_1.StringField('PayerId', BillingDocuments, 'Edm.String');
    /**
     * Static representation of the [[billingDocumentDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BillingDocuments.BILLING_DOCUMENT_DATE = new cloud_sdk_core_1.DateField('BillingDocumentDate', BillingDocuments, 'Edm.DateTime');
    /**
     * Static representation of the [[vfStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BillingDocuments.VF_STATUS = new cloud_sdk_core_1.StringField('VF_STATUS', BillingDocuments, 'Edm.String');
    /**
     * Static representation of the [[netValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BillingDocuments.NET_VALUE = new cloud_sdk_core_1.BigNumberField('NetValue', BillingDocuments, 'Edm.Decimal');
    /**
     * Static representation of the [[billingDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BillingDocuments.BILLING_DOCUMENT = new cloud_sdk_core_1.StringField('BillingDocument', BillingDocuments, 'Edm.String');
    /**
     * Static representation of the [[payerName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BillingDocuments.PAYER_NAME = new cloud_sdk_core_1.StringField('PayerName', BillingDocuments, 'Edm.String');
    /**
     * Static representation of the [[billToPartyId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BillingDocuments.BILL_TO_PARTY_ID = new cloud_sdk_core_1.StringField('BillToPartyId', BillingDocuments, 'Edm.String');
    /**
     * Static representation of the [[soldToKunnr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BillingDocuments.SOLD_TO_KUNNR = new cloud_sdk_core_1.StringField('SOLD_TO_KUNNR', BillingDocuments, 'Edm.String');
    /**
     * Static representation of the [[soldToName1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BillingDocuments.SOLD_TO_NAME_1 = new cloud_sdk_core_1.StringField('SOLD_TO_NAME1', BillingDocuments, 'Edm.String');
    /**
     * Static representation of the [[billToPartyName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BillingDocuments.BILL_TO_PARTY_NAME = new cloud_sdk_core_1.StringField('BillToPartyName', BillingDocuments, 'Edm.String');
    /**
     * Static representation of the [[salesOrganization]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BillingDocuments.SALES_ORGANIZATION = new cloud_sdk_core_1.StringField('SalesOrganization', BillingDocuments, 'Edm.String');
    /**
     * Static representation of the [[companyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BillingDocuments.COMPANY_CODE = new cloud_sdk_core_1.StringField('CompanyCode', BillingDocuments, 'Edm.String');
    /**
     * Static representation of the [[bukrsText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BillingDocuments.BUKRS_TEXT = new cloud_sdk_core_1.StringField('BUKRS_TEXT', BillingDocuments, 'Edm.String');
    /**
     * Static representation of the [[vfTodo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BillingDocuments.VF_TODO = new cloud_sdk_core_1.StringField('VF_TODO', BillingDocuments, 'Edm.String');
    /**
     * Static representation of the [[xblnr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BillingDocuments.XBLNR = new cloud_sdk_core_1.StringField('XBLNR', BillingDocuments, 'Edm.String');
    /**
     * Static representation of the [[salesOrganizationName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BillingDocuments.SALES_ORGANIZATION_NAME = new cloud_sdk_core_1.StringField('SalesOrganizationName', BillingDocuments, 'Edm.String');
    /**
     * Static representation of the [[netValueCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BillingDocuments.NET_VALUE_CURRENCY = new cloud_sdk_core_1.StringField('NetValueCurrency', BillingDocuments, 'Edm.String');
    /**
     * Static representation of the [[paymentTerms]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BillingDocuments.PAYMENT_TERMS = new cloud_sdk_core_1.StringField('PaymentTerms', BillingDocuments, 'Edm.String');
    /**
     * Static representation of the [[taxAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BillingDocuments.TAX_AMOUNT = new cloud_sdk_core_1.BigNumberField('TaxAmount', BillingDocuments, 'Edm.Decimal');
    /**
     * Static representation of the [[taxAmountCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BillingDocuments.TAX_AMOUNT_CURRENCY = new cloud_sdk_core_1.StringField('TaxAmountCurrency', BillingDocuments, 'Edm.String');
    /**
     * Static representation of the [[paymentTermsDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BillingDocuments.PAYMENT_TERMS_DESCRIPTION = new cloud_sdk_core_1.StringField('PaymentTermsDescription', BillingDocuments, 'Edm.String');
    /**
     * Static representation of the [[documentCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BillingDocuments.DOCUMENT_CATEGORY = new cloud_sdk_core_1.StringField('DocumentCategory', BillingDocuments, 'Edm.String');
    /**
     * Static representation of the [[accountingDocumentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BillingDocuments.ACCOUNTING_DOCUMENT_NUMBER = new cloud_sdk_core_1.StringField('AccountingDocumentNumber', BillingDocuments, 'Edm.String');
    /**
     * Static representation of the [[fiscalYear]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BillingDocuments.FISCAL_YEAR = new cloud_sdk_core_1.StringField('FiscalYear', BillingDocuments, 'Edm.String');
    /**
     * Static representation of the [[vfStatusText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BillingDocuments.VF_STATUS_TEXT = new cloud_sdk_core_1.StringField('VF_STATUS_TEXT', BillingDocuments, 'Edm.String');
    /**
     * Static representation of the [[vfTodoText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BillingDocuments.VF_TODO_TEXT = new cloud_sdk_core_1.StringField('VF_TODO_TEXT', BillingDocuments, 'Edm.String');
    /**
     * All fields of the BillingDocuments entity.
     */
    BillingDocuments._allFields = [
        BillingDocuments.BILLING_DOCUMENT_DESCRIPTION,
        BillingDocuments.PAYER_ID,
        BillingDocuments.BILLING_DOCUMENT_DATE,
        BillingDocuments.VF_STATUS,
        BillingDocuments.NET_VALUE,
        BillingDocuments.BILLING_DOCUMENT,
        BillingDocuments.PAYER_NAME,
        BillingDocuments.BILL_TO_PARTY_ID,
        BillingDocuments.SOLD_TO_KUNNR,
        BillingDocuments.SOLD_TO_NAME_1,
        BillingDocuments.BILL_TO_PARTY_NAME,
        BillingDocuments.SALES_ORGANIZATION,
        BillingDocuments.COMPANY_CODE,
        BillingDocuments.BUKRS_TEXT,
        BillingDocuments.VF_TODO,
        BillingDocuments.XBLNR,
        BillingDocuments.SALES_ORGANIZATION_NAME,
        BillingDocuments.NET_VALUE_CURRENCY,
        BillingDocuments.PAYMENT_TERMS,
        BillingDocuments.TAX_AMOUNT,
        BillingDocuments.TAX_AMOUNT_CURRENCY,
        BillingDocuments.PAYMENT_TERMS_DESCRIPTION,
        BillingDocuments.DOCUMENT_CATEGORY,
        BillingDocuments.ACCOUNTING_DOCUMENT_NUMBER,
        BillingDocuments.FISCAL_YEAR,
        BillingDocuments.VF_STATUS_TEXT,
        BillingDocuments.VF_TODO_TEXT
    ];
    /**
     * All fields selector.
     */
    BillingDocuments.ALL_FIELDS = new cloud_sdk_core_1.AllFields('*', BillingDocuments);
    /**
     * All key fields of the BillingDocuments entity.
     */
    BillingDocuments._keyFields = [BillingDocuments.BILLING_DOCUMENT];
    /**
     * Mapping of all key field names to the respective static field property BillingDocuments.
     */
    BillingDocuments._keys = BillingDocuments._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(BillingDocuments = exports.BillingDocuments || (exports.BillingDocuments = {}));
exports.BillingDocuments = BillingDocuments;
//# sourceMappingURL=BillingDocuments.js.map