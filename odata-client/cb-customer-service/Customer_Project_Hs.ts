/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */

import { Customer_Project_HsRequestBuilder } from './Customer_Project_HsRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BinaryField, CustomField, DateField, Entity, EntityBuilderType, Selectable, StringField } from '@sap/cloud-sdk-core';

/**
 * This class represents the entity "CUSTOMER_PROJECT_Hs" of service "CB_CUSTOMER_SRV".
 */
export class Customer_Project_Hs extends Entity implements Customer_Project_HsType {
  /**
   * Technical entity name for Customer_Project_Hs.
   */
  static _entityName = 'CUSTOMER_PROJECT_Hs';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Customer_Project_Hs.
   */
  static _serviceName = 'CB_CUSTOMER_SRV';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/CB_CUSTOMER_SRV';
  /**
   * Project Manager.
   * Maximum length: 80.
   * @nullable
   */
  name1Text?: string;
  /**
   * Customer Project.
   * Maximum length: 40.
   * @nullable
   */
  customerProjectName?: string;
  /**
   * Financial Plan UUID.
   * @nullable
   */
  fpKey?: string;
  /**
   * Customer Project UUID.
   */
  customerProjectUuid!: string;
  /**
   * Customer Project ID.
   * Maximum length: 40.
   * @nullable
   */
  customerProjectId?: string;
  /**
   * Start Date.
   * @nullable
   */
  customePojectStartDate?: Moment;
  /**
   * End Date.
   * @nullable
   */
  customerProjectEndDate?: Moment;
  /**
   * Stage.
   * Maximum length: 40.
   * @nullable
   */
  customerProjectStageText?: string;
  /**
   * Service Organization.
   * Maximum length: 40.
   * @nullable
   */
  customerProjectServiceOrgName?: string;
  /**
   * Commercial Project Type.
   * Maximum length: 4.
   * @nullable
   */
  mpType?: string;
  /**
   * Currency.
   * Maximum length: 5.
   * @nullable
   */
  currency?: string;
  /**
   * Stage ID.
   * Maximum length: 4.
   * @nullable
   */
  customerProjectStage?: string;
  /**
   * Service Organization ID.
   * Maximum length: 5.
   * @nullable
   */
  customerProjectServiceOrg?: string;
  /**
   * Project Manager ID.
   * Maximum length: 8.
   * @nullable
   */
  custProjMgrPersonnelNumber?: string;
  /**
   * Cost Center ID.
   * Maximum length: 20.
   * @nullable
   */
  costCenter?: string;
  /**
   * Confidential.
   * Maximum length: 1.
   * @nullable
   */
  confidential?: string;

