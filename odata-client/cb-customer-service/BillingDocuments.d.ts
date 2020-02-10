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
export declare class BillingDocuments extends Entity implements BillingDocumentsType {
    /**
     * Technical entity name for BillingDocuments.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for BillingDocuments.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
    billingDocument: string;
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
    static builder(): EntityBuilderType<BillingDocuments, BillingDocumentsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `BillingDocuments` entity type.
     * @returns A `BillingDocuments` request builder.
     */
    static requestBuilder(): BillingDocumentsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BillingDocuments`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BillingDocuments`.
     */
    static customField(fieldName: string): CustomField<BillingDocuments>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace BillingDocuments {
    /**
     * Static representation of the [[billingDocumentDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BILLING_DOCUMENT_DESCRIPTION: StringField<BillingDocuments>;
    /**
     * Static representation of the [[payerId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYER_ID: StringField<BillingDocuments>;
    /**
     * Static representation of the [[billingDocumentDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BILLING_DOCUMENT_DATE: DateField<BillingDocuments>;
    /**
     * Static representation of the [[vfStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VF_STATUS: StringField<BillingDocuments>;
    /**
     * Static representation of the [[netValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NET_VALUE: BigNumberField<BillingDocuments>;
    /**
     * Static representation of the [[billingDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BILLING_DOCUMENT: StringField<BillingDocuments>;
    /**
     * Static representation of the [[payerName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYER_NAME: StringField<BillingDocuments>;
    /**
     * Static representation of the [[billToPartyId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BILL_TO_PARTY_ID: StringField<BillingDocuments>;
    /**
     * Static representation of the [[soldToKunnr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOLD_TO_KUNNR: StringField<BillingDocuments>;
    /**
     * Static representation of the [[soldToName1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOLD_TO_NAME_1: StringField<BillingDocuments>;
    /**
     * Static representation of the [[billToPartyName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BILL_TO_PARTY_NAME: StringField<BillingDocuments>;
    /**
     * Static representation of the [[salesOrganization]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_ORGANIZATION: StringField<BillingDocuments>;
    /**
     * Static representation of the [[companyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPANY_CODE: StringField<BillingDocuments>;
    /**
     * Static representation of the [[bukrsText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUKRS_TEXT: StringField<BillingDocuments>;
    /**
     * Static representation of the [[vfTodo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VF_TODO: StringField<BillingDocuments>;
    /**
     * Static representation of the [[xblnr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const XBLNR: StringField<BillingDocuments>;
    /**
     * Static representation of the [[salesOrganizationName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_ORGANIZATION_NAME: StringField<BillingDocuments>;
    /**
     * Static representation of the [[netValueCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NET_VALUE_CURRENCY: StringField<BillingDocuments>;
    /**
     * Static representation of the [[paymentTerms]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_TERMS: StringField<BillingDocuments>;
    /**
     * Static representation of the [[taxAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_AMOUNT: BigNumberField<BillingDocuments>;
    /**
     * Static representation of the [[taxAmountCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_AMOUNT_CURRENCY: StringField<BillingDocuments>;
    /**
     * Static representation of the [[paymentTermsDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_TERMS_DESCRIPTION: StringField<BillingDocuments>;
    /**
     * Static representation of the [[documentCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENT_CATEGORY: StringField<BillingDocuments>;
    /**
     * Static representation of the [[accountingDocumentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCOUNTING_DOCUMENT_NUMBER: StringField<BillingDocuments>;
    /**
     * Static representation of the [[fiscalYear]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FISCAL_YEAR: StringField<BillingDocuments>;
    /**
     * Static representation of the [[vfStatusText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VF_STATUS_TEXT: StringField<BillingDocuments>;
    /**
     * Static representation of the [[vfTodoText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VF_TODO_TEXT: StringField<BillingDocuments>;
    /**
     * All fields of the BillingDocuments entity.
     */
    const _allFields: Array<StringField<BillingDocuments> | DateField<BillingDocuments> | BigNumberField<BillingDocuments>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<BillingDocuments>;
    /**
     * All key fields of the BillingDocuments entity.
     */
    const _keyFields: Array<Selectable<BillingDocuments>>;
    /**
     * Mapping of all key field names to the respective static field property BillingDocuments.
     */
    const _keys: {
        [keys: string]: Selectable<BillingDocuments>;
    };
}
//# sourceMappingURL=BillingDocuments.d.ts.map