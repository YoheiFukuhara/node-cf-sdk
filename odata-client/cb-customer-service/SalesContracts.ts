/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */

import { SalesContractsRequestBuilder } from './SalesContractsRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Selectable, StringField } from '@sap/cloud-sdk-core';

/**
 * This class represents the entity "SalesContracts" of service "CB_CUSTOMER_SRV".
 */
export class SalesContracts extends Entity implements SalesContractsType {
  /**
   * Technical entity name for SalesContracts.
   */
  static _entityName = 'SalesContracts';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for SalesContracts.
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
   * Sales Contract.
   * Maximum length: 10.
   */
  salesContract!: string;
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
  salesContractDate?: Moment;
  /**
   * Ship-To Party.
   * Maximum length: 10.
   * @nullable
   */
  shipToParty?: string;
  /**
   * Valid From.
   * @nullable
   */
  salesContractValidityStartDate?: Moment;
  /**
   * Valid To.
   * @nullable
   */
  salesContractValidityEndDate?: Moment;
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
  abstkText?: string;
  /**
   * Sales Document Category.
   * Maximum length: 1.
   * @nullable
   */
  vbtyp?: string;
  /**
   * Sold-To Party Name.
   * Maximum length: 40.
   * @nullable
   */
  soldToPartyName?: string;
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
   * Name 2.
   * Maximum length: 40.
   * @nullable
   */
  soldToPartyAdditionalName?: string;
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
   * Currency.
   * Maximum length: 5.
   * @nullable
   */
  netAmountCurrency?: string;
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
   * Group Contract.
   * Maximum length: 10.
   * @nullable
   */
  vbelnGrp?: string;

  /**
   * Returns an entity builder to construct instances `SalesContracts`.
   * @returns A builder that constructs instances of entity type `SalesContracts`.
   */
  static builder(): EntityBuilderType<SalesContracts, SalesContractsTypeForceMandatory> {
    return Entity.entityBuilder(SalesContracts);
  }