  /**
   * Returns an entity builder to construct instances `Customer_Project_Hs`.
   * @returns A builder that constructs instances of entity type `Customer_Project_Hs`.
   */
  static builder(): EntityBuilderType<Customer_Project_Hs, Customer_Project_HsTypeForceMandatory> {
    return Entity.entityBuilder(Customer_Project_Hs);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Customer_Project_Hs` entity type.
   * @returns A `Customer_Project_Hs` request builder.
   */
  static requestBuilder(): Customer_Project_HsRequestBuilder {
    return new Customer_Project_HsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Customer_Project_Hs`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Customer_Project_Hs`.
   */
  static customField(fieldName: string): CustomField<Customer_Project_Hs> {
    return Entity.customFieldSelector(fieldName, Customer_Project_Hs);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface Customer_Project_HsType {
  name1Text?: string;
  customerProjectName?: string;
  fpKey?: string;
  customerProjectUuid: string;
  customerProjectId?: string;
  customePojectStartDate?: Moment;
  customerProjectEndDate?: Moment;
  customerProjectStageText?: string;
  customerProjectServiceOrgName?: string;
  mpType?: string;
  currency?: string;
  customerProjectStage?: string;
  customerProjectServiceOrg?: string;
  custProjMgrPersonnelNumber?: string;
  costCenter?: string;
  confidential?: string;
}

export interface Customer_Project_HsTypeForceMandatory {
  name1Text: string;
  customerProjectName: string;
  fpKey: string;
  customerProjectUuid: string;
  customerProjectId: string;
  customePojectStartDate: Moment;
  customerProjectEndDate: Moment;
  customerProjectStageText: string;
  customerProjectServiceOrgName: string;
  mpType: string;
  currency: string;
  customerProjectStage: string;
  customerProjectServiceOrg: string;
  custProjMgrPersonnelNumber: string;
  costCenter: string;
  confidential: string;
}

export namespace Customer_Project_Hs {
  /**
   * Static representation of the [[name1Text]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_1_TEXT: StringField<Customer_Project_Hs> = new StringField('NAME1_TEXT', Customer_Project_Hs, 'Edm.String');
  /**
   * Static representation of the [[customerProjectName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_PROJECT_NAME: StringField<Customer_Project_Hs> = new StringField('CustomerProjectName', Customer_Project_Hs, 'Edm.String');
  /**
   * Static representation of the [[fpKey]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FP_KEY: BinaryField<Customer_Project_Hs> = new BinaryField('FP_KEY', Customer_Project_Hs, 'Edm.Binary');
  /**
   * Static representation of the [[customerProjectUuid]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_PROJECT_UUID: BinaryField<Customer_Project_Hs> = new BinaryField('CustomerProjectUUID', Customer_Project_Hs, 'Edm.Binary');
  /**
   * Static representation of the [[customerProjectId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_PROJECT_ID: StringField<Customer_Project_Hs> = new StringField('CustomerProjectID', Customer_Project_Hs, 'Edm.String');
  /**
   * Static representation of the [[customePojectStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOME_POJECT_START_DATE: DateField<Customer_Project_Hs> = new DateField('CustomePojectStartDate', Customer_Project_Hs, 'Edm.DateTime');
  /**
   * Static representation of the [[customerProjectEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_PROJECT_END_DATE: DateField<Customer_Project_Hs> = new DateField('CustomerProjectEndDate', Customer_Project_Hs, 'Edm.DateTime');
  /**
   * Static representation of the [[customerProjectStageText]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_PROJECT_STAGE_TEXT: StringField<Customer_Project_Hs> = new StringField('CustomerProjectStageText', Customer_Project_Hs, 'Edm.String');
  /**
   * Static representation of the [[customerProjectServiceOrgName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_PROJECT_SERVICE_ORG_NAME: StringField<Customer_Project_Hs> = new StringField('CustomerProjectServiceOrgName', Customer_Project_Hs, 'Edm.String');
  /**
   * Static representation of the [[mpType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MP_TYPE: StringField<Customer_Project_Hs> = new StringField('MP_TYPE', Customer_Project_Hs, 'Edm.String');
  /**
   * Static representation of the [[currency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY: StringField<Customer_Project_Hs> = new StringField('CURRENCY', Customer_Project_Hs, 'Edm.String');
  /**
   * Static representation of the [[customerProjectStage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_PROJECT_STAGE: StringField<Customer_Project_Hs> = new StringField('CustomerProjectStage', Customer_Project_Hs, 'Edm.String');
  /**
   * Static representation of the [[customerProjectServiceOrg]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_PROJECT_SERVICE_ORG: StringField<Customer_Project_Hs> = new StringField('CustomerProjectServiceOrg', Customer_Project_Hs, 'Edm.String');
  /**
   * Static representation of the [[custProjMgrPersonnelNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_PROJ_MGR_PERSONNEL_NUMBER: StringField<Customer_Project_Hs> = new StringField('CustProjMgrPersonnelNumber', Customer_Project_Hs, 'Edm.String');
  /**
   * Static representation of the [[costCenter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_CENTER: StringField<Customer_Project_Hs> = new StringField('CostCenter', Customer_Project_Hs, 'Edm.String');
  /**
   * Static representation of the [[confidential]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONFIDENTIAL: StringField<Customer_Project_Hs> = new StringField('CONFIDENTIAL', Customer_Project_Hs, 'Edm.String');
  /**
   * All fields of the Customer_Project_Hs entity.
   */
  export const _allFields: Array<StringField<Customer_Project_Hs> | BinaryField<Customer_Project_Hs> | DateField<Customer_Project_Hs>> = [
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
  export const ALL_FIELDS: AllFields<Customer_Project_Hs> = new AllFields('*', Customer_Project_Hs);
  /**
   * All key fields of the Customer_Project_Hs entity.
   */
  export const _keyFields: Array<Selectable<Customer_Project_Hs>> = [Customer_Project_Hs.CUSTOMER_PROJECT_UUID];
  /**
   * Mapping of all key field names to the respective static field property Customer_Project_Hs.
   */
  export const _keys: { [keys: string]: Selectable<Customer_Project_Hs> } = Customer_Project_Hs._keyFields.reduce((acc: { [keys: string]: Selectable<Customer_Project_Hs> }, field: Selectable<Customer_Project_Hs>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
