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
var Customer_Bank_AccouNsRequestBuilder_1 = require("./Customer_Bank_AccouNsRequestBuilder");
var cloud_sdk_core_1 = require("@sap/cloud-sdk-core");
/**
 * This class represents the entity "CUSTOMER_BANK_ACCOUNs" of service "CB_CUSTOMER_SRV".
 */
var Customer_Bank_AccouNs = /** @class */ (function (_super) {
    __extends(Customer_Bank_AccouNs, _super);
    function Customer_Bank_AccouNs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Customer_Bank_AccouNs`.
     * @returns A builder that constructs instances of entity type `Customer_Bank_AccouNs`.
     */
    Customer_Bank_AccouNs.builder = function () {
        return cloud_sdk_core_1.Entity.entityBuilder(Customer_Bank_AccouNs);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Customer_Bank_AccouNs` entity type.
     * @returns A `Customer_Bank_AccouNs` request builder.
     */
    Customer_Bank_AccouNs.requestBuilder = function () {
        return new Customer_Bank_AccouNsRequestBuilder_1.Customer_Bank_AccouNsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Customer_Bank_AccouNs`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Customer_Bank_AccouNs`.
     */
    Customer_Bank_AccouNs.customField = function (fieldName) {
        return cloud_sdk_core_1.Entity.customFieldSelector(fieldName, Customer_Bank_AccouNs);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Customer_Bank_AccouNs.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Customer_Bank_AccouNs.
     */
    Customer_Bank_AccouNs._entityName = 'CUSTOMER_BANK_ACCOUNs';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Customer_Bank_AccouNs.
     */
    Customer_Bank_AccouNs._serviceName = 'CB_CUSTOMER_SRV';
    /**
     * Default url path for the according service.
     */
    Customer_Bank_AccouNs._defaultServicePath = '/sap/opu/odata/sap/CB_CUSTOMER_SRV';
    return Customer_Bank_AccouNs;
}(cloud_sdk_core_1.Entity));
exports.Customer_Bank_AccouNs = Customer_Bank_AccouNs;
(function (Customer_Bank_AccouNs) {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Bank_AccouNs.COUNTRY = new cloud_sdk_core_1.StringField('Country', Customer_Bank_AccouNs, 'Edm.String');
    /**
     * Static representation of the [[kunnr1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Bank_AccouNs.KUNNR_1 = new cloud_sdk_core_1.StringField('KUNNR1', Customer_Bank_AccouNs, 'Edm.String');
    /**
     * Static representation of the [[countryName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Bank_AccouNs.COUNTRY_NAME = new cloud_sdk_core_1.StringField('CountryName', Customer_Bank_AccouNs, 'Edm.String');
    /**
     * Static representation of the [[bankNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Bank_AccouNs.BANK_NUMBER = new cloud_sdk_core_1.StringField('BankNumber', Customer_Bank_AccouNs, 'Edm.String');
    /**
     * Static representation of the [[bankAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Bank_AccouNs.BANK_ACCOUNT = new cloud_sdk_core_1.StringField('BankAccount', Customer_Bank_AccouNs, 'Edm.String');
    /**
     * Static representation of the [[bankName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Bank_AccouNs.BANK_NAME = new cloud_sdk_core_1.StringField('BankName', Customer_Bank_AccouNs, 'Edm.String');
    /**
     * Static representation of the [[accountHolder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Bank_AccouNs.ACCOUNT_HOLDER = new cloud_sdk_core_1.StringField('AccountHolder', Customer_Bank_AccouNs, 'Edm.String');
    /**
     * Static representation of the [[cityName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Bank_AccouNs.CITY_NAME = new cloud_sdk_core_1.StringField('CityName', Customer_Bank_AccouNs, 'Edm.String');
    /**
     * Static representation of the [[swift]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Bank_AccouNs.SWIFT = new cloud_sdk_core_1.StringField('SWIFT', Customer_Bank_AccouNs, 'Edm.String');
    /**
     * Static representation of the [[addressNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Bank_AccouNs.ADDRESS_NUMBER = new cloud_sdk_core_1.StringField('AddressNumber', Customer_Bank_AccouNs, 'Edm.String');
    /**
     * All fields of the Customer_Bank_AccouNs entity.
     */
    Customer_Bank_AccouNs._allFields = [
        Customer_Bank_AccouNs.COUNTRY,
        Customer_Bank_AccouNs.KUNNR_1,
        Customer_Bank_AccouNs.COUNTRY_NAME,
        Customer_Bank_AccouNs.BANK_NUMBER,
        Customer_Bank_AccouNs.BANK_ACCOUNT,
        Customer_Bank_AccouNs.BANK_NAME,
        Customer_Bank_AccouNs.ACCOUNT_HOLDER,
        Customer_Bank_AccouNs.CITY_NAME,
        Customer_Bank_AccouNs.SWIFT,
        Customer_Bank_AccouNs.ADDRESS_NUMBER
    ];
    /**
     * All fields selector.
     */
    Customer_Bank_AccouNs.ALL_FIELDS = new cloud_sdk_core_1.AllFields('*', Customer_Bank_AccouNs);
    /**
     * All key fields of the Customer_Bank_AccouNs entity.
     */
    Customer_Bank_AccouNs._keyFields = [Customer_Bank_AccouNs.COUNTRY, Customer_Bank_AccouNs.BANK_NUMBER, Customer_Bank_AccouNs.BANK_ACCOUNT];
    /**
     * Mapping of all key field names to the respective static field property Customer_Bank_AccouNs.
     */
    Customer_Bank_AccouNs._keys = Customer_Bank_AccouNs._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Customer_Bank_AccouNs = exports.Customer_Bank_AccouNs || (exports.Customer_Bank_AccouNs = {}));
exports.Customer_Bank_AccouNs = Customer_Bank_AccouNs;
//# sourceMappingURL=Customer_Bank_AccouNs.js.map