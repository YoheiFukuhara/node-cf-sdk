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
var CustomersRequestBuilder_1 = require("./CustomersRequestBuilder");
var cloud_sdk_core_1 = require("@sap/cloud-sdk-core");
/**
 * This class represents the entity "Customers" of service "CB_CUSTOMER_SRV".
 */
var Customers = /** @class */ (function (_super) {
    __extends(Customers, _super);
    function Customers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Customers`.
     * @returns A builder that constructs instances of entity type `Customers`.
     */
    Customers.builder = function () {
        return cloud_sdk_core_1.Entity.entityBuilder(Customers);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Customers` entity type.
     * @returns A `Customers` request builder.
     */
    Customers.requestBuilder = function () {
        return new CustomersRequestBuilder_1.CustomersRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Customers`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Customers`.
     */
    Customers.customField = function (fieldName) {
        return cloud_sdk_core_1.Entity.customFieldSelector(fieldName, Customers);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Customers.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Customers.
     */
    Customers._entityName = 'Customers';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Customers.
     */
    Customers._serviceName = 'CB_CUSTOMER_SRV';
    /**
     * Default url path for the according service.
     */
    Customers._defaultServicePath = '/sap/opu/odata/sap/CB_CUSTOMER_SRV';
    return Customers;
}(cloud_sdk_core_1.Entity));
exports.Customers = Customers;
var Customer_Sales_AreAs_1 = require("./Customer_Sales_AreAs");
var Customer_Comp_CodEs_1 = require("./Customer_Comp_CodEs");
var Customer_Bank_AccouNs_1 = require("./Customer_Bank_AccouNs");
var Contact_PersoNs_1 = require("./Contact_PersoNs");
var SalesOrders_1 = require("./SalesOrders");
var SalesQuotations_1 = require("./SalesQuotations");
var SalesContracts_1 = require("./SalesContracts");
var BillingDocuments_1 = require("./BillingDocuments");
var SalesGroupContracts_1 = require("./SalesGroupContracts");
var Customer_Project_Hs_1 = require("./Customer_Project_Hs");
(function (Customers) {
    /**
     * Static representation of the [[formOfAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customers.FORM_OF_ADDRESS = new cloud_sdk_core_1.StringField('FormOfAddress', Customers, 'Edm.String');
    /**
     * Static representation of the [[partner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customers.PARTNER = new cloud_sdk_core_1.StringField('PARTNER', Customers, 'Edm.String');
    /**
     * Static representation of the [[customerName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customers.CUSTOMER_NAME = new cloud_sdk_core_1.StringField('CustomerName', Customers, 'Edm.String');
    /**
     * Static representation of the [[customer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customers.CUSTOMER = new cloud_sdk_core_1.StringField('Customer', Customers, 'Edm.String');
    /**
     * Static representation of the [[centralDeliveryBlockDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customers.CENTRAL_DELIVERY_BLOCK_DESCRIPTION = new cloud_sdk_core_1.StringField('CentralDeliveryBlockDescription', Customers, 'Edm.String');
    /**
     * Static representation of the [[billingBlockDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customers.BILLING_BLOCK_DESCRIPTION = new cloud_sdk_core_1.StringField('BillingBlockDescription', Customers, 'Edm.String');
    /**
     * Static representation of the [[blockingReasonDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customers.BLOCKING_REASON_DESCRIPTION = new cloud_sdk_core_1.StringField('BlockingReasonDescription', Customers, 'Edm.String');
    /**
     * Static representation of the [[customerAdditionalName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customers.CUSTOMER_ADDITIONAL_NAME = new cloud_sdk_core_1.StringField('CustomerAdditionalName', Customers, 'Edm.String');
    /**
     * Static representation of the [[streetAddressName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customers.STREET_ADDRESS_NAME = new cloud_sdk_core_1.StringField('StreetAddressName', Customers, 'Edm.String');
    /**
     * Static representation of the [[cityName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customers.CITY_NAME = new cloud_sdk_core_1.StringField('CityName', Customers, 'Edm.String');
    /**
     * Static representation of the [[regionName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customers.REGION_NAME = new cloud_sdk_core_1.StringField('RegionName', Customers, 'Edm.String');
    /**
     * Static representation of the [[countryName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customers.COUNTRY_NAME = new cloud_sdk_core_1.StringField('CountryName', Customers, 'Edm.String');
    /**
     * Static representation of the [[fax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customers.FAX = new cloud_sdk_core_1.StringField('Fax', Customers, 'Edm.String');
    /**
     * Static representation of the [[mobile]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customers.MOBILE = new cloud_sdk_core_1.StringField('Mobile', Customers, 'Edm.String');
    /**
     * Static representation of the [[phone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customers.PHONE = new cloud_sdk_core_1.StringField('Phone', Customers, 'Edm.String');
    /**
     * Static representation of the [[postalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customers.POSTAL_CODE = new cloud_sdk_core_1.StringField('PostalCode', Customers, 'Edm.String');
    /**
     * Static representation of the [[emailAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customers.EMAIL_ADDRESS = new cloud_sdk_core_1.StringField('EmailAddress', Customers, 'Edm.String');
    /**
     * Static representation of the [[orderBlock]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customers.ORDER_BLOCK = new cloud_sdk_core_1.StringField('OrderBlock', Customers, 'Edm.String');
    /**
     * Static representation of the [[addressId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customers.ADDRESS_ID = new cloud_sdk_core_1.StringField('AddressID', Customers, 'Edm.String');
    /**
     * Static representation of the [[searchTerm]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customers.SEARCH_TERM = new cloud_sdk_core_1.StringField('SearchTerm', Customers, 'Edm.String');
    /**
     * Static representation of the [[customerAccountGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customers.CUSTOMER_ACCOUNT_GROUP = new cloud_sdk_core_1.StringField('CustomerAccountGroup', Customers, 'Edm.String');
    /**
     * Static representation of the [[internationalLocationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customers.INTERNATIONAL_LOCATION_NUMBER = new cloud_sdk_core_1.StringField('InternationalLocationNumber', Customers, 'Edm.String');
    /**
     * Static representation of the [[internationalLocationNumber2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customers.INTERNATIONAL_LOCATION_NUMBER_2 = new cloud_sdk_core_1.StringField('InternationalLocationNumber2', Customers, 'Edm.String');
    /**
     * Static representation of the [[deliveryBlock]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customers.DELIVERY_BLOCK = new cloud_sdk_core_1.StringField('DeliveryBlock', Customers, 'Edm.String');
    /**
     * Static representation of the [[billingBlock]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customers.BILLING_BLOCK = new cloud_sdk_core_1.StringField('BillingBlock', Customers, 'Edm.String');
    /**
     * Static representation of the [[internationalLocationNumber3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customers.INTERNATIONAL_LOCATION_NUMBER_3 = new cloud_sdk_core_1.StringField('InternationalLocationNumber3', Customers, 'Edm.String');
    /**
     * Static representation of the [[postingBlock]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customers.POSTING_BLOCK = new cloud_sdk_core_1.StringField('PostingBlock', Customers, 'Edm.String');
    /**
     * Static representation of the [[industryCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customers.INDUSTRY_CODE = new cloud_sdk_core_1.StringField('IndustryCode', Customers, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customers.CREATED_BY = new cloud_sdk_core_1.StringField('CreatedBy', Customers, 'Edm.String');
    /**
     * Static representation of the [[language]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customers.LANGUAGE = new cloud_sdk_core_1.StringField('Language', Customers, 'Edm.String');
    /**
     * Static representation of the [[taxId1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customers.TAX_ID_1 = new cloud_sdk_core_1.StringField('TaxID1', Customers, 'Edm.String');
    /**
     * Static representation of the [[customerHomepage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customers.CUSTOMER_HOMEPAGE = new cloud_sdk_core_1.StringField('CustomerHomepage', Customers, 'Edm.String');
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customers.ADDRESS = new cloud_sdk_core_1.StringField('Address', Customers, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[snavCustomerSalesArea]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customers.SNAV_CUSTOMER_SALES_AREA = new cloud_sdk_core_1.Link('SNAV_CUSTOMER_SALES_AREA', Customers, Customer_Sales_AreAs_1.Customer_Sales_AreAs);
    /**
     * Static representation of the one-to-many navigation property [[snavCustomerCompCode]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customers.SNAV_CUSTOMER_COMP_CODE = new cloud_sdk_core_1.Link('SNAV_CUSTOMER_COMP_CODE', Customers, Customer_Comp_CodEs_1.Customer_Comp_CodEs);
    /**
     * Static representation of the one-to-many navigation property [[snavCustomerBankAccoun]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customers.SNAV_CUSTOMER_BANK_ACCOUN = new cloud_sdk_core_1.Link('SNAV_CUSTOMER_BANK_ACCOUN', Customers, Customer_Bank_AccouNs_1.Customer_Bank_AccouNs);
    /**
     * Static representation of the one-to-many navigation property [[snavContactPerson]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customers.SNAV_CONTACT_PERSON = new cloud_sdk_core_1.Link('SNAV_CONTACT_PERSON', Customers, Contact_PersoNs_1.Contact_PersoNs);
    /**
     * Static representation of the one-to-many navigation property [[csalesOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customers.CSALES_ORDERS = new cloud_sdk_core_1.Link('CSALES_ORDERS', Customers, SalesOrders_1.SalesOrders);
    /**
     * Static representation of the one-to-many navigation property [[csalesQuotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customers.CSALES_QUOTATIONS = new cloud_sdk_core_1.Link('CSALES_QUOTATIONS', Customers, SalesQuotations_1.SalesQuotations);
    /**
     * Static representation of the one-to-many navigation property [[csalesContracts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customers.CSALES_CONTRACTS = new cloud_sdk_core_1.Link('CSALES_CONTRACTS', Customers, SalesContracts_1.SalesContracts);
    /**
     * Static representation of the one-to-many navigation property [[ccustBillDocs]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customers.CCUST_BILL_DOCS = new cloud_sdk_core_1.Link('CCUST_BILL_DOCS', Customers, BillingDocuments_1.BillingDocuments);
    /**
     * Static representation of the one-to-many navigation property [[csalesGpContracts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customers.CSALES_GP_CONTRACTS = new cloud_sdk_core_1.Link('CSALES_GP_CONTRACTS', Customers, SalesGroupContracts_1.SalesGroupContracts);
    /**
     * Static representation of the one-to-many navigation property [[ccustomerProjects]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customers.CCUSTOMER_PROJECTS = new cloud_sdk_core_1.Link('CCUSTOMER_PROJECTS', Customers, Customer_Project_Hs_1.Customer_Project_Hs);
    /**
     * All fields of the Customers entity.
     */
    Customers._allFields = [
        Customers.FORM_OF_ADDRESS,
        Customers.PARTNER,
        Customers.CUSTOMER_NAME,
        Customers.CUSTOMER,
        Customers.CENTRAL_DELIVERY_BLOCK_DESCRIPTION,
        Customers.BILLING_BLOCK_DESCRIPTION,
        Customers.BLOCKING_REASON_DESCRIPTION,
        Customers.CUSTOMER_ADDITIONAL_NAME,
        Customers.STREET_ADDRESS_NAME,
        Customers.CITY_NAME,
        Customers.REGION_NAME,
        Customers.COUNTRY_NAME,
        Customers.FAX,
        Customers.MOBILE,
        Customers.PHONE,
        Customers.POSTAL_CODE,
        Customers.EMAIL_ADDRESS,
        Customers.ORDER_BLOCK,
        Customers.ADDRESS_ID,
        Customers.SEARCH_TERM,
        Customers.CUSTOMER_ACCOUNT_GROUP,
        Customers.INTERNATIONAL_LOCATION_NUMBER,
        Customers.INTERNATIONAL_LOCATION_NUMBER_2,
        Customers.DELIVERY_BLOCK,
        Customers.BILLING_BLOCK,
        Customers.INTERNATIONAL_LOCATION_NUMBER_3,
        Customers.POSTING_BLOCK,
        Customers.INDUSTRY_CODE,
        Customers.CREATED_BY,
        Customers.LANGUAGE,
        Customers.TAX_ID_1,
        Customers.CUSTOMER_HOMEPAGE,
        Customers.ADDRESS,
        Customers.SNAV_CUSTOMER_SALES_AREA,
        Customers.SNAV_CUSTOMER_COMP_CODE,
        Customers.SNAV_CUSTOMER_BANK_ACCOUN,
        Customers.SNAV_CONTACT_PERSON,
        Customers.CSALES_ORDERS,
        Customers.CSALES_QUOTATIONS,
        Customers.CSALES_CONTRACTS,
        Customers.CCUST_BILL_DOCS,
        Customers.CSALES_GP_CONTRACTS,
        Customers.CCUSTOMER_PROJECTS
    ];
    /**
     * All fields selector.
     */
    Customers.ALL_FIELDS = new cloud_sdk_core_1.AllFields('*', Customers);
    /**
     * All key fields of the Customers entity.
     */
    Customers._keyFields = [Customers.CUSTOMER];
    /**
     * Mapping of all key field names to the respective static field property Customers.
     */
    Customers._keys = Customers._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Customers = exports.Customers || (exports.Customers = {}));
exports.Customers = Customers;
//# sourceMappingURL=Customers.js.map