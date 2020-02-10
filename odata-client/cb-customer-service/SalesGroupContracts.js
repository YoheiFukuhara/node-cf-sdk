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
var SalesGroupContractsRequestBuilder_1 = require("./SalesGroupContractsRequestBuilder");
var cloud_sdk_core_1 = require("@sap/cloud-sdk-core");
/**
 * This class represents the entity "SalesGroupContracts" of service "CB_CUSTOMER_SRV".
 */
var SalesGroupContracts = /** @class */ (function (_super) {
    __extends(SalesGroupContracts, _super);
    function SalesGroupContracts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `SalesGroupContracts`.
     * @returns A builder that constructs instances of entity type `SalesGroupContracts`.
     */
    SalesGroupContracts.builder = function () {
        return cloud_sdk_core_1.Entity.entityBuilder(SalesGroupContracts);
    };
    /**
     * Returns a request builder to construct requests for operations on the `SalesGroupContracts` entity type.
     * @returns A `SalesGroupContracts` request builder.
     */
    SalesGroupContracts.requestBuilder = function () {
        return new SalesGroupContractsRequestBuilder_1.SalesGroupContractsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SalesGroupContracts`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SalesGroupContracts`.
     */
    SalesGroupContracts.customField = function (fieldName) {
        return cloud_sdk_core_1.Entity.customFieldSelector(fieldName, SalesGroupContracts);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    SalesGroupContracts.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for SalesGroupContracts.
     */
    SalesGroupContracts._entityName = 'SalesGroupContracts';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SalesGroupContracts.
     */
    SalesGroupContracts._serviceName = 'CB_CUSTOMER_SRV';
    /**
     * Default url path for the according service.
     */
    SalesGroupContracts._defaultServicePath = '/sap/opu/odata/sap/CB_CUSTOMER_SRV';
    return SalesGroupContracts;
}(cloud_sdk_core_1.Entity));
exports.SalesGroupContracts = SalesGroupContracts;
(function (SalesGroupContracts) {
    /**
     * Static representation of the [[salesGroupContractType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesGroupContracts.SALES_GROUP_CONTRACT_TYPE = new cloud_sdk_core_1.StringField('SalesGroupContractType', SalesGroupContracts, 'Edm.String');
    /**
     * Static representation of the [[vbelnDescr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesGroupContracts.VBELN_DESCR = new cloud_sdk_core_1.StringField('VBELN_DESCR', SalesGroupContracts, 'Edm.String');
    /**
     * Static representation of the [[salesGroupContractTypeName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesGroupContracts.SALES_GROUP_CONTRACT_TYPE_NAME = new cloud_sdk_core_1.StringField('SalesGroupContractTypeName', SalesGroupContracts, 'Edm.String');
    /**
     * Static representation of the [[salesGroupContract]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesGroupContracts.SALES_GROUP_CONTRACT = new cloud_sdk_core_1.StringField('SalesGroupContract', SalesGroupContracts, 'Edm.String');
    /**
     * Static representation of the [[soldToParty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesGroupContracts.SOLD_TO_PARTY = new cloud_sdk_core_1.StringField('SoldToParty', SalesGroupContracts, 'Edm.String');
    /**
     * Static representation of the [[soldToPartyCityName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesGroupContracts.SOLD_TO_PARTY_CITY_NAME = new cloud_sdk_core_1.StringField('SoldToPartyCityName', SalesGroupContracts, 'Edm.String');
    /**
     * Static representation of the [[soldToPartyCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesGroupContracts.SOLD_TO_PARTY_COUNTRY = new cloud_sdk_core_1.StringField('SoldToPartyCountry', SalesGroupContracts, 'Edm.String');
    /**
     * Static representation of the [[salesContractName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesGroupContracts.SALES_CONTRACT_NAME = new cloud_sdk_core_1.StringField('SalesContractName', SalesGroupContracts, 'Edm.String');
    /**
     * Static representation of the [[soldToPartyName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesGroupContracts.SOLD_TO_PARTY_NAME = new cloud_sdk_core_1.StringField('SoldToPartyName', SalesGroupContracts, 'Edm.String');
    /**
     * Static representation of the [[salesGroupContractDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesGroupContracts.SALES_GROUP_CONTRACT_DATE = new cloud_sdk_core_1.DateField('SalesGroupContractDate', SalesGroupContracts, 'Edm.DateTime');
    /**
     * Static representation of the [[salesGrpContrValdtyStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesGroupContracts.SALES_GRP_CONTR_VALDTY_START_DATE = new cloud_sdk_core_1.DateField('SalesGrpContrValdtyStartDate', SalesGroupContracts, 'Edm.DateTime');
    /**
     * Static representation of the [[salesGrpContrValdtyEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesGroupContracts.SALES_GRP_CONTR_VALDTY_END_DATE = new cloud_sdk_core_1.DateField('SalesGrpContrValdtyEndDate', SalesGroupContracts, 'Edm.DateTime');
    /**
     * Static representation of the [[contactPerson]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesGroupContracts.CONTACT_PERSON = new cloud_sdk_core_1.StringField('ContactPerson', SalesGroupContracts, 'Edm.String');
    /**
     * Static representation of the [[soldToPartyAdditionalName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesGroupContracts.SOLD_TO_PARTY_ADDITIONAL_NAME = new cloud_sdk_core_1.StringField('SoldToPartyAdditionalName', SalesGroupContracts, 'Edm.String');
    /**
     * Static representation of the [[contactPersonFirstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesGroupContracts.CONTACT_PERSON_FIRST_NAME = new cloud_sdk_core_1.StringField('ContactPersonFirstName', SalesGroupContracts, 'Edm.String');
    /**
     * Static representation of the [[shipToParty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesGroupContracts.SHIP_TO_PARTY = new cloud_sdk_core_1.StringField('ShipToParty', SalesGroupContracts, 'Edm.String');
    /**
     * Static representation of the [[shipToPartyName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesGroupContracts.SHIP_TO_PARTY_NAME = new cloud_sdk_core_1.StringField('ShipToPartyName', SalesGroupContracts, 'Edm.String');
    /**
     * Static representation of the [[shipToPartyAdditionalName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesGroupContracts.SHIP_TO_PARTY_ADDITIONAL_NAME = new cloud_sdk_core_1.StringField('ShipToPartyAdditionalName', SalesGroupContracts, 'Edm.String');
    /**
     * Static representation of the [[shipToPartyCityName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesGroupContracts.SHIP_TO_PARTY_CITY_NAME = new cloud_sdk_core_1.StringField('ShipToPartyCityName', SalesGroupContracts, 'Edm.String');
    /**
     * Static representation of the [[shipToPartyCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesGroupContracts.SHIP_TO_PARTY_COUNTRY = new cloud_sdk_core_1.StringField('ShipToPartyCountry', SalesGroupContracts, 'Edm.String');
    /**
     * Static representation of the [[salesOrganization]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesGroupContracts.SALES_ORGANIZATION = new cloud_sdk_core_1.StringField('SalesOrganization', SalesGroupContracts, 'Edm.String');
    /**
     * Static representation of the [[distributionChannel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesGroupContracts.DISTRIBUTION_CHANNEL = new cloud_sdk_core_1.StringField('DistributionChannel', SalesGroupContracts, 'Edm.String');
    /**
     * Static representation of the [[salesOffice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesGroupContracts.SALES_OFFICE = new cloud_sdk_core_1.StringField('SalesOffice', SalesGroupContracts, 'Edm.String');
    /**
     * Static representation of the [[division]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesGroupContracts.DIVISION = new cloud_sdk_core_1.StringField('Division', SalesGroupContracts, 'Edm.String');
    /**
     * Static representation of the [[salesGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesGroupContracts.SALES_GROUP = new cloud_sdk_core_1.StringField('SalesGroup', SalesGroupContracts, 'Edm.String');
    /**
     * Static representation of the [[salesOrganizationName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesGroupContracts.SALES_ORGANIZATION_NAME = new cloud_sdk_core_1.StringField('SalesOrganizationName', SalesGroupContracts, 'Edm.String');
    /**
     * Static representation of the [[distributionChannelName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesGroupContracts.DISTRIBUTION_CHANNEL_NAME = new cloud_sdk_core_1.StringField('DistributionChannelName', SalesGroupContracts, 'Edm.String');
    /**
     * Static representation of the [[salesGroupName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesGroupContracts.SALES_GROUP_NAME = new cloud_sdk_core_1.StringField('SalesGroupName', SalesGroupContracts, 'Edm.String');
    /**
     * Static representation of the [[salesOfficeName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesGroupContracts.SALES_OFFICE_NAME = new cloud_sdk_core_1.StringField('SalesOfficeName', SalesGroupContracts, 'Edm.String');
    /**
     * Static representation of the [[divisionName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesGroupContracts.DIVISION_NAME = new cloud_sdk_core_1.StringField('DivisionName', SalesGroupContracts, 'Edm.String');
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesGroupContracts.CREATION_DATE = new cloud_sdk_core_1.DateField('CreationDate', SalesGroupContracts, 'Edm.DateTime');
    /**
     * Static representation of the [[creationTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesGroupContracts.CREATION_TIME = new cloud_sdk_core_1.TimeField('CreationTime', SalesGroupContracts, 'Edm.Time');
    /**
     * Static representation of the [[createdByUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesGroupContracts.CREATED_BY_USER = new cloud_sdk_core_1.StringField('CreatedByUser', SalesGroupContracts, 'Edm.String');
    /**
     * Static representation of the [[academicTitleName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesGroupContracts.ACADEMIC_TITLE_NAME = new cloud_sdk_core_1.StringField('AcademicTitleName', SalesGroupContracts, 'Edm.String');
    /**
     * Static representation of the [[contactPersonLastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesGroupContracts.CONTACT_PERSON_LAST_NAME = new cloud_sdk_core_1.StringField('ContactPersonLastName', SalesGroupContracts, 'Edm.String');
    /**
     * Static representation of the [[contactPersonCityName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesGroupContracts.CONTACT_PERSON_CITY_NAME = new cloud_sdk_core_1.StringField('ContactPersonCityName', SalesGroupContracts, 'Edm.String');
    /**
     * Static representation of the [[contactPersonPhoneNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesGroupContracts.CONTACT_PERSON_PHONE_NUMBER = new cloud_sdk_core_1.StringField('ContactPersonPhoneNumber', SalesGroupContracts, 'Edm.String');
    /**
     * Static representation of the [[createdByUserFirstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesGroupContracts.CREATED_BY_USER_FIRST_NAME = new cloud_sdk_core_1.StringField('CreatedByUserFirstName', SalesGroupContracts, 'Edm.String');
    /**
     * Static representation of the [[createdByUserLastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesGroupContracts.CREATED_BY_USER_LAST_NAME = new cloud_sdk_core_1.StringField('CreatedByUserLastName', SalesGroupContracts, 'Edm.String');
    /**
     * All fields of the SalesGroupContracts entity.
     */
    SalesGroupContracts._allFields = [
        SalesGroupContracts.SALES_GROUP_CONTRACT_TYPE,
        SalesGroupContracts.VBELN_DESCR,
        SalesGroupContracts.SALES_GROUP_CONTRACT_TYPE_NAME,
        SalesGroupContracts.SALES_GROUP_CONTRACT,
        SalesGroupContracts.SOLD_TO_PARTY,
        SalesGroupContracts.SOLD_TO_PARTY_CITY_NAME,
        SalesGroupContracts.SOLD_TO_PARTY_COUNTRY,
        SalesGroupContracts.SALES_CONTRACT_NAME,
        SalesGroupContracts.SOLD_TO_PARTY_NAME,
        SalesGroupContracts.SALES_GROUP_CONTRACT_DATE,
        SalesGroupContracts.SALES_GRP_CONTR_VALDTY_START_DATE,
        SalesGroupContracts.SALES_GRP_CONTR_VALDTY_END_DATE,
        SalesGroupContracts.CONTACT_PERSON,
        SalesGroupContracts.SOLD_TO_PARTY_ADDITIONAL_NAME,
        SalesGroupContracts.CONTACT_PERSON_FIRST_NAME,
        SalesGroupContracts.SHIP_TO_PARTY,
        SalesGroupContracts.SHIP_TO_PARTY_NAME,
        SalesGroupContracts.SHIP_TO_PARTY_ADDITIONAL_NAME,
        SalesGroupContracts.SHIP_TO_PARTY_CITY_NAME,
        SalesGroupContracts.SHIP_TO_PARTY_COUNTRY,
        SalesGroupContracts.SALES_ORGANIZATION,
        SalesGroupContracts.DISTRIBUTION_CHANNEL,
        SalesGroupContracts.SALES_OFFICE,
        SalesGroupContracts.DIVISION,
        SalesGroupContracts.SALES_GROUP,
        SalesGroupContracts.SALES_ORGANIZATION_NAME,
        SalesGroupContracts.DISTRIBUTION_CHANNEL_NAME,
        SalesGroupContracts.SALES_GROUP_NAME,
        SalesGroupContracts.SALES_OFFICE_NAME,
        SalesGroupContracts.DIVISION_NAME,
        SalesGroupContracts.CREATION_DATE,
        SalesGroupContracts.CREATION_TIME,
        SalesGroupContracts.CREATED_BY_USER,
        SalesGroupContracts.ACADEMIC_TITLE_NAME,
        SalesGroupContracts.CONTACT_PERSON_LAST_NAME,
        SalesGroupContracts.CONTACT_PERSON_CITY_NAME,
        SalesGroupContracts.CONTACT_PERSON_PHONE_NUMBER,
        SalesGroupContracts.CREATED_BY_USER_FIRST_NAME,
        SalesGroupContracts.CREATED_BY_USER_LAST_NAME
    ];
    /**
     * All fields selector.
     */
    SalesGroupContracts.ALL_FIELDS = new cloud_sdk_core_1.AllFields('*', SalesGroupContracts);
    /**
     * All key fields of the SalesGroupContracts entity.
     */
    SalesGroupContracts._keyFields = [SalesGroupContracts.SALES_GROUP_CONTRACT];
    /**
     * Mapping of all key field names to the respective static field property SalesGroupContracts.
     */
    SalesGroupContracts._keys = SalesGroupContracts._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(SalesGroupContracts = exports.SalesGroupContracts || (exports.SalesGroupContracts = {}));
exports.SalesGroupContracts = SalesGroupContracts;
//# sourceMappingURL=SalesGroupContracts.js.map