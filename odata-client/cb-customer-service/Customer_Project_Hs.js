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
var Customer_Project_HsRequestBuilder_1 = require("./Customer_Project_HsRequestBuilder");
var cloud_sdk_core_1 = require("@sap/cloud-sdk-core");
/**
 * This class represents the entity "CUSTOMER_PROJECT_Hs" of service "CB_CUSTOMER_SRV".
 */
var Customer_Project_Hs = /** @class */ (function (_super) {
    __extends(Customer_Project_Hs, _super);
    function Customer_Project_Hs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Customer_Project_Hs`.
     * @returns A builder that constructs instances of entity type `Customer_Project_Hs`.
     */
    Customer_Project_Hs.builder = function () {
        return cloud_sdk_core_1.Entity.entityBuilder(Customer_Project_Hs);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Customer_Project_Hs` entity type.
     * @returns A `Customer_Project_Hs` request builder.
     */
    Customer_Project_Hs.requestBuilder = function () {
        return new Customer_Project_HsRequestBuilder_1.Customer_Project_HsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Customer_Project_Hs`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Customer_Project_Hs`.
     */
    Customer_Project_Hs.customField = function (fieldName) {
        return cloud_sdk_core_1.Entity.customFieldSelector(fieldName, Customer_Project_Hs);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Customer_Project_Hs.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Customer_Project_Hs.
     */
    Customer_Project_Hs._entityName = 'CUSTOMER_PROJECT_Hs';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Customer_Project_Hs.
     */
    Customer_Project_Hs._serviceName = 'CB_CUSTOMER_SRV';
    /**
     * Default url path for the according service.
     */
    Customer_Project_Hs._defaultServicePath = '/sap/opu/odata/sap/CB_CUSTOMER_SRV';
    return Customer_Project_Hs;
}(cloud_sdk_core_1.Entity));
exports.Customer_Project_Hs = Customer_Project_Hs;
(function (Customer_Project_Hs) {
    /**
     * Static representation of the [[name1Text]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Project_Hs.NAME_1_TEXT = new cloud_sdk_core_1.StringField('NAME1_TEXT', Customer_Project_Hs, 'Edm.String');
    /**
     * Static representation of the [[customerProjectName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Project_Hs.CUSTOMER_PROJECT_NAME = new cloud_sdk_core_1.StringField('CustomerProjectName', Customer_Project_Hs, 'Edm.String');
    /**
     * Static representation of the [[fpKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Project_Hs.FP_KEY = new cloud_sdk_core_1.BinaryField('FP_KEY', Customer_Project_Hs, 'Edm.Binary');
    /**
     * Static representation of the [[customerProjectUuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Project_Hs.CUSTOMER_PROJECT_UUID = new cloud_sdk_core_1.BinaryField('CustomerProjectUUID', Customer_Project_Hs, 'Edm.Binary');
    /**
     * Static representation of the [[customerProjectId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Project_Hs.CUSTOMER_PROJECT_ID = new cloud_sdk_core_1.StringField('CustomerProjectID', Customer_Project_Hs, 'Edm.String');
    /**
     * Static representation of the [[customePojectStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Project_Hs.CUSTOME_POJECT_START_DATE = new cloud_sdk_core_1.DateField('CustomePojectStartDate', Customer_Project_Hs, 'Edm.DateTime');
    /**
     * Static representation of the [[customerProjectEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Project_Hs.CUSTOMER_PROJECT_END_DATE = new cloud_sdk_core_1.DateField('CustomerProjectEndDate', Customer_Project_Hs, 'Edm.DateTime');
    /**
     * Static representation of the [[customerProjectStageText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Project_Hs.CUSTOMER_PROJECT_STAGE_TEXT = new cloud_sdk_core_1.StringField('CustomerProjectStageText', Customer_Project_Hs, 'Edm.String');
    /**
     * Static representation of the [[customerProjectServiceOrgName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Project_Hs.CUSTOMER_PROJECT_SERVICE_ORG_NAME = new cloud_sdk_core_1.StringField('CustomerProjectServiceOrgName', Customer_Project_Hs, 'Edm.String');
    /**
     * Static representation of the [[mpType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Project_Hs.MP_TYPE = new cloud_sdk_core_1.StringField('MP_TYPE', Customer_Project_Hs, 'Edm.String');
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Project_Hs.CURRENCY = new cloud_sdk_core_1.StringField('CURRENCY', Customer_Project_Hs, 'Edm.String');
    /**
     * Static representation of the [[customerProjectStage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Project_Hs.CUSTOMER_PROJECT_STAGE = new cloud_sdk_core_1.StringField('CustomerProjectStage', Customer_Project_Hs, 'Edm.String');
    /**
     * Static representation of the [[customerProjectServiceOrg]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Project_Hs.CUSTOMER_PROJECT_SERVICE_ORG = new cloud_sdk_core_1.StringField('CustomerProjectServiceOrg', Customer_Project_Hs, 'Edm.String');
    /**
     * Static representation of the [[custProjMgrPersonnelNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Project_Hs.CUST_PROJ_MGR_PERSONNEL_NUMBER = new cloud_sdk_core_1.StringField('CustProjMgrPersonnelNumber', Customer_Project_Hs, 'Edm.String');
    /**
     * Static representation of the [[costCenter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Project_Hs.COST_CENTER = new cloud_sdk_core_1.StringField('CostCenter', Customer_Project_Hs, 'Edm.String');
    /**
     * Static representation of the [[confidential]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer_Project_Hs.CONFIDENTIAL = new cloud_sdk_core_1.StringField('CONFIDENTIAL', Customer_Project_Hs, 'Edm.String');
    /**
     * All fields of the Customer_Project_Hs entity.
     */
    Customer_Project_Hs._allFields = [
        Customer_Project_Hs.NAME_1_TEXT,
        Customer_Project_Hs.CUSTOMER_PROJECT_NAME,
        Customer_Project_Hs.FP_KEY,
        Customer_Project_Hs.CUSTOMER_PROJECT_UUID,
        Customer_Project_Hs.CUSTOMER_PROJECT_ID,
        Customer_Project_Hs.CUSTOME_POJECT_START_DATE,
        Customer_Project_Hs.CUSTOMER_PROJECT_END_DATE,
        Customer_Project_Hs.CUSTOMER_PROJECT_STAGE_TEXT,
        Customer_Project_Hs.CUSTOMER_PROJECT_SERVICE_ORG_NAME,
        Customer_Project_Hs.MP_TYPE,
        Customer_Project_Hs.CURRENCY,
        Customer_Project_Hs.CUSTOMER_PROJECT_STAGE,
        Customer_Project_Hs.CUSTOMER_PROJECT_SERVICE_ORG,
        Customer_Project_Hs.CUST_PROJ_MGR_PERSONNEL_NUMBER,
        Customer_Project_Hs.COST_CENTER,
        Customer_Project_Hs.CONFIDENTIAL
    ];
    /**
     * All fields selector.
     */
    Customer_Project_Hs.ALL_FIELDS = new cloud_sdk_core_1.AllFields('*', Customer_Project_Hs);
    /**
     * All key fields of the Customer_Project_Hs entity.
     */
    Customer_Project_Hs._keyFields = [Customer_Project_Hs.CUSTOMER_PROJECT_UUID];
    /**
     * Mapping of all key field names to the respective static field property Customer_Project_Hs.
     */
    Customer_Project_Hs._keys = Customer_Project_Hs._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Customer_Project_Hs = exports.Customer_Project_Hs || (exports.Customer_Project_Hs = {}));
exports.Customer_Project_Hs = Customer_Project_Hs;
//# sourceMappingURL=Customer_Project_Hs.js.map