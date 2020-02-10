/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */

import { SalesOrdersRequestBuilder } from './SalesOrdersRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Selectable, StringField } from '@sap/cloud-sdk-core';

/**
 * This class represents the entity "SalesOrders" of service "CB_CUSTOMER_SRV".
 */
export class SalesOrders extends Entity implements SalesOrdersType {
  /**
   * Technical entity name for SalesOrders.
   */
  static _entityName = 'SalesOrders';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for SalesOrders.
   */
  static _serviceName = 'CB_CUSTOMER_SRV';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/CB_CUSTOMER_SRV';
  /**
   * Sales Document Type.
   * Maximum length: 60.
   * @nullable
   */
  vbelnDescr?: string;
  /**
   * Sold-To Party.
   * Maximum length: 10.
   * @nullable
   */
  soldToParty?: string;
  /**
   * Customer Reference.
   * Maximum length: 35.
   * @nullable
   */
  purchaseOrderByCustomer?: string;
  /**
   * Net Value.
   * @nullable
   */
  netAmount?: BigNumber;
  /**
   * Document Date.
   * @nullable
   */
  salesOrderDate?: Moment;
  /**
   * Ship-To Party.
   * Maximum length: 10.
   * @nullable
   */
  shipToParty?: string;
  /**
   * Sales Order.
   * Maximum length: 10.
   */
  salesOrder!: string;
  /**
   * Sold-To Party Name.
   * Maximum length: 40.
   * @nullable
   */
  soldToPartyName?: string;
  /**
   * Additional Name.
   * Maximum length: 40.
   * @nullable
   */
  soldToPartyAdditionalName?: string;
  /**
   * Name.
   * Maximum length: 40.
   * @nullable
   */
  shipToPartyName?: string;
  /**
   * Name 2.
   * Maximum length: 40.
   * @nullable
   */
  shipToPartyAdditionalName?: string;
  /**
   * Overall Status.
   * Maximum length: 20.
   * @nullable
   */
  overallSdProcessStatusDesc?: string;
  /**
   * Delivery Status.
   * Maximum length: 20.
   * @nullable
   */
  overallDeliveryStatusDesc?: string;
  /**
   * Credit Status.
   * Maximum length: 20.
   * @nullable
   */
  totalCreditCheckStatusDesc?: string;
  /**
   * Rejection Status.
   * Maximum length: 20.
   * @nullable
   */
  abstkText?: string;
  /**
   * Order Reason.
   * Maximum length: 60.
   * @nullable
   */
  augruText?: string;
  /**
   * Sales Organization.
   * Maximum length: 4.
   * @nullable
   */
  salesOrganization?: string;
  /**
   * Sales Organization.
   * Maximum length: 60.
   * @nullable
   */
  salesOrganizationName?: string;
  /**
   * Distribution Channel.
   * Maximum length: 2.
   * @nullable
   */
  distributionChannel?: string;
  /**
   * Distribution Channel.
   * Maximum length: 60.
   * @nullable
   */
  distributionChannelName?: string;
  /**
   * Division.
   * Maximum length: 2.
   * @nullable
   */
  division?: string;
  /**
   * Division.
   * Maximum length: 60.
   * @nullable
   */
  divisionName?: string;
  /**
   * Currency.
   * Maximum length: 5.
   * @nullable
   */
  transactionCurrency?: string;
  /**
   * Document Category.
   * Maximum length: 1.
   * @nullable
   */
  sdDocumentCategory?: string;
  /**
   * Requested Delivery Date.
   * @nullable
   */
  requestedDeliveryDate?: Moment;
  /**
   * Created By.
   * Maximum length: 12.
   * @nullable
   */
  createdByUser?: string;
  /**
   * Title.
   * Maximum length: 60.
   * @nullable
   */
  academicTitleName?: string;
  /**
   * First Name.
   * Maximum length: 40.
   * @nullable
   */
  createdByUserFirstName?: string;
  /**
   * Last Name.
   * Maximum length: 40.
   * @nullable
   */
  createdByUserLastName?: string;

  /**
   * Returns an entity builder to construct instances `SalesOrders`.
   * @returns A builder that constructs instances of entity type `SalesOrders`.
   */
  static builder(): EntityBuilderType<SalesOrders, SalesOrdersTypeForceMandatory> {
    return Entity.entityBuilder(SalesOrders);
  }

