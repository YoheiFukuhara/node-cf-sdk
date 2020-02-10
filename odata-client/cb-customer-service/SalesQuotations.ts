/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */

import { SalesQuotationsRequestBuilder } from './SalesQuotationsRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Selectable, StringField } from '@sap/cloud-sdk-core';

/**
 * This class represents the entity "SalesQuotations" of service "CB_CUSTOMER_SRV".
 */
export class SalesQuotations extends Entity implements SalesQuotationsType {
  /**
   * Technical entity name for SalesQuotations.
   */
  static _entityName = 'SalesQuotations';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for SalesQuotations.
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
   * Sales Quotation.
   * Maximum length: 10.
   */
  salesQuotation!: string;
  /**
   * Sold-To Party.
   * Maximum length: 40.
   * @nullable
   */
  soldToPartyName?: string;
  /**
   * Name 2.
   * Maximum length: 40.
   * @nullable
   */
  soldToPartyAdditionalName?: string;
  /**
   * Ship-To Party.
   * Maximum length: 10.
   * @nullable
   */
  shipToParty?: string;
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
  salesQuotationNetAmount?: BigNumber;
  /**
   * Document Date.
   * @nullable
   */
  salesQuotationDate?: Moment;
  /**
   * Currency.
   * Maximum length: 5.
   * @nullable
   */
  transactionCurrency?: string;
  /**
   * Valid From.
   * @nullable
   */
  salesQuotationValdtyStartDate?: Moment;
  /**
   * Valid To.
   * @nullable
   */
  salesQuotationValidityEndDate?: Moment;
  /**
   * Overall Status.
   * Maximum length: 20.
   * @nullable
   */
  overallSdProcessStatusDesc?: string;
  /**
   * Rejection Status.
   * Maximum length: 20.
   * @nullable
   */
  ovrlSdDocumentRejectionStsDesc?: string;
  /**
   * Ship-To Party.
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
   * Division.
   * Maximum length: 2.
   * @nullable
   */
  division?: string;
  /**
   * Created By.
   * Maximum length: 12.
   * @nullable
   */
  createdByUser?: string;
  /**
   * Distribution Channel.
   * Maximum length: 60.
   * @nullable
   */
  distributionChannelName?: string;
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
   * Division.
   * Maximum length: 60.
   * @nullable
   */
  divisionName?: string;
  /**
   * Sales Document Category.
   * Maximum length: 1.
   * @nullable
   */
  sdDocumentCategory?: string;
  /**
   * Requested Delivery Date.
   * @nullable
   */
  vdatu?: Moment;

  /**
   * Returns an entity builder to construct instances `SalesQuotations`.
   * @returns A builder that constructs instances of entity type `SalesQuotations`.
   */
  static builder(): EntityBuilderType<SalesQuotations, SalesQuotationsTypeForceMandatory> {
    return Entity.entityBuilder(SalesQuotations);
  }

