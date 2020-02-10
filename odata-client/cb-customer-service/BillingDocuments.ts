/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */

import { BillingDocumentsRequestBuilder } from './BillingDocumentsRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Selectable, StringField } from '@sap/cloud-sdk-core';

/**
 * This class represents the entity "BillingDocuments" of service "CB_CUSTOMER_SRV".
 */
export class BillingDocuments extends Entity implements BillingDocumentsType {
  /**
   * Technical entity name for BillingDocuments.
   */
  static _entityName = 'BillingDocuments';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for BillingDocuments.
   */
  static _serviceName = 'CB_CUSTOMER_SRV';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/CB_CUSTOMER_SRV';
  /**
   * Billing Type.
   * Maximum length: 60.
   * @nullable
   */
  billingDocumentDescription?: string;
  /**
   * Payer ID.
   * Maximum length: 10.
   * @nullable
   */
  payerId?: string;
  /**
   * Billing Date.
   * @nullable
   */
  billingDocumentDate?: Moment;
  /**
   * Overall Billing Status.
   * Maximum length: 1.
   * @nullable
   */
  vfStatus?: string;
  /**
   * Net Value.
   * @nullable
   */
  netValue?: BigNumber;
  /**
   * Billing Document Number.
   * Maximum length: 10.
   */
  billingDocument!: string;
  /**
   * Payer Name.
   * Maximum length: 40.
   * @nullable
   */
  payerName?: string;
  /**
   * Bill-To Party ID.
   * Maximum length: 10.
   * @nullable
   */
  billToPartyId?: string;
  /**
   * Sold-To Party ID.
   * Maximum length: 10.
   * @nullable
   */
  soldToKunnr?: string;
  /**
   * Sold-To Party Name.
   * Maximum length: 40.
   * @nullable
   */
  soldToName1?: string;
  /**
   * Bill-To Party Name.
   * Maximum length: 40.
   * @nullable
   */
  billToPartyName?: string;
  /**
   * Sales Organization ID.
   * Maximum length: 4.
   * @nullable
   */
  salesOrganization?: string;
  /**
   * Company Code.
   * Maximum length: 4.
   * @nullable
   */
  companyCode?: string;
  /**
   * Company Code name.
   * Maximum length: 25.
   * @nullable
   */
  bukrsText?: string;
  /**
   * Billing Issue Type.
   * Maximum length: 1.
   * @nullable
   */
  vfTodo?: string;
  /**
   * Reference.
   * Maximum length: 16.
   * @nullable
   */
  xblnr?: string;
  /**
   * Sales Organization Name.
   * Maximum length: 60.
   * @nullable
   */
  salesOrganizationName?: string;
  /**
   * Net Value Currency.
   * Maximum length: 5.
   * @nullable
   */
  netValueCurrency?: string;
  /**
   * Payment Terms ID.
   * Maximum length: 4.
   * @nullable
   */
  paymentTerms?: string;
  /**
   * Tax Amount.
   * @nullable
   */
  taxAmount?: BigNumber;
  /**
   * Currency.
   * Maximum length: 5.
   * @nullable
   */
  taxAmountCurrency?: string;
  /**
   * Payment Terms Description.
   * Maximum length: 30.
   * @nullable
   */
  paymentTermsDescription?: string;
  /**
   * Document Category.
   * Maximum length: 1.
   * @nullable
   */
  documentCategory?: string;
  /**
   * Journal Entry Number.
   * Maximum length: 10.
   * @nullable
   */
  accountingDocumentNumber?: string;
  /**
   * Fiscal Year.
   * Maximum length: 4.
   * @nullable
   */
  fiscalYear?: string;
  /**
   * Overall Billing Status Description.
   * Maximum length: 60.
   * @nullable
   */
  vfStatusText?: string;
  /**
   * Billing Issue Type Description.
   * Maximum length: 60.
   * @nullable
   */
  vfTodoText?: string;

  /**
   * Returns an entity builder to construct instances `BillingDocuments`.
   * @returns A builder that constructs instances of entity type `BillingDocuments`.
   */
  static builder(): EntityBuilderType<BillingDocuments, BillingDocumentsTypeForceMandatory> {
    return Entity.entityBuilder(BillingDocuments);
  }

