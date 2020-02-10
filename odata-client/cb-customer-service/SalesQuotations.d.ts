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
export declare class SalesQuotations extends Entity implements SalesQuotationsType {
    /**
     * Technical entity name for SalesQuotations.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SalesQuotations.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
    salesQuotation: string;
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
    static builder(): EntityBuilderType<SalesQuotations, SalesQuotationsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `SalesQuotations` entity type.
     * @returns A `SalesQuotations` request builder.
     */
    static requestBuilder(): SalesQuotationsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SalesQuotations`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SalesQuotations`.
     */
    static customField(fieldName: string): CustomField<SalesQuotations>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace SalesQuotations {
    /**
     * Static representation of the [[vbelnDescr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VBELN_DESCR: StringField<SalesQuotations>;
    /**
     * Static representation of the [[soldToParty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOLD_TO_PARTY: StringField<SalesQuotations>;
    /**
     * Static representation of the [[salesQuotation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_QUOTATION: StringField<SalesQuotations>;
    /**
     * Static representation of the [[soldToPartyName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOLD_TO_PARTY_NAME: StringField<SalesQuotations>;
    /**
     * Static representation of the [[soldToPartyAdditionalName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOLD_TO_PARTY_ADDITIONAL_NAME: StringField<SalesQuotations>;
    /**
     * Static representation of the [[shipToParty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHIP_TO_PARTY: StringField<SalesQuotations>;
    /**
     * Static representation of the [[purchaseOrderByCustomer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_ORDER_BY_CUSTOMER: StringField<SalesQuotations>;
    /**
     * Static representation of the [[salesQuotationNetAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_QUOTATION_NET_AMOUNT: BigNumberField<SalesQuotations>;
    /**
     * Static representation of the [[salesQuotationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_QUOTATION_DATE: DateField<SalesQuotations>;
    /**
     * Static representation of the [[transactionCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TRANSACTION_CURRENCY: StringField<SalesQuotations>;
    /**
     * Static representation of the [[salesQuotationValdtyStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_QUOTATION_VALDTY_START_DATE: DateField<SalesQuotations>;
    /**
     * Static representation of the [[salesQuotationValidityEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_QUOTATION_VALIDITY_END_DATE: DateField<SalesQuotations>;
    /**
     * Static representation of the [[overallSdProcessStatusDesc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OVERALL_SD_PROCESS_STATUS_DESC: StringField<SalesQuotations>;
    /**
     * Static representation of the [[ovrlSdDocumentRejectionStsDesc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OVRL_SD_DOCUMENT_REJECTION_STS_DESC: StringField<SalesQuotations>;
    /**
     * Static representation of the [[shipToPartyName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHIP_TO_PARTY_NAME: StringField<SalesQuotations>;
    /**
     * Static representation of the [[shipToPartyAdditionalName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHIP_TO_PARTY_ADDITIONAL_NAME: StringField<SalesQuotations>;
    /**
     * Static representation of the [[salesOrganization]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_ORGANIZATION: StringField<SalesQuotations>;
    /**
     * Static representation of the [[salesOrganizationName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_ORGANIZATION_NAME: StringField<SalesQuotations>;
    /**
     * Static representation of the [[distributionChannel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISTRIBUTION_CHANNEL: StringField<SalesQuotations>;
    /**
     * Static representation of the [[division]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DIVISION: StringField<SalesQuotations>;
    /**
     * Static representation of the [[createdByUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_USER: StringField<SalesQuotations>;
    /**
     * Static representation of the [[distributionChannelName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISTRIBUTION_CHANNEL_NAME: StringField<SalesQuotations>;
    /**
     * Static representation of the [[academicTitleName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACADEMIC_TITLE_NAME: StringField<SalesQuotations>;
    /**
     * Static representation of the [[createdByUserFirstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_USER_FIRST_NAME: StringField<SalesQuotations>;
    /**
     * Static representation of the [[createdByUserLastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_USER_LAST_NAME: StringField<SalesQuotations>;
    /**
     * Static representation of the [[divisionName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DIVISION_NAME: StringField<SalesQuotations>;
    /**
     * Static representation of the [[sdDocumentCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SD_DOCUMENT_CATEGORY: StringField<SalesQuotations>;
    /**
     * Static representation of the [[vdatu]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VDATU: DateField<SalesQuotations>;
    /**
     * All fields of the SalesQuotations entity.
     */
    const _allFields: Array<StringField<SalesQuotations> | BigNumberField<SalesQuotations> | DateField<SalesQuotations>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<SalesQuotations>;
    /**
     * All key fields of the SalesQuotations entity.
     */
    const _keyFields: Array<Selectable<SalesQuotations>>;
    /**
     * Mapping of all key field names to the respective static field property SalesQuotations.
     */
    const _keys: {
        [keys: string]: Selectable<SalesQuotations>;
    };
}
//# sourceMappingURL=SalesQuotations.d.ts.map