  /**
   * Returns a request builder to construct requests for operations on the `SalesQuotations` entity type.
   * @returns A `SalesQuotations` request builder.
   */
  static requestBuilder(): SalesQuotationsRequestBuilder {
    return new SalesQuotationsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `SalesQuotations`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `SalesQuotations`.
   */
  static customField(fieldName: string): CustomField<SalesQuotations> {
    return Entity.customFieldSelector(fieldName, SalesQuotations);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface SalesQuotationsType {
  vbelnDescr?: string;
  soldToParty?: string;
  salesQuotation: string;
  soldToPartyName?: string;
  soldToPartyAdditionalName?: string;
  shipToParty?: string;
  purchaseOrderByCustomer?: string;
  salesQuotationNetAmount?: BigNumber;
  salesQuotationDate?: Moment;
  transactionCurrency?: string;
  salesQuotationValdtyStartDate?: Moment;
  salesQuotationValidityEndDate?: Moment;
  overallSdProcessStatusDesc?: string;
  ovrlSdDocumentRejectionStsDesc?: string;
  shipToPartyName?: string;
  shipToPartyAdditionalName?: string;
  salesOrganization?: string;
  salesOrganizationName?: string;
  distributionChannel?: string;
  division?: string;
  createdByUser?: string;
  distributionChannelName?: string;
  academicTitleName?: string;
  createdByUserFirstName?: string;
  createdByUserLastName?: string;
  divisionName?: string;
  sdDocumentCategory?: string;
  vdatu?: Moment;
}

export interface SalesQuotationsTypeForceMandatory {
  vbelnDescr: string;
  soldToParty: string;
  salesQuotation: string;
  soldToPartyName: string;
  soldToPartyAdditionalName: string;
  shipToParty: string;
  purchaseOrderByCustomer: string;
  salesQuotationNetAmount: BigNumber;
  salesQuotationDate: Moment;
  transactionCurrency: string;
  salesQuotationValdtyStartDate: Moment;
  salesQuotationValidityEndDate: Moment;
  overallSdProcessStatusDesc: string;
  ovrlSdDocumentRejectionStsDesc: string;
  shipToPartyName: string;
  shipToPartyAdditionalName: string;
  salesOrganization: string;
  salesOrganizationName: string;
  distributionChannel: string;
  division: string;
  createdByUser: string;
  distributionChannelName: string;
  academicTitleName: string;
  createdByUserFirstName: string;
  createdByUserLastName: string;
  divisionName: string;
  sdDocumentCategory: string;
  vdatu: Moment;
}

export namespace SalesQuotations {
  /**
   * Static representation of the [[vbelnDescr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VBELN_DESCR: StringField<SalesQuotations> = new StringField('VBELN_DESCR', SalesQuotations, 'Edm.String');
  /**
   * Static representation of the [[soldToParty]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOLD_TO_PARTY: StringField<SalesQuotations> = new StringField('SoldToParty', SalesQuotations, 'Edm.String');
  /**
   * Static representation of the [[salesQuotation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_QUOTATION: StringField<SalesQuotations> = new StringField('SalesQuotation', SalesQuotations, 'Edm.String');
  /**
   * Static representation of the [[soldToPartyName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOLD_TO_PARTY_NAME: StringField<SalesQuotations> = new StringField('SoldToPartyName', SalesQuotations, 'Edm.String');
  /**
   * Static representation of the [[soldToPartyAdditionalName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOLD_TO_PARTY_ADDITIONAL_NAME: StringField<SalesQuotations> = new StringField('SoldToPartyAdditionalName', SalesQuotations, 'Edm.String');
  /**
   * Static representation of the [[shipToParty]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIP_TO_PARTY: StringField<SalesQuotations> = new StringField('ShipToParty', SalesQuotations, 'Edm.String');
  /**
   * Static representation of the [[purchaseOrderByCustomer]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_ORDER_BY_CUSTOMER: StringField<SalesQuotations> = new StringField('PurchaseOrderByCustomer', SalesQuotations, 'Edm.String');
  /**
   * Static representation of the [[salesQuotationNetAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_QUOTATION_NET_AMOUNT: BigNumberField<SalesQuotations> = new BigNumberField('SalesQuotationNetAmount', SalesQuotations, 'Edm.Decimal');
  /**
   * Static representation of the [[salesQuotationDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_QUOTATION_DATE: DateField<SalesQuotations> = new DateField('SalesQuotationDate', SalesQuotations, 'Edm.DateTime');
  /**
   * Static representation of the [[transactionCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSACTION_CURRENCY: StringField<SalesQuotations> = new StringField('TransactionCurrency', SalesQuotations, 'Edm.String');
  /**
   * Static representation of the [[salesQuotationValdtyStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_QUOTATION_VALDTY_START_DATE: DateField<SalesQuotations> = new DateField('SalesQuotationValdtyStartDate', SalesQuotations, 'Edm.DateTime');
  /**
   * Static representation of the [[salesQuotationValidityEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_QUOTATION_VALIDITY_END_DATE: DateField<SalesQuotations> = new DateField('SalesQuotationValidityEndDate', SalesQuotations, 'Edm.DateTime');
  /**
   * Static representation of the [[overallSdProcessStatusDesc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OVERALL_SD_PROCESS_STATUS_DESC: StringField<SalesQuotations> = new StringField('OverallSDProcessStatusDesc', SalesQuotations, 'Edm.String');
  /**
   * Static representation of the [[ovrlSdDocumentRejectionStsDesc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OVRL_SD_DOCUMENT_REJECTION_STS_DESC: StringField<SalesQuotations> = new StringField('OvrlSDDocumentRejectionStsDesc', SalesQuotations, 'Edm.String');
  /**
   * Static representation of the [[shipToPartyName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIP_TO_PARTY_NAME: StringField<SalesQuotations> = new StringField('ShipToPartyName', SalesQuotations, 'Edm.String');
  /**
   * Static representation of the [[shipToPartyAdditionalName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIP_TO_PARTY_ADDITIONAL_NAME: StringField<SalesQuotations> = new StringField('ShipToPartyAdditionalName', SalesQuotations, 'Edm.String');
  /**
   * Static representation of the [[salesOrganization]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_ORGANIZATION: StringField<SalesQuotations> = new StringField('SalesOrganization', SalesQuotations, 'Edm.String');
  /**
   * Static representation of the [[salesOrganizationName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_ORGANIZATION_NAME: StringField<SalesQuotations> = new StringField('SalesOrganizationName', SalesQuotations, 'Edm.String');
  /**
   * Static representation of the [[distributionChannel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISTRIBUTION_CHANNEL: StringField<SalesQuotations> = new StringField('DistributionChannel', SalesQuotations, 'Edm.String');
  /**
   * Static representation of the [[division]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DIVISION: StringField<SalesQuotations> = new StringField('Division', SalesQuotations, 'Edm.String');
  /**
   * Static representation of the [[createdByUser]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_USER: StringField<SalesQuotations> = new StringField('CreatedByUser', SalesQuotations, 'Edm.String');
  /**
   * Static representation of the [[distributionChannelName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISTRIBUTION_CHANNEL_NAME: StringField<SalesQuotations> = new StringField('DistributionChannelName', SalesQuotations, 'Edm.String');
  /**
   * Static representation of the [[academicTitleName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACADEMIC_TITLE_NAME: StringField<SalesQuotations> = new StringField('AcademicTitleName', SalesQuotations, 'Edm.String');
  /**
   * Static representation of the [[createdByUserFirstName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_USER_FIRST_NAME: StringField<SalesQuotations> = new StringField('CreatedByUserFirstName', SalesQuotations, 'Edm.String');
  /**
   * Static representation of the [[createdByUserLastName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_USER_LAST_NAME: StringField<SalesQuotations> = new StringField('CreatedByUserLastName', SalesQuotations, 'Edm.String');
  /**
   * Static representation of the [[divisionName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DIVISION_NAME: StringField<SalesQuotations> = new StringField('DivisionName', SalesQuotations, 'Edm.String');
  /**
   * Static representation of the [[sdDocumentCategory]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SD_DOCUMENT_CATEGORY: StringField<SalesQuotations> = new StringField('SDDocumentCategory', SalesQuotations, 'Edm.String');
  /**
   * Static representation of the [[vdatu]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VDATU: DateField<SalesQuotations> = new DateField('VDATU', SalesQuotations, 'Edm.DateTime');
  /**
   * All fields of the SalesQuotations entity.
   */
  export const _allFields: Array<StringField<SalesQuotations> | BigNumberField<SalesQuotations> | DateField<SalesQuotations>> = [
    SalesQuotations.VBELN_DESCR,
    SalesQuotations.SOLD_TO_PARTY,
    SalesQuotations.SALES_QUOTATION,
    SalesQuotations.SOLD_TO_PARTY_NAME,
    SalesQuotations.SOLD_TO_PARTY_ADDITIONAL_NAME,
    SalesQuotations.SHIP_TO_PARTY,
    SalesQuotations.PURCHASE_ORDER_BY_CUSTOMER,
    SalesQuotations.SALES_QUOTATION_NET_AMOUNT,
    SalesQuotations.SALES_QUOTATION_DATE,
    SalesQuotations.TRANSACTION_CURRENCY,
    SalesQuotations.SALES_QUOTATION_VALDTY_START_DATE,
    SalesQuotations.SALES_QUOTATION_VALIDITY_END_DATE,
    SalesQuotations.OVERALL_SD_PROCESS_STATUS_DESC,
    SalesQuotations.OVRL_SD_DOCUMENT_REJECTION_STS_DESC,
    SalesQuotations.SHIP_TO_PARTY_NAME,
    SalesQuotations.SHIP_TO_PARTY_ADDITIONAL_NAME,
    SalesQuotations.SALES_ORGANIZATION,
    SalesQuotations.SALES_ORGANIZATION_NAME,
    SalesQuotations.DISTRIBUTION_CHANNEL,
    SalesQuotations.DIVISION,
    SalesQuotations.CREATED_BY_USER,
    SalesQuotations.DISTRIBUTION_CHANNEL_NAME,
    SalesQuotations.ACADEMIC_TITLE_NAME,
    SalesQuotations.CREATED_BY_USER_FIRST_NAME,
    SalesQuotations.CREATED_BY_USER_LAST_NAME,
    SalesQuotations.DIVISION_NAME,
    SalesQuotations.SD_DOCUMENT_CATEGORY,
    SalesQuotations.VDATU
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<SalesQuotations> = new AllFields('*', SalesQuotations);
  /**
   * All key fields of the SalesQuotations entity.
   */
  export const _keyFields: Array<Selectable<SalesQuotations>> = [SalesQuotations.SALES_QUOTATION];
  /**
   * Mapping of all key field names to the respective static field property SalesQuotations.
   */
  export const _keys: { [keys: string]: Selectable<SalesQuotations> } = SalesQuotations._keyFields.reduce((acc: { [keys: string]: Selectable<SalesQuotations> }, field: Selectable<SalesQuotations>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
