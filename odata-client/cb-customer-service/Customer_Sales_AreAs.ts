/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */

import { Customer_Sales_AreAsRequestBuilder } from './Customer_Sales_AreAsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap/cloud-sdk-core';

/**
 * This class represents the entity "CUSTOMER_SALES_AREAs" of service "CB_CUSTOMER_SRV".
 */
export class Customer_Sales_AreAs extends Entity implements Customer_Sales_AreAsType {
  /**
   * Technical entity name for Customer_Sales_AreAs.
   */
  static _entityName = 'CUSTOMER_SALES_AREAs';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Customer_Sales_AreAs.
   */
  static _serviceName = 'CB_CUSTOMER_SRV';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/CB_CUSTOMER_SRV';
  /**
   * Sales Organization ID.
   * Maximum length: 4.
   */
  salesOrganization!: string;
  /**
   * Sales Organization.
   * Maximum length: 60.
   * @nullable
   */
  salesOrganizationName?: string;
  /**
   * Distribution Channel ID.
   * Maximum length: 2.
   */
  distributionChannel!: string;
  /**
   * Delivery Block.
   * Maximum length: 20.
   * @nullable
   */
  deliveryBlockDescription?: string;
  /**
   * Billing Block.
   * Maximum length: 20.
   * @nullable
   */
  billingBlockDescription?: string;
  /**
   * Order Block.
   * Maximum length: 20.
   * @nullable
   */
  orderBlockDescription?: string;
  /**
   * Distribution Channel.
   * Maximum length: 60.
   * @nullable
   */
  distributionChannelName?: string;
  /**
   * Division ID.
   * Maximum length: 2.
   */
  division!: string;
  /**
   * Division.
   * Maximum length: 60.
   * @nullable
   */
  divisionName?: string;
  /**
   * Sales Office.
   * Maximum length: 4.
   * @nullable
   */
  salesOffice?: string;
  /**
   * Sales Office Description.
   * Maximum length: 60.
   * @nullable
   */
  salesOfficeName?: string;
  /**
   * Sales Group.
   * Maximum length: 3.
   * @nullable
   */
  salesGroup?: string;
  /**
   * Sales Group Description.
   * Maximum length: 60.
   * @nullable
   */
  salesGroupName?: string;
  /**
   * Customer Group.
   * Maximum length: 2.
   * @nullable
   */
  customerGroup?: string;
  /**
   * Customer Group Description.
   * Maximum length: 60.
   * @nullable
   */
  customerGroupName?: string;
  /**
   * ABC Class.
   * Maximum length: 2.
   * @nullable
   */
  customerAbcClassification?: string;