  /**
   * Returns a request builder to construct requests for operations on the `SalesContracts` entity type.
   * @returns A `SalesContracts` request builder.
   */
  static requestBuilder(): SalesContractsRequestBuilder {
    return new SalesContractsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `SalesContracts`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `SalesContracts`.
   */
  static customField(fieldName: string): CustomField<SalesContracts> {
    return Entity.customFieldSelector(fieldName, SalesContracts);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface SalesContractsType {
  vbelnDescr?: string;
  salesContract: string;
  soldToParty?: string;
  purchaseOrderByCustomer?: string;
  netAmount?: BigNumber;
  salesContractDate?: Moment;
  shipToParty?: string;
  salesContractValidityStartDate?: Moment;
  salesContractValidityEndDate?: Moment;
  overallSdProcessStatusDesc?: string;
  abstkText?: string;
  vbtyp?: string;
  soldToPartyName?: string;
  shipToPartyName?: string;
  shipToPartyAdditionalName?: string;
  soldToPartyAdditionalName?: string;
  salesOrganization?: string;
  salesOrganizationName?: string;
  netAmountCurrency?: string;
  distributionChannel?: string;
  distributionChannelName?: string;
  division?: string;
  divisionName?: string;
  createdByUser?: string;
  academicTitleName?: string;
  createdByUserFirstName?: string;
  createdByUserLastName?: string;
  vbelnGrp?: string;
}

export interface SalesContractsTypeForceMandatory {
  vbelnDescr: string;
  salesContract: string;
  soldToParty: string;
  purchaseOrderByCustomer: string;
  netAmount: BigNumber;
  salesContractDate: Moment;
  shipToParty: string;
  salesContractValidityStartDate: Moment;
  salesContractValidityEndDate: Moment;
  overallSdProcessStatusDesc: string;
  abstkText: string;
  vbtyp: string;
  soldToPartyName: string;
  shipToPartyName: string;
  shipToPartyAdditionalName: string;
  soldToPartyAdditionalName: string;
  salesOrganization: string;
  salesOrganizationName: string;
  netAmountCurrency: string;
  distributionChannel: string;
  distributionChannelName: string;
  division: string;
  divisionName: string;
  createdByUser: string;
  academicTitleName: string;
  createdByUserFirstName: string;
  createdByUserLastName: string;
  vbelnGrp: string;
}

export namespace SalesContracts {
  /**
   * Static representation of the [[vbelnDescr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VBELN_DESCR: StringField<SalesContracts> = new StringField('VBELN_DESCR', SalesContracts, 'Edm.String');
  /**
   * Static representation of the [[salesContract]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_CONTRACT: StringField<SalesContracts> = new StringField('SalesContract', SalesContracts, 'Edm.String');
  /**
   * Static representation of the [[soldToParty]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOLD_TO_PARTY: StringField<SalesContracts> = new StringField('SoldToParty', SalesContracts, 'Edm.String');
  /**
   * Static representation of the [[purchaseOrderByCustomer]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_ORDER_BY_CUSTOMER: StringField<SalesContracts> = new StringField('PurchaseOrderByCustomer', SalesContracts, 'Edm.String');
  /**
   * Static representation of the [[netAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NET_AMOUNT: BigNumberField<SalesContracts> = new BigNumberField('NetAmount', SalesContracts, 'Edm.Decimal');
  /**
   * Static representation of the [[salesContractDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_CONTRACT_DATE: DateField<SalesContracts> = new DateField('SalesContractDate', SalesContracts, 'Edm.DateTime');
  /**
   * Static representation of the [[shipToParty]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIP_TO_PARTY: StringField<SalesContracts> = new StringField('ShipToParty', SalesContracts, 'Edm.String');
  /**
   * Static representation of the [[salesContractValidityStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_CONTRACT_VALIDITY_START_DATE: DateField<SalesContracts> = new DateField('SalesContractValidityStartDate', SalesContracts, 'Edm.DateTime');
  /**
   * Static representation of the [[salesContractValidityEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_CONTRACT_VALIDITY_END_DATE: DateField<SalesContracts> = new DateField('SalesContractValidityEndDate', SalesContracts, 'Edm.DateTime');
  /**
   * Static representation of the [[overallSdProcessStatusDesc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OVERALL_SD_PROCESS_STATUS_DESC: StringField<SalesContracts> = new StringField('OverallSDProcessStatusDesc', SalesContracts, 'Edm.String');
  /**
   * Static representation of the [[abstkText]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ABSTK_TEXT: StringField<SalesContracts> = new StringField('ABSTK_TEXT', SalesContracts, 'Edm.String');
  /**
   * Static representation of the [[vbtyp]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VBTYP: StringField<SalesContracts> = new StringField('VBTYP', SalesContracts, 'Edm.String');
  /**
   * Static representation of the [[soldToPartyName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOLD_TO_PARTY_NAME: StringField<SalesContracts> = new StringField('SoldToPartyName', SalesContracts, 'Edm.String');
  /**
   * Static representation of the [[shipToPartyName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIP_TO_PARTY_NAME: StringField<SalesContracts> = new StringField('ShipToPartyName', SalesContracts, 'Edm.String');
  /**
   * Static representation of the [[shipToPartyAdditionalName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIP_TO_PARTY_ADDITIONAL_NAME: StringField<SalesContracts> = new StringField('ShipToPartyAdditionalName', SalesContracts, 'Edm.String');
  /**
   * Static representation of the [[soldToPartyAdditionalName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOLD_TO_PARTY_ADDITIONAL_NAME: StringField<SalesContracts> = new StringField('SoldToPartyAdditionalName', SalesContracts, 'Edm.String');
  /**
   * Static representation of the [[salesOrganization]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_ORGANIZATION: StringField<SalesContracts> = new StringField('SalesOrganization', SalesContracts, 'Edm.String');
  /**
   * Static representation of the [[salesOrganizationName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_ORGANIZATION_NAME: StringField<SalesContracts> = new StringField('SalesOrganizationName', SalesContracts, 'Edm.String');
  /**
   * Static representation of the [[netAmountCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NET_AMOUNT_CURRENCY: StringField<SalesContracts> = new StringField('NetAmountCurrency', SalesContracts, 'Edm.String');
  /**
   * Static representation of the [[distributionChannel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISTRIBUTION_CHANNEL: StringField<SalesContracts> = new StringField('DistributionChannel', SalesContracts, 'Edm.String');
  /**
   * Static representation of the [[distributionChannelName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISTRIBUTION_CHANNEL_NAME: StringField<SalesContracts> = new StringField('DistributionChannelName', SalesContracts, 'Edm.String');
  /**
   * Static representation of the [[division]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DIVISION: StringField<SalesContracts> = new StringField('Division', SalesContracts, 'Edm.String');
  /**
   * Static representation of the [[divisionName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DIVISION_NAME: StringField<SalesContracts> = new StringField('DivisionName', SalesContracts, 'Edm.String');
  /**
   * Static representation of the [[createdByUser]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_USER: StringField<SalesContracts> = new StringField('CreatedByUser', SalesContracts, 'Edm.String');
  /**
   * Static representation of the [[academicTitleName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACADEMIC_TITLE_NAME: StringField<SalesContracts> = new StringField('AcademicTitleName', SalesContracts, 'Edm.String');
  /**
   * Static representation of the [[createdByUserFirstName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_USER_FIRST_NAME: StringField<SalesContracts> = new StringField('CreatedByUserFirstName', SalesContracts, 'Edm.String');
  /**
   * Static representation of the [[createdByUserLastName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_USER_LAST_NAME: StringField<SalesContracts> = new StringField('CreatedByUserLastName', SalesContracts, 'Edm.String');
  /**
   * Static representation of the [[vbelnGrp]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VBELN_GRP: StringField<SalesContracts> = new StringField('VBELN_GRP', SalesContracts, 'Edm.String');
  /**
   * All fields of the SalesContracts entity.
   */
  export const _allFields: Array<StringField<SalesContracts> | BigNumberField<SalesContracts> | DateField<SalesContracts>> = [
    SalesContracts.VBELN_DESCR,
    SalesContracts.SALES_CONTRACT,
    SalesContracts.SOLD_TO_PARTY,
    SalesContracts.PURCHASE_ORDER_BY_CUSTOMER,
    SalesContracts.NET_AMOUNT,
    SalesContracts.SALES_CONTRACT_DATE,
    SalesContracts.SHIP_TO_PARTY,
    SalesContracts.SALES_CONTRACT_VALIDITY_START_DATE,
    SalesContracts.SALES_CONTRACT_VALIDITY_END_DATE,
    SalesContracts.OVERALL_SD_PROCESS_STATUS_DESC,
    SalesContracts.ABSTK_TEXT,
    SalesContracts.VBTYP,
    SalesContracts.SOLD_TO_PARTY_NAME,
    SalesContracts.SHIP_TO_PARTY_NAME,
    SalesContracts.SHIP_TO_PARTY_ADDITIONAL_NAME,
    SalesContracts.SOLD_TO_PARTY_ADDITIONAL_NAME,
    SalesContracts.SALES_ORGANIZATION,
    SalesContracts.SALES_ORGANIZATION_NAME,
    SalesContracts.NET_AMOUNT_CURRENCY,
    SalesContracts.DISTRIBUTION_CHANNEL,
    SalesContracts.DISTRIBUTION_CHANNEL_NAME,
    SalesContracts.DIVISION,
    SalesContracts.DIVISION_NAME,
    SalesContracts.CREATED_BY_USER,
    SalesContracts.ACADEMIC_TITLE_NAME,
    SalesContracts.CREATED_BY_USER_FIRST_NAME,
    SalesContracts.CREATED_BY_USER_LAST_NAME,
    SalesContracts.VBELN_GRP
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<SalesContracts> = new AllFields('*', SalesContracts);
  /**
   * All key fields of the SalesContracts entity.
   */
  export const _keyFields: Array<Selectable<SalesContracts>> = [SalesContracts.SALES_CONTRACT];
  /**
   * Mapping of all key field names to the respective static field property SalesContracts.
   */
  export const _keys: { [keys: string]: Selectable<SalesContracts> } = SalesContracts._keyFields.reduce((acc: { [keys: string]: Selectable<SalesContracts> }, field: Selectable<SalesContracts>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
