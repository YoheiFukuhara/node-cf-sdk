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
var SalesContractsRequestBuilder_1 = require("./SalesContractsRequestBuilder");
var cloud_sdk_core_1 = require("@sap/cloud-sdk-core");
/**
 * This class represents the entity "SalesContracts" of service "CB_CUSTOMER_SRV".
 */
var SalesContracts = /** @class */ (function (_super) {
    __extends(SalesContracts, _super);
    function SalesContracts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `SalesContracts`.
     * @returns A builder that constructs instances of entity type `SalesContracts`.
     */
    SalesContracts.builder = function () {
        return cloud_sdk_core_1.Entity.entityBuilder(SalesContracts);
    };
    /**
     * Returns a request builder to construct requests for operations on the `SalesContracts` entity type.
     * @returns A `SalesContracts` request builder.
     */
    SalesContracts.requestBuilder = function () {
        return new SalesContractsRequestBuilder_1.SalesContractsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SalesContracts`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SalesContracts`.
     */
    SalesContracts.customField = function (fieldName) {
        return cloud_sdk_core_1.Entity.customFieldSelector(fieldName, SalesContracts);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    SalesContracts.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for SalesContracts.
     */
    SalesContracts._entityName = 'SalesContracts';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SalesContracts.
     */
    SalesContracts._serviceName = 'CB_CUSTOMER_SRV';
    /**
     * Default url path for the according service.
     */
    SalesContracts._defaultServicePath = '/sap/opu/odata/sap/CB_CUSTOMER_SRV';
    return SalesContracts;
}(cloud_sdk_core_1.Entity));
exports.SalesContracts = SalesContracts;
(function (SalesContracts) {
    /**
     * Static representation of the [[vbelnDescr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesContracts.VBELN_DESCR = new cloud_sdk_core_1.StringField('VBELN_DESCR', SalesContracts, 'Edm.String');
    /**
     * Static representation of the [[salesContract]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesContracts.SALES_CONTRACT = new cloud_sdk_core_1.StringField('SalesContract', SalesContracts, 'Edm.String');
    /**
     * Static representation of the [[soldToParty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesContracts.SOLD_TO_PARTY = new cloud_sdk_core_1.StringField('SoldToParty', SalesContracts, 'Edm.String');
    /**
     * Static representation of the [[purchaseOrderByCustomer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesContracts.PURCHASE_ORDER_BY_CUSTOMER = new cloud_sdk_core_1.StringField('PurchaseOrderByCustomer', SalesContracts, 'Edm.String');
    /**
     * Static representation of the [[netAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesContracts.NET_AMOUNT = new cloud_sdk_core_1.BigNumberField('NetAmount', SalesContracts, 'Edm.Decimal');
    /**
     * Static representation of the [[salesContractDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesContracts.SALES_CONTRACT_DATE = new cloud_sdk_core_1.DateField('SalesContractDate', SalesContracts, 'Edm.DateTime');
    /**
     * Static representation of the [[shipToParty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesContracts.SHIP_TO_PARTY = new cloud_sdk_core_1.StringField('ShipToParty', SalesContracts, 'Edm.String');
    /**
     * Static representation of the [[salesContractValidityStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesContracts.SALES_CONTRACT_VALIDITY_START_DATE = new cloud_sdk_core_1.DateField('SalesContractValidityStartDate', SalesContracts, 'Edm.DateTime');
    /**
     * Static representation of the [[salesContractValidityEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesContracts.SALES_CONTRACT_VALIDITY_END_DATE = new cloud_sdk_core_1.DateField('SalesContractValidityEndDate', SalesContracts, 'Edm.DateTime');
    /**
     * Static representation of the [[overallSdProcessStatusDesc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesContracts.OVERALL_SD_PROCESS_STATUS_DESC = new cloud_sdk_core_1.StringField('OverallSDProcessStatusDesc', SalesContracts, 'Edm.String');
    /**
     * Static representation of the [[abstkText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesContracts.ABSTK_TEXT = new cloud_sdk_core_1.StringField('ABSTK_TEXT', SalesContracts, 'Edm.String');
    /**
     * Static representation of the [[vbtyp]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesContracts.VBTYP = new cloud_sdk_core_1.StringField('VBTYP', SalesContracts, 'Edm.String');
    /**
     * Static representation of the [[soldToPartyName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesContracts.SOLD_TO_PARTY_NAME = new cloud_sdk_core_1.StringField('SoldToPartyName', SalesContracts, 'Edm.String');
    /**
     * Static representation of the [[shipToPartyName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesContracts.SHIP_TO_PARTY_NAME = new cloud_sdk_core_1.StringField('ShipToPartyName', SalesContracts, 'Edm.String');
    /**
     * Static representation of the [[shipToPartyAdditionalName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesContracts.SHIP_TO_PARTY_ADDITIONAL_NAME = new cloud_sdk_core_1.StringField('ShipToPartyAdditionalName', SalesContracts, 'Edm.String');
    /**
     * Static representation of the [[soldToPartyAdditionalName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesContracts.SOLD_TO_PARTY_ADDITIONAL_NAME = new cloud_sdk_core_1.StringField('SoldToPartyAdditionalName', SalesContracts, 'Edm.String');
    /**
     * Static representation of the [[salesOrganization]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesContracts.SALES_ORGANIZATION = new cloud_sdk_core_1.StringField('SalesOrganization', SalesContracts, 'Edm.String');
    /**
     * Static representation of the [[salesOrganizationName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesContracts.SALES_ORGANIZATION_NAME = new cloud_sdk_core_1.StringField('SalesOrganizationName', SalesContracts, 'Edm.String');
    /**
     * Static representation of the [[netAmountCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesContracts.NET_AMOUNT_CURRENCY = new cloud_sdk_core_1.StringField('NetAmountCurrency', SalesContracts, 'Edm.String');
    /**
     * Static representation of the [[distributionChannel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesContracts.DISTRIBUTION_CHANNEL = new cloud_sdk_core_1.StringField('DistributionChannel', SalesContracts, 'Edm.String');
    /**
     * Static representation of the [[distributionChannelName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesContracts.DISTRIBUTION_CHANNEL_NAME = new cloud_sdk_core_1.StringField('DistributionChannelName', SalesContracts, 'Edm.String');
    /**
     * Static representation of the [[division]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesContracts.DIVISION = new cloud_sdk_core_1.StringField('Division', SalesContracts, 'Edm.String');
    /**
     * Static representation of the [[divisionName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesContracts.DIVISION_NAME = new cloud_sdk_core_1.StringField('DivisionName', SalesContracts, 'Edm.String');
    /**
     * Static representation of the [[createdByUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesContracts.CREATED_BY_USER = new cloud_sdk_core_1.StringField('CreatedByUser', SalesContracts, 'Edm.String');
    /**
     * Static representation of the [[academicTitleName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesContracts.ACADEMIC_TITLE_NAME = new cloud_sdk_core_1.StringField('AcademicTitleName', SalesContracts, 'Edm.String');
    /**
     * Static representation of the [[createdByUserFirstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesContracts.CREATED_BY_USER_FIRST_NAME = new cloud_sdk_core_1.StringField('CreatedByUserFirstName', SalesContracts, 'Edm.String');
    /**
     * Static representation of the [[createdByUserLastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesContracts.CREATED_BY_USER_LAST_NAME = new cloud_sdk_core_1.StringField('CreatedByUserLastName', SalesContracts, 'Edm.String');
    /**
     * Static representation of the [[vbelnGrp]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesContracts.VBELN_GRP = new cloud_sdk_core_1.StringField('VBELN_GRP', SalesContracts, 'Edm.String');
    /**
     * All fields of the SalesContracts entity.
     */
    SalesContracts._allFields = [
        SalesContracts.VBELN_DESCR,
        SalesContracts.SALES_CONTRACT,
        SalesContracts.SOLD_TO_PARTY,
        SalesContracts.PURCHASE_ORDER_BY_CUSTOMER,
        SalesContracts.NET_AMOUNT,
        SalesContracts.SALES_CONTRACT_DATE,
        SalesContracts.SHIP_TO_PARTY,
        SalesContracts.SALES_CONTRACT_VALIDITY_START_DATE,
        SalesContracts.SALES_CONTRACT_VALIDITY_END_DATE,
        SalesContracts.OVERALL_SD_PROCESS_STATUS_DESC,
        SalesContracts.ABSTK_TEXT,
        SalesContracts.VBTYP,
        SalesContracts.SOLD_TO_PARTY_NAME,
        SalesContracts.SHIP_TO_PARTY_NAME,
        SalesContracts.SHIP_TO_PARTY_ADDITIONAL_NAME,
        SalesContracts.SOLD_TO_PARTY_ADDITIONAL_NAME,
        SalesContracts.SALES_ORGANIZATION,
        SalesContracts.SALES_ORGANIZATION_NAME,
        SalesContracts.NET_AMOUNT_CURRENCY,
        SalesContracts.DISTRIBUTION_CHANNEL,
        SalesContracts.DISTRIBUTION_CHANNEL_NAME,
        SalesContracts.DIVISION,
        SalesContracts.DIVISION_NAME,
        SalesContracts.CREATED_BY_USER,
        SalesContracts.ACADEMIC_TITLE_NAME,
        SalesContracts.CREATED_BY_USER_FIRST_NAME,
        SalesContracts.CREATED_BY_USER_LAST_NAME,
        SalesContracts.VBELN_GRP
    ];
    /**
     * All fields selector.
     */
    SalesContracts.ALL_FIELDS = new cloud_sdk_core_1.AllFields('*', SalesContracts);
    /**
     * All key fields of the SalesContracts entity.
     */
    SalesContracts._keyFields = [SalesContracts.SALES_CONTRACT];
    /**
     * Mapping of all key field names to the respective static field property SalesContracts.
     */
    SalesContracts._keys = SalesContracts._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(SalesContracts = exports.SalesContracts || (exports.SalesContracts = {}));
exports.SalesContracts = SalesContracts;
//# sourceMappingURL=SalesContracts.js.map