  /**
   * Returns a request builder to construct requests for operations on the `BillingDocuments` entity type.
   * @returns A `BillingDocuments` request builder.
   */
  static requestBuilder(): BillingDocumentsRequestBuilder {
    return new BillingDocumentsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `BillingDocuments`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `BillingDocuments`.
   */
  static customField(fieldName: string): CustomField<BillingDocuments> {
    return Entity.customFieldSelector(fieldName, BillingDocuments);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface BillingDocumentsType {
  billingDocumentDescription?: string;
  payerId?: string;
  billingDocumentDate?: Moment;
  vfStatus?: string;
  netValue?: BigNumber;
  billingDocument: string;
  payerName?: string;
  billToPartyId?: string;
  soldToKunnr?: string;
  soldToName1?: string;
  billToPartyName?: string;
  salesOrganization?: string;
  companyCode?: string;
  bukrsText?: string;
  vfTodo?: string;
  xblnr?: string;
  salesOrganizationName?: string;
  netValueCurrency?: string;
  paymentTerms?: string;
  taxAmount?: BigNumber;
  taxAmountCurrency?: string;
  paymentTermsDescription?: string;
  documentCategory?: string;
  accountingDocumentNumber?: string;
  fiscalYear?: string;
  vfStatusText?: string;
  vfTodoText?: string;
}

export interface BillingDocumentsTypeForceMandatory {
  billingDocumentDescription: string;
  payerId: string;
  billingDocumentDate: Moment;
  vfStatus: string;
  netValue: BigNumber;
  billingDocument: string;
  payerName: string;
  billToPartyId: string;
  soldToKunnr: string;
  soldToName1: string;
  billToPartyName: string;
  salesOrganization: string;
  companyCode: string;
  bukrsText: string;
  vfTodo: string;
  xblnr: string;
  salesOrganizationName: string;
  netValueCurrency: string;
  paymentTerms: string;
  taxAmount: BigNumber;
  taxAmountCurrency: string;
  paymentTermsDescription: string;
  documentCategory: string;
  accountingDocumentNumber: string;
  fiscalYear: string;
  vfStatusText: string;
  vfTodoText: string;
}

export namespace BillingDocuments {
  /**
   * Static representation of the [[billingDocumentDescription]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BILLING_DOCUMENT_DESCRIPTION: StringField<BillingDocuments> = new StringField('BillingDocumentDescription', BillingDocuments, 'Edm.String');
  /**
   * Static representation of the [[payerId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYER_ID: StringField<BillingDocuments> = new StringField('PayerId', BillingDocuments, 'Edm.String');
  /**
   * Static representation of the [[billingDocumentDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BILLING_DOCUMENT_DATE: DateField<BillingDocuments> = new DateField('BillingDocumentDate', BillingDocuments, 'Edm.DateTime');
  /**
   * Static representation of the [[vfStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VF_STATUS: StringField<BillingDocuments> = new StringField('VF_STATUS', BillingDocuments, 'Edm.String');
  /**
   * Static representation of the [[netValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NET_VALUE: BigNumberField<BillingDocuments> = new BigNumberField('NetValue', BillingDocuments, 'Edm.Decimal');
  /**
   * Static representation of the [[billingDocument]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BILLING_DOCUMENT: StringField<BillingDocuments> = new StringField('BillingDocument', BillingDocuments, 'Edm.String');
  /**
   * Static representation of the [[payerName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYER_NAME: StringField<BillingDocuments> = new StringField('PayerName', BillingDocuments, 'Edm.String');
  /**
   * Static representation of the [[billToPartyId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BILL_TO_PARTY_ID: StringField<BillingDocuments> = new StringField('BillToPartyId', BillingDocuments, 'Edm.String');
  /**
   * Static representation of the [[soldToKunnr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOLD_TO_KUNNR: StringField<BillingDocuments> = new StringField('SOLD_TO_KUNNR', BillingDocuments, 'Edm.String');
  /**
   * Static representation of the [[soldToName1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOLD_TO_NAME_1: StringField<BillingDocuments> = new StringField('SOLD_TO_NAME1', BillingDocuments, 'Edm.String');
  /**
   * Static representation of the [[billToPartyName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BILL_TO_PARTY_NAME: StringField<BillingDocuments> = new StringField('BillToPartyName', BillingDocuments, 'Edm.String');
  /**
   * Static representation of the [[salesOrganization]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_ORGANIZATION: StringField<BillingDocuments> = new StringField('SalesOrganization', BillingDocuments, 'Edm.String');
  /**
   * Static representation of the [[companyCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPANY_CODE: StringField<BillingDocuments> = new StringField('CompanyCode', BillingDocuments, 'Edm.String');
  /**
   * Static representation of the [[bukrsText]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUKRS_TEXT: StringField<BillingDocuments> = new StringField('BUKRS_TEXT', BillingDocuments, 'Edm.String');
  /**
   * Static representation of the [[vfTodo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VF_TODO: StringField<BillingDocuments> = new StringField('VF_TODO', BillingDocuments, 'Edm.String');
  /**
   * Static representation of the [[xblnr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const XBLNR: StringField<BillingDocuments> = new StringField('XBLNR', BillingDocuments, 'Edm.String');
  /**
   * Static representation of the [[salesOrganizationName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_ORGANIZATION_NAME: StringField<BillingDocuments> = new StringField('SalesOrganizationName', BillingDocuments, 'Edm.String');
  /**
   * Static representation of the [[netValueCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NET_VALUE_CURRENCY: StringField<BillingDocuments> = new StringField('NetValueCurrency', BillingDocuments, 'Edm.String');
  /**
   * Static representation of the [[paymentTerms]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_TERMS: StringField<BillingDocuments> = new StringField('PaymentTerms', BillingDocuments, 'Edm.String');
  /**
   * Static representation of the [[taxAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_AMOUNT: BigNumberField<BillingDocuments> = new BigNumberField('TaxAmount', BillingDocuments, 'Edm.Decimal');
  /**
   * Static representation of the [[taxAmountCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_AMOUNT_CURRENCY: StringField<BillingDocuments> = new StringField('TaxAmountCurrency', BillingDocuments, 'Edm.String');
  /**
   * Static representation of the [[paymentTermsDescription]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_TERMS_DESCRIPTION: StringField<BillingDocuments> = new StringField('PaymentTermsDescription', BillingDocuments, 'Edm.String');
  /**
   * Static representation of the [[documentCategory]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_CATEGORY: StringField<BillingDocuments> = new StringField('DocumentCategory', BillingDocuments, 'Edm.String');
  /**
   * Static representation of the [[accountingDocumentNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNTING_DOCUMENT_NUMBER: StringField<BillingDocuments> = new StringField('AccountingDocumentNumber', BillingDocuments, 'Edm.String');
  /**
   * Static representation of the [[fiscalYear]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FISCAL_YEAR: StringField<BillingDocuments> = new StringField('FiscalYear', BillingDocuments, 'Edm.String');
  /**
   * Static representation of the [[vfStatusText]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VF_STATUS_TEXT: StringField<BillingDocuments> = new StringField('VF_STATUS_TEXT', BillingDocuments, 'Edm.String');
  /**
   * Static representation of the [[vfTodoText]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VF_TODO_TEXT: StringField<BillingDocuments> = new StringField('VF_TODO_TEXT', BillingDocuments, 'Edm.String');
  /**
   * All fields of the BillingDocuments entity.
   */
  export const _allFields: Array<StringField<BillingDocuments> | DateField<BillingDocuments> | BigNumberField<BillingDocuments>> = [
    BillingDocuments.BILLING_DOCUMENT_DESCRIPTION,
    BillingDocuments.PAYER_ID,
    BillingDocuments.BILLING_DOCUMENT_DATE,
    BillingDocuments.VF_STATUS,
    BillingDocuments.NET_VALUE,
    BillingDocuments.BILLING_DOCUMENT,
    BillingDocuments.PAYER_NAME,
    BillingDocuments.BILL_TO_PARTY_ID,
    BillingDocuments.SOLD_TO_KUNNR,
    BillingDocuments.SOLD_TO_NAME_1,
    BillingDocuments.BILL_TO_PARTY_NAME,
    BillingDocuments.SALES_ORGANIZATION,
    BillingDocuments.COMPANY_CODE,
    BillingDocuments.BUKRS_TEXT,
    BillingDocuments.VF_TODO,
    BillingDocuments.XBLNR,
    BillingDocuments.SALES_ORGANIZATION_NAME,
    BillingDocuments.NET_VALUE_CURRENCY,
    BillingDocuments.PAYMENT_TERMS,
    BillingDocuments.TAX_AMOUNT,
    BillingDocuments.TAX_AMOUNT_CURRENCY,
    BillingDocuments.PAYMENT_TERMS_DESCRIPTION,
    BillingDocuments.DOCUMENT_CATEGORY,
    BillingDocuments.ACCOUNTING_DOCUMENT_NUMBER,
    BillingDocuments.FISCAL_YEAR,
    BillingDocuments.VF_STATUS_TEXT,
    BillingDocuments.VF_TODO_TEXT
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<BillingDocuments> = new AllFields('*', BillingDocuments);
  /**
   * All key fields of the BillingDocuments entity.
   */
  export const _keyFields: Array<Selectable<BillingDocuments>> = [BillingDocuments.BILLING_DOCUMENT];
  /**
   * Mapping of all key field names to the respective static field property BillingDocuments.
   */
  export const _keys: { [keys: string]: Selectable<BillingDocuments> } = BillingDocuments._keyFields.reduce((acc: { [keys: string]: Selectable<BillingDocuments> }, field: Selectable<BillingDocuments>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
