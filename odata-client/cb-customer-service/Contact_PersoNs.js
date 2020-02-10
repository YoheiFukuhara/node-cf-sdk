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
var Contact_PersoNsRequestBuilder_1 = require("./Contact_PersoNsRequestBuilder");
var cloud_sdk_core_1 = require("@sap/cloud-sdk-core");
/**
 * This class represents the entity "CONTACT_PERSONs" of service "CB_CUSTOMER_SRV".
 */
var Contact_PersoNs = /** @class */ (function (_super) {
    __extends(Contact_PersoNs, _super);
    function Contact_PersoNs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Contact_PersoNs`.
     * @returns A builder that constructs instances of entity type `Contact_PersoNs`.
     */
    Contact_PersoNs.builder = function () {
        return cloud_sdk_core_1.Entity.entityBuilder(Contact_PersoNs);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Contact_PersoNs` entity type.
     * @returns A `Contact_PersoNs` request builder.
     */
    Contact_PersoNs.requestBuilder = function () {
        return new Contact_PersoNsRequestBuilder_1.Contact_PersoNsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Contact_PersoNs`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Contact_PersoNs`.
     */
    Contact_PersoNs.customField = function (fieldName) {
        return cloud_sdk_core_1.Entity.customFieldSelector(fieldName, Contact_PersoNs);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Contact_PersoNs.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Contact_PersoNs.
     */
    Contact_PersoNs._entityName = 'CONTACT_PERSONs';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Contact_PersoNs.
     */
    Contact_PersoNs._serviceName = 'CB_CUSTOMER_SRV';
    /**
     * Default url path for the according service.
     */
    Contact_PersoNs._defaultServicePath = '/sap/opu/odata/sap/CB_CUSTOMER_SRV';
    return Contact_PersoNs;
}(cloud_sdk_core_1.Entity));
exports.Contact_PersoNs = Contact_PersoNs;
(function (Contact_PersoNs) {
    /**
     * Static representation of the [[contactPersonFirstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contact_PersoNs.CONTACT_PERSON_FIRST_NAME = new cloud_sdk_core_1.StringField('ContactPersonFirstName', Contact_PersoNs, 'Edm.String');
    /**
     * Static representation of the [[contactPersonNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contact_PersoNs.CONTACT_PERSON_NUMBER = new cloud_sdk_core_1.StringField('ContactPersonNumber', Contact_PersoNs, 'Edm.String');
    /**
     * Static representation of the [[contactPersonLastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contact_PersoNs.CONTACT_PERSON_LAST_NAME = new cloud_sdk_core_1.StringField('ContactPersonLastName', Contact_PersoNs, 'Edm.String');
    /**
     * Static representation of the [[contactPersonDepartment2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contact_PersoNs.CONTACT_PERSON_DEPARTMENT_2 = new cloud_sdk_core_1.StringField('ContactPersonDepartment2', Contact_PersoNs, 'Edm.String');
    /**
     * Static representation of the [[contactPersonFunction2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contact_PersoNs.CONTACT_PERSON_FUNCTION_2 = new cloud_sdk_core_1.StringField('ContactPersonFunction2', Contact_PersoNs, 'Edm.String');
    /**
     * Static representation of the [[contactPersonEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contact_PersoNs.CONTACT_PERSON_EMAIL = new cloud_sdk_core_1.StringField('ContactPersonEmail', Contact_PersoNs, 'Edm.String');
    /**
     * Static representation of the [[contactPersonPhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contact_PersoNs.CONTACT_PERSON_PHONE = new cloud_sdk_core_1.StringField('ContactPersonPhone', Contact_PersoNs, 'Edm.String');
    /**
     * Static representation of the [[contactPersonStreet]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contact_PersoNs.CONTACT_PERSON_STREET = new cloud_sdk_core_1.StringField('ContactPersonStreet', Contact_PersoNs, 'Edm.String');
    /**
     * Static representation of the [[contactPersonHouseNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contact_PersoNs.CONTACT_PERSON_HOUSE_NUMBER = new cloud_sdk_core_1.StringField('ContactPersonHouseNumber', Contact_PersoNs, 'Edm.String');
    /**
     * Static representation of the [[contactPersonMobile]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contact_PersoNs.CONTACT_PERSON_MOBILE = new cloud_sdk_core_1.StringField('ContactPersonMobile', Contact_PersoNs, 'Edm.String');
    /**
     * Static representation of the [[contactPersonCity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contact_PersoNs.CONTACT_PERSON_CITY = new cloud_sdk_core_1.StringField('ContactPersonCity', Contact_PersoNs, 'Edm.String');
    /**
     * Static representation of the [[contactPersonRegion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contact_PersoNs.CONTACT_PERSON_REGION = new cloud_sdk_core_1.StringField('ContactPersonRegion', Contact_PersoNs, 'Edm.String');
    /**
     * Static representation of the [[contactPersonCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contact_PersoNs.CONTACT_PERSON_COUNTRY = new cloud_sdk_core_1.StringField('ContactPersonCountry', Contact_PersoNs, 'Edm.String');
    /**
     * Static representation of the [[contactPersonPostalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contact_PersoNs.CONTACT_PERSON_POSTAL_CODE = new cloud_sdk_core_1.StringField('ContactPersonPostalCode', Contact_PersoNs, 'Edm.String');
    /**
     * Static representation of the [[contactPersonFullName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contact_PersoNs.CONTACT_PERSON_FULL_NAME = new cloud_sdk_core_1.StringField('ContactPersonFullName', Contact_PersoNs, 'Edm.String');
    /**
     * All fields of the Contact_PersoNs entity.
     */
    Contact_PersoNs._allFields = [
        Contact_PersoNs.CONTACT_PERSON_FIRST_NAME,
        Contact_PersoNs.CONTACT_PERSON_NUMBER,
        Contact_PersoNs.CONTACT_PERSON_LAST_NAME,
        Contact_PersoNs.CONTACT_PERSON_DEPARTMENT_2,
        Contact_PersoNs.CONTACT_PERSON_FUNCTION_2,
        Contact_PersoNs.CONTACT_PERSON_EMAIL,
        Contact_PersoNs.CONTACT_PERSON_PHONE,
        Contact_PersoNs.CONTACT_PERSON_STREET,
        Contact_PersoNs.CONTACT_PERSON_HOUSE_NUMBER,
        Contact_PersoNs.CONTACT_PERSON_MOBILE,
        Contact_PersoNs.CONTACT_PERSON_CITY,
        Contact_PersoNs.CONTACT_PERSON_REGION,
        Contact_PersoNs.CONTACT_PERSON_COUNTRY,
        Contact_PersoNs.CONTACT_PERSON_POSTAL_CODE,
        Contact_PersoNs.CONTACT_PERSON_FULL_NAME
    ];
    /**
     * All fields selector.
     */
    Contact_PersoNs.ALL_FIELDS = new cloud_sdk_core_1.AllFields('*', Contact_PersoNs);
    /**
     * All key fields of the Contact_PersoNs entity.
     */
    Contact_PersoNs._keyFields = [Contact_PersoNs.CONTACT_PERSON_NUMBER];
    /**
     * Mapping of all key field names to the respective static field property Contact_PersoNs.
     */
    Contact_PersoNs._keys = Contact_PersoNs._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Contact_PersoNs = exports.Contact_PersoNs || (exports.Contact_PersoNs = {}));
exports.Contact_PersoNs = Contact_PersoNs;
//# sourceMappingURL=Contact_PersoNs.js.map