  /**
   * Returns an entity builder to construct instances `Customer_Sales_AreAs`.
   * @returns A builder that constructs instances of entity type `Customer_Sales_AreAs`.
   */
  static builder(): EntityBuilderType<Customer_Sales_AreAs, Customer_Sales_AreAsTypeForceMandatory> {
    return Entity.entityBuilder(Customer_Sales_AreAs);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Customer_Sales_AreAs` entity type.
   * @returns A `Customer_Sales_AreAs` request builder.
   */
  static requestBuilder(): Customer_Sales_AreAsRequestBuilder {
    return new Customer_Sales_AreAsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Customer_Sales_AreAs`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Customer_Sales_AreAs`.
   */
  static customField(fieldName: string): CustomField<Customer_Sales_AreAs> {
    return Entity.customFieldSelector(fieldName, Customer_Sales_AreAs);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface Customer_Sales_AreAsType {
  salesOrganization: string;
  salesOrganizationName?: string;
  distributionChannel: string;
  deliveryBlockDescription?: string;
  billingBlockDescription?: string;
  orderBlockDescription?: string;
  distributionChannelName?: string;
  division: string;
  divisionName?: string;
  salesOffice?: string;
  salesOfficeName?: string;
  salesGroup?: string;
  salesGroupName?: string;
  customerGroup?: string;
  customerGroupName?: string;
  customerAbcClassification?: string;
}

export interface Customer_Sales_AreAsTypeForceMandatory {
  salesOrganization: string;
  salesOrganizationName: string;
  distributionChannel: string;
  deliveryBlockDescription: string;
  billingBlockDescription: string;
  orderBlockDescription: string;
  distributionChannelName: string;
  division: string;
  divisionName: string;
  salesOffice: string;
  salesOfficeName: string;
  salesGroup: string;
  salesGroupName: string;
  customerGroup: string;
  customerGroupName: string;
  customerAbcClassification: string;
}

export namespace Customer_Sales_AreAs {
  /**
   * Static representation of the [[salesOrganization]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_ORGANIZATION: StringField<Customer_Sales_AreAs> = new StringField('SalesOrganization', Customer_Sales_AreAs, 'Edm.String');
  /**
   * Static representation of the [[salesOrganizationName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_ORGANIZATION_NAME: StringField<Customer_Sales_AreAs> = new StringField('SalesOrganizationName', Customer_Sales_AreAs, 'Edm.String');
  /**
   * Static representation of the [[distributionChannel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISTRIBUTION_CHANNEL: StringField<Customer_Sales_AreAs> = new StringField('DistributionChannel', Customer_Sales_AreAs, 'Edm.String');
  /**
   * Static representation of the [[deliveryBlockDescription]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DELIVERY_BLOCK_DESCRIPTION: StringField<Customer_Sales_AreAs> = new StringField('DeliveryBlockDescription', Customer_Sales_AreAs, 'Edm.String');
  /**
   * Static representation of the [[billingBlockDescription]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BILLING_BLOCK_DESCRIPTION: StringField<Customer_Sales_AreAs> = new StringField('BillingBlockDescription', Customer_Sales_AreAs, 'Edm.String');
  /**
   * Static representation of the [[orderBlockDescription]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDER_BLOCK_DESCRIPTION: StringField<Customer_Sales_AreAs> = new StringField('OrderBlockDescription', Customer_Sales_AreAs, 'Edm.String');
  /**
   * Static representation of the [[distributionChannelName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISTRIBUTION_CHANNEL_NAME: StringField<Customer_Sales_AreAs> = new StringField('DistributionChannelName', Customer_Sales_AreAs, 'Edm.String');
  /**
   * Static representation of the [[division]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DIVISION: StringField<Customer_Sales_AreAs> = new StringField('Division', Customer_Sales_AreAs, 'Edm.String');
  /**
   * Static representation of the [[divisionName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DIVISION_NAME: StringField<Customer_Sales_AreAs> = new StringField('DivisionName', Customer_Sales_AreAs, 'Edm.String');
  /**
   * Static representation of the [[salesOffice]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_OFFICE: StringField<Customer_Sales_AreAs> = new StringField('SalesOffice', Customer_Sales_AreAs, 'Edm.String');
  /**
   * Static representation of the [[salesOfficeName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_OFFICE_NAME: StringField<Customer_Sales_AreAs> = new StringField('SalesOfficeName', Customer_Sales_AreAs, 'Edm.String');
  /**
   * Static representation of the [[salesGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_GROUP: StringField<Customer_Sales_AreAs> = new StringField('SalesGroup', Customer_Sales_AreAs, 'Edm.String');
  /**
   * Static representation of the [[salesGroupName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_GROUP_NAME: StringField<Customer_Sales_AreAs> = new StringField('SalesGroupName', Customer_Sales_AreAs, 'Edm.String');
  /**
   * Static representation of the [[customerGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_GROUP: StringField<Customer_Sales_AreAs> = new StringField('CustomerGroup', Customer_Sales_AreAs, 'Edm.String');
  /**
   * Static representation of the [[customerGroupName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_GROUP_NAME: StringField<Customer_Sales_AreAs> = new StringField('CustomerGroupName', Customer_Sales_AreAs, 'Edm.String');
  /**
   * Static representation of the [[customerAbcClassification]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_ABC_CLASSIFICATION: StringField<Customer_Sales_AreAs> = new StringField('CustomerABCClassification', Customer_Sales_AreAs, 'Edm.String');
  /**
   * All fields of the Customer_Sales_AreAs entity.
   */
  export const _allFields: Array<StringField<Customer_Sales_AreAs>> = [
    Customer_Sales_AreAs.SALES_ORGANIZATION,
    Customer_Sales_AreAs.SALES_ORGANIZATION_NAME,
    Customer_Sales_AreAs.DISTRIBUTION_CHANNEL,
    Customer_Sales_AreAs.DELIVERY_BLOCK_DESCRIPTION,
    Customer_Sales_AreAs.BILLING_BLOCK_DESCRIPTION,
    Customer_Sales_AreAs.ORDER_BLOCK_DESCRIPTION,
    Customer_Sales_AreAs.DISTRIBUTION_CHANNEL_NAME,
    Customer_Sales_AreAs.DIVISION,
    Customer_Sales_AreAs.DIVISION_NAME,
    Customer_Sales_AreAs.SALES_OFFICE,
    Customer_Sales_AreAs.SALES_OFFICE_NAME,
    Customer_Sales_AreAs.SALES_GROUP,
    Customer_Sales_AreAs.SALES_GROUP_NAME,
    Customer_Sales_AreAs.CUSTOMER_GROUP,
    Customer_Sales_AreAs.CUSTOMER_GROUP_NAME,
    Customer_Sales_AreAs.CUSTOMER_ABC_CLASSIFICATION
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Customer_Sales_AreAs> = new AllFields('*', Customer_Sales_AreAs);
  /**
   * All key fields of the Customer_Sales_AreAs entity.
   */
  export const _keyFields: Array<Selectable<Customer_Sales_AreAs>> = [Customer_Sales_AreAs.SALES_ORGANIZATION, Customer_Sales_AreAs.DISTRIBUTION_CHANNEL, Customer_Sales_AreAs.DIVISION];
  /**
   * Mapping of all key field names to the respective static field property Customer_Sales_AreAs.
   */
  export const _keys: { [keys: string]: Selectable<Customer_Sales_AreAs> } = Customer_Sales_AreAs._keyFields.reduce((acc: { [keys: string]: Selectable<Customer_Sales_AreAs> }, field: Selectable<Customer_Sales_AreAs>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