  /**
   * Returns a request builder to construct requests for operations on the `SalesOrders` entity type.
   * @returns A `SalesOrders` request builder.
   */
  static requestBuilder(): SalesOrdersRequestBuilder {
    return new SalesOrdersRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `SalesOrders`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `SalesOrders`.
   */
  static customField(fieldName: string): CustomField<SalesOrders> {
    return Entity.customFieldSelector(fieldName, SalesOrders);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface SalesOrdersType {
  vbelnDescr?: string;
  soldToParty?: string;
  purchaseOrderByCustomer?: string;
  netAmount?: BigNumber;
  salesOrderDate?: Moment;
  shipToParty?: string;
  salesOrder: string;
  soldToPartyName?: string;
  soldToPartyAdditionalName?: string;
  shipToPartyName?: string;
  shipToPartyAdditionalName?: string;
  overallSdProcessStatusDesc?: string;
  overallDeliveryStatusDesc?: string;
  totalCreditCheckStatusDesc?: string;
  abstkText?: string;
  augruText?: string;
  salesOrganization?: string;
  salesOrganizationName?: string;
  distributionChannel?: string;
  distributionChannelName?: string;
  division?: string;
  divisionName?: string;
  transactionCurrency?: string;
  sdDocumentCategory?: string;
  requestedDeliveryDate?: Moment;
  createdByUser?: string;
  academicTitleName?: string;
  createdByUserFirstName?: string;
  createdByUserLastName?: string;
}

export interface SalesOrdersTypeForceMandatory {
  vbelnDescr: string;
  soldToParty: string;
  purchaseOrderByCustomer: string;
  netAmount: BigNumber;
  salesOrderDate: Moment;
  shipToParty: string;
  salesOrder: string;
  soldToPartyName: string;
  soldToPartyAdditionalName: string;
  shipToPartyName: string;
  shipToPartyAdditionalName: string;
  overallSdProcessStatusDesc: string;
  overallDeliveryStatusDesc: string;
  totalCreditCheckStatusDesc: string;
  abstkText: string;
  augruText: string;
  salesOrganization: string;
  salesOrganizationName: string;
  distributionChannel: string;
  distributionChannelName: string;
  division: string;
  divisionName: string;
  transactionCurrency: string;
  sdDocumentCategory: string;
  requestedDeliveryDate: Moment;
  createdByUser: string;
  academicTitleName: string;
  createdByUserFirstName: string;
  createdByUserLastName: string;
}

export namespace SalesOrders {
  /**
   * Static representation of the [[vbelnDescr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VBELN_DESCR: StringField<SalesOrders> = new StringField('VBELN_DESCR', SalesOrders, 'Edm.String');
  /**
   * Static representation of the [[soldToParty]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOLD_TO_PARTY: StringField<SalesOrders> = new StringField('SoldToParty', SalesOrders, 'Edm.String');
  /**
   * Static representation of the [[purchaseOrderByCustomer]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_ORDER_BY_CUSTOMER: StringField<SalesOrders> = new StringField('PurchaseOrderByCustomer', SalesOrders, 'Edm.String');
  /**
   * Static representation of the [[netAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NET_AMOUNT: BigNumberField<SalesOrders> = new BigNumberField('NetAmount', SalesOrders, 'Edm.Decimal');
  /**
   * Static representation of the [[salesOrderDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_ORDER_DATE: DateField<SalesOrders> = new DateField('SalesOrderDate', SalesOrders, 'Edm.DateTime');
  /**
   * Static representation of the [[shipToParty]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIP_TO_PARTY: StringField<SalesOrders> = new StringField('ShipToParty', SalesOrders, 'Edm.String');
  /**
   * Static representation of the [[salesOrder]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_ORDER: StringField<SalesOrders> = new StringField('SalesOrder', SalesOrders, 'Edm.String');
  /**
   * Static representation of the [[soldToPartyName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOLD_TO_PARTY_NAME: StringField<SalesOrders> = new StringField('SoldToPartyName', SalesOrders, 'Edm.String');
  /**
   * Static representation of the [[soldToPartyAdditionalName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOLD_TO_PARTY_ADDITIONAL_NAME: StringField<SalesOrders> = new StringField('SoldToPartyAdditionalName', SalesOrders, 'Edm.String');
  /**
   * Static representation of the [[shipToPartyName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIP_TO_PARTY_NAME: StringField<SalesOrders> = new StringField('ShipToPartyName', SalesOrders, 'Edm.String');
  /**
   * Static representation of the [[shipToPartyAdditionalName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIP_TO_PARTY_ADDITIONAL_NAME: StringField<SalesOrders> = new StringField('ShipToPartyAdditionalName', SalesOrders, 'Edm.String');
  /**
   * Static representation of the [[overallSdProcessStatusDesc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OVERALL_SD_PROCESS_STATUS_DESC: StringField<SalesOrders> = new StringField('OverallSDProcessStatusDesc', SalesOrders, 'Edm.String');
  /**
   * Static representation of the [[overallDeliveryStatusDesc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OVERALL_DELIVERY_STATUS_DESC: StringField<SalesOrders> = new StringField('OverallDeliveryStatusDesc', SalesOrders, 'Edm.String');
  /**
   * Static representation of the [[totalCreditCheckStatusDesc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_CREDIT_CHECK_STATUS_DESC: StringField<SalesOrders> = new StringField('TotalCreditCheckStatusDesc', SalesOrders, 'Edm.String');
  /**
   * Static representation of the [[abstkText]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ABSTK_TEXT: StringField<SalesOrders> = new StringField('ABSTK_TEXT', SalesOrders, 'Edm.String');
  /**
   * Static representation of the [[augruText]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUGRU_TEXT: StringField<SalesOrders> = new StringField('AUGRU_TEXT', SalesOrders, 'Edm.String');
  /**
   * Static representation of the [[salesOrganization]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_ORGANIZATION: StringField<SalesOrders> = new StringField('SalesOrganization', SalesOrders, 'Edm.String');
  /**
   * Static representation of the [[salesOrganizationName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_ORGANIZATION_NAME: StringField<SalesOrders> = new StringField('SalesOrganizationName', SalesOrders, 'Edm.String');
  /**
   * Static representation of the [[distributionChannel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISTRIBUTION_CHANNEL: StringField<SalesOrders> = new StringField('DistributionChannel', SalesOrders, 'Edm.String');
  /**
   * Static representation of the [[distributionChannelName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISTRIBUTION_CHANNEL_NAME: StringField<SalesOrders> = new StringField('DistributionChannelName', SalesOrders, 'Edm.String');
  /**
   * Static representation of the [[division]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DIVISION: StringField<SalesOrders> = new StringField('Division', SalesOrders, 'Edm.String');
  /**
   * Static representation of the [[divisionName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DIVISION_NAME: StringField<SalesOrders> = new StringField('DivisionName', SalesOrders, 'Edm.String');
  /**
   * Static representation of the [[transactionCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSACTION_CURRENCY: StringField<SalesOrders> = new StringField('TransactionCurrency', SalesOrders, 'Edm.String');
  /**
   * Static representation of the [[sdDocumentCategory]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SD_DOCUMENT_CATEGORY: StringField<SalesOrders> = new StringField('SDDocumentCategory', SalesOrders, 'Edm.String');
  /**
   * Static representation of the [[requestedDeliveryDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUESTED_DELIVERY_DATE: DateField<SalesOrders> = new DateField('RequestedDeliveryDate', SalesOrders, 'Edm.DateTime');
  /**
   * Static representation of the [[createdByUser]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_USER: StringField<SalesOrders> = new StringField('CreatedByUser', SalesOrders, 'Edm.String');
  /**
   * Static representation of the [[academicTitleName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACADEMIC_TITLE_NAME: StringField<SalesOrders> = new StringField('AcademicTitleName', SalesOrders, 'Edm.String');
  /**
   * Static representation of the [[createdByUserFirstName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_USER_FIRST_NAME: StringField<SalesOrders> = new StringField('CreatedByUserFirstName', SalesOrders, 'Edm.String');
  /**
   * Static representation of the [[createdByUserLastName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_USER_LAST_NAME: StringField<SalesOrders> = new StringField('CreatedByUserLastName', SalesOrders, 'Edm.String');
  /**
   * All fields of the SalesOrders entity.
   */
  export const _allFields: Array<StringField<SalesOrders> | BigNumberField<SalesOrders> | DateField<SalesOrders>> = [
    SalesOrders.VBELN_DESCR,
    SalesOrders.SOLD_TO_PARTY,
    SalesOrders.PURCHASE_ORDER_BY_CUSTOMER,
    SalesOrders.NET_AMOUNT,
    SalesOrders.SALES_ORDER_DATE,
    SalesOrders.SHIP_TO_PARTY,
    SalesOrders.SALES_ORDER,
    SalesOrders.SOLD_TO_PARTY_NAME,
    SalesOrders.SOLD_TO_PARTY_ADDITIONAL_NAME,
    SalesOrders.SHIP_TO_PARTY_NAME,
    SalesOrders.SHIP_TO_PARTY_ADDITIONAL_NAME,
    SalesOrders.OVERALL_SD_PROCESS_STATUS_DESC,
    SalesOrders.OVERALL_DELIVERY_STATUS_DESC,
    SalesOrders.TOTAL_CREDIT_CHECK_STATUS_DESC,
    SalesOrders.ABSTK_TEXT,
    SalesOrders.AUGRU_TEXT,
    SalesOrders.SALES_ORGANIZATION,
    SalesOrders.SALES_ORGANIZATION_NAME,
    SalesOrders.DISTRIBUTION_CHANNEL,
    SalesOrders.DISTRIBUTION_CHANNEL_NAME,
    SalesOrders.DIVISION,
    SalesOrders.DIVISION_NAME,
    SalesOrders.TRANSACTION_CURRENCY,
    SalesOrders.SD_DOCUMENT_CATEGORY,
    SalesOrders.REQUESTED_DELIVERY_DATE,
    SalesOrders.CREATED_BY_USER,
    SalesOrders.ACADEMIC_TITLE_NAME,
    SalesOrders.CREATED_BY_USER_FIRST_NAME,
    SalesOrders.CREATED_BY_USER_LAST_NAME
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<SalesOrders> = new AllFields('*', SalesOrders);
  /**
   * All key fields of the SalesOrders entity.
   */
  export const _keyFields: Array<Selectable<SalesOrders>> = [SalesOrders.SALES_ORDER];
  /**
   * Mapping of all key field names to the respective static field property SalesOrders.
   */
  export const _keys: { [keys: string]: Selectable<SalesOrders> } = SalesOrders._keyFields.reduce((acc: { [keys: string]: Selectable<SalesOrders> }, field: Selectable<SalesOrders>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
