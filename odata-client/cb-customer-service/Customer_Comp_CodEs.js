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
var Customer_Comp_CodEsRequestBuilder_1 = require("./Customer_Comp_CodEsRequestBuilder");
var cloud_sdk_core_1 = require("@sap/cloud-sdk-core");
/**
 * This class represents the entity "CUSTOMER_COMP_CODEs" of service "CB_CUSTOMER_SRV".
 */
var Customer_Comp_CodEs = /** @class */ (function (_super) {
    __extends(Customer_Comp_CodEs, _super);
    function Customer_Comp_CodEs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Customer_Comp_CodEs`.
     * @returns A builder that constructs instances of entity type `Customer_Comp_CodEs`.
     */
    Customer_Comp_CodEs.builder = function () {
        return cloud_sdk_core_1.Entity.entityBuilder(Customer_Comp_CodEs);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Customer_Comp_CodEs` entity type.
     * @returns A `Customer_Comp_CodEs` request builder.
     */
    Customer_Comp_CodEs.requestBuilder = function () {
        return new Customer_Comp_CodEsRequestBuilder_1.Customer_Comp_CodEsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Customer_Comp_CodEs`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Customer_Comp_CodEs`.
     */
    Customer_Comp_CodEs.customField = function (fieldName) {
        return cloud_sdk_core_1.Entity.customFieldSelector(fieldName, Customer_Comp_CodEs);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Customer_Comp_CodEs.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Customer_Comp_CodEs.
     */
    Customer_Comp_CodEs._entityName = 'CUSTOMER_COMP_CODEs';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Customer_Comp_CodEs.
     */
    Customer_Comp_CodEs._serviceName = 'CB_CUSTOMER_SRV';
    /**
     * Default url path for the according service.
     */
    Customer_Comp_CodEs._defaultServicePath = '/sap/opu/odata/sap/CB_CUSTOMER_SRV';
    return Customer_Comp_CodEs;
}(cloud_sdk_core_1.Entity));
exports.Customer_Comp_CodEs = Customer_Comp_CodEs;
(function (Customer_Comp_CodEs) {
    /**
     * Static representation of the [[formOfAddressCc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Comp_CodEs.FORM_OF_ADDRESS_CC = new cloud_sdk_core_1.StringField('FormOfAddressCC', Customer_Comp_CodEs, 'Edm.String');
    /**
     * Static representation of the [[customerCc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Comp_CodEs.CUSTOMER_CC = new cloud_sdk_core_1.StringField('CustomerCC', Customer_Comp_CodEs, 'Edm.String');
    /**
     * Static representation of the [[contactPersonLastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Comp_CodEs.CONTACT_PERSON_LAST_NAME = new cloud_sdk_core_1.StringField('ContactPersonLastName', Customer_Comp_CodEs, 'Edm.String');
    /**
     * Static representation of the [[companyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Comp_CodEs.COMPANY_CODE = new cloud_sdk_core_1.StringField('CompanyCode', Customer_Comp_CodEs, 'Edm.String');
    /**
     * Static representation of the [[dunningProcedure]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Comp_CodEs.DUNNING_PROCEDURE = new cloud_sdk_core_1.StringField('DunningProcedure', Customer_Comp_CodEs, 'Edm.String');
    /**
     * Static representation of the [[dunnigBlock]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Comp_CodEs.DUNNIG_BLOCK = new cloud_sdk_core_1.StringField('DunnigBlock', Customer_Comp_CodEs, 'Edm.String');
    /**
     * Static representation of the [[lastDunnedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Comp_CodEs.LAST_DUNNED_ON = new cloud_sdk_core_1.DateField('LastDunnedOn', Customer_Comp_CodEs, 'Edm.DateTime');
    /**
     * Static representation of the [[dunningLevel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Comp_CodEs.DUNNING_LEVEL = new cloud_sdk_core_1.StringField('DunningLevel', Customer_Comp_CodEs, 'Edm.String');
    /**
     * Static representation of the [[dunningRecipient]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Comp_CodEs.DUNNING_RECIPIENT = new cloud_sdk_core_1.StringField('DunningRecipient', Customer_Comp_CodEs, 'Edm.String');
    /**
     * Static representation of the [[legDunningProcedure]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Comp_CodEs.LEG_DUNNING_PROCEDURE = new cloud_sdk_core_1.DateField('LegDunningProcedure', Customer_Comp_CodEs, 'Edm.DateTime');
    /**
     * Static representation of the [[companyCodeName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Comp_CodEs.COMPANY_CODE_NAME = new cloud_sdk_core_1.StringField('CompanyCodeName', Customer_Comp_CodEs, 'Edm.String');
    /**
     * Static representation of the [[accountingClerk2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Comp_CodEs.ACCOUNTING_CLERK_2 = new cloud_sdk_core_1.StringField('AccountingClerk2', Customer_Comp_CodEs, 'Edm.String');
    /**
     * Static representation of the [[accountingClerk]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Comp_CodEs.ACCOUNTING_CLERK = new cloud_sdk_core_1.StringField('AccountingClerk', Customer_Comp_CodEs, 'Edm.String');
    /**
     * Static representation of the [[accountingClerkName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Comp_CodEs.ACCOUNTING_CLERK_NAME = new cloud_sdk_core_1.StringField('AccountingClerkName', Customer_Comp_CodEs, 'Edm.String');
    /**
     * Static representation of the [[reconciliationAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Comp_CodEs.RECONCILIATION_ACCOUNT = new cloud_sdk_core_1.StringField('ReconciliationAccount', Customer_Comp_CodEs, 'Edm.String');
    /**
     * Static representation of the [[blockingIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Comp_CodEs.BLOCKING_INDICATOR = new cloud_sdk_core_1.StringField('BlockingIndicator', Customer_Comp_CodEs, 'Edm.String');
    /**
     * All fields of the Customer_Comp_CodEs entity.
     */
    Customer_Comp_CodEs._allFields = [
        Customer_Comp_CodEs.FORM_OF_ADDRESS_CC,
        Customer_Comp_CodEs.CUSTOMER_CC,
        Customer_Comp_CodEs.CONTACT_PERSON_LAST_NAME,
        Customer_Comp_CodEs.COMPANY_CODE,
        Customer_Comp_CodEs.DUNNING_PROCEDURE,
        Customer_Comp_CodEs.DUNNIG_BLOCK,
        Customer_Comp_CodEs.LAST_DUNNED_ON,
        Customer_Comp_CodEs.DUNNING_LEVEL,
        Customer_Comp_CodEs.DUNNING_RECIPIENT,
        Customer_Comp_CodEs.LEG_DUNNING_PROCEDURE,
        Customer_Comp_CodEs.COMPANY_CODE_NAME,
        Customer_Comp_CodEs.ACCOUNTING_CLERK_2,
        Customer_Comp_CodEs.ACCOUNTING_CLERK,
        Customer_Comp_CodEs.ACCOUNTING_CLERK_NAME,
        Customer_Comp_CodEs.RECONCILIATION_ACCOUNT,
        Customer_Comp_CodEs.BLOCKING_INDICATOR
    ];
    /**
     * All fields selector.
     */
    Customer_Comp_CodEs.ALL_FIELDS = new cloud_sdk_core_1.AllFields('*', Customer_Comp_CodEs);
    /**
     * All key fields of the Customer_Comp_CodEs entity.
     */
    Customer_Comp_CodEs._keyFields = [Customer_Comp_CodEs.CUSTOMER_CC, Customer_Comp_CodEs.COMPANY_CODE];
    /**
     * Mapping of all key field names to the respective static field property Customer_Comp_CodEs.
     */
    Customer_Comp_CodEs._keys = Customer_Comp_CodEs._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Customer_Comp_CodEs = exports.Customer_Comp_CodEs || (exports.Customer_Comp_CodEs = {}));
exports.Customer_Comp_CodEs = Customer_Comp_CodEs;
//# sourceMappingURL=Customer_Comp_CodEs.